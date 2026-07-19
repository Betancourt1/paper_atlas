from __future__ import annotations

import ast
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FIXTURE_DIR = ROOT / "packages" / "test-fixtures" / "explainers"
MANIFEST_DIR = ROOT / "docs" / "visual-manifests"
PARAGRAPH_HEADING = re.compile(r"(?m)^## `([^`]+)`$")


def fail(message: str) -> None:
    print(f"visual manifests: {message}", file=sys.stderr)
    raise SystemExit(1)


def manifest_path(fixture_path: Path) -> Path:
    paper_name = fixture_path.stem.replace("-", "_").upper()
    return MANIFEST_DIR / f"VISUAL_MANIFEST_{paper_name}.md"


def expected_paragraphs(fixture_path: Path) -> list[str]:
    document = json.loads(fixture_path.read_text(encoding="utf-8"))
    return [
        f"{block['id']}_p{index}"
        for block in document["blocks"]
        for index, _paragraph in enumerate(block["paragraphs"], start=1)
    ]


def require_once(record: str, phrase: str, paragraph_id: str) -> None:
    count = record.count(phrase)
    if count != 1:
        fail(f"{paragraph_id} requires exactly one {phrase!r}; found {count}")


def check_treatment(record: str, paragraph_id: str, label: str) -> None:
    start = f"### Treatment {label} —"
    match = re.search(rf"(?m)^{re.escape(start)}.*$", record)
    if match is None:
        fail(f"{paragraph_id} is missing Treatment {label}")

    next_label = chr(ord(label) + 1) if label != "C" else None
    if next_label:
        end_match = re.search(
            rf"(?m)^### Treatment {next_label} —.*$", record[match.end() :]
        )
    else:
        end_match = re.search(r"(?m)^### Implementation record$", record[match.end() :])
    if end_match is None:
        fail(f"{paragraph_id} has an unterminated Treatment {label}")
    treatment = record[match.start() : match.end() + end_match.start()]

    for field in (
        "- Teaching purpose:",
        "- Encoding and reading order:",
        "- Evidence and limitations:",
        "- Recommended web medium:",
        "- Mobile, accessibility, and motion behavior:",
        "#### TikZ",
        "#### Mermaid",
        "#### Python",
    ):
        require_once(treatment, field, f"{paragraph_id} Treatment {label}")

    if treatment.count("```tex") != 1 or treatment.count("```mermaid") != 1:
        fail(f"{paragraph_id} Treatment {label} requires TikZ and Mermaid code")
    python_blocks = re.findall(r"```python\n(.*?)\n```", treatment, flags=re.DOTALL)
    if len(python_blocks) != 1:
        fail(f"{paragraph_id} Treatment {label} requires one Python code block")
    try:
        ast.parse(python_blocks[0])
    except SyntaxError as error:
        fail(f"{paragraph_id} Treatment {label} has invalid Python: {error}")

    diagram_copy = "\n".join(
        line for line in treatment.splitlines() if not line.startswith("- Text anchor:")
    )
    if "…" in diagram_copy:
        fail(f"{paragraph_id} Treatment {label} contains ellipsized visual copy")


def implementation_field(record: str, field: str, paragraph_id: str) -> str:
    match = re.search(rf"(?m)^- {re.escape(field)}: (.*)$", record)
    if match is None:
        fail(f"{paragraph_id} is missing implementation field {field}")
    return match.group(1)


def check_record(record: str, paragraph_id: str) -> dict[str, object]:
    for field in (
        "- Location:",
        "- Text anchor:",
        "- Claims and sources:",
        "- Visual needed:",
        "- Decision rationale:",
        "- Explanatory job:",
        "### Implementation record",
        "- Status:",
        "- Selected treatment:",
        "- Selection rationale:",
        "- Delivery medium:",
        "- Visual ID and placement:",
        "- Shared paragraph scope:",
        "- Changed files:",
        "- Accessibility and fallback verification:",
        "- Desktop and mobile verification:",
        "- Evidence deviations:",
    ):
        require_once(record, field, paragraph_id)

    decision_match = re.search(r"(?m)^- Visual needed: `(YES|NO)`$", record)
    status_match = re.search(
        r"(?m)^- Status: `(PENDING|NOT_NEEDED|IMPLEMENTED|REWORK_REQUIRED)`$",
        record,
    )
    if decision_match is None or status_match is None:
        fail(f"{paragraph_id} has an invalid decision or implementation status")
    decision, status = decision_match.group(1), status_match.group(1)
    if decision == "NO" and status != "NOT_NEEDED":
        fail(f"{paragraph_id} is NO and must be NOT_NEEDED")
    selected = implementation_field(record, "Selected treatment", paragraph_id)
    placement = implementation_field(record, "Visual ID and placement", paragraph_id)
    shared_scope = implementation_field(record, "Shared paragraph scope", paragraph_id)
    if decision == "YES":
        if status != "IMPLEMENTED":
            fail(f"{paragraph_id} is YES and must be IMPLEMENTED")
        if selected not in {"`A`", "`B`", "`C`"}:
            fail(f"{paragraph_id} must select Treatment A, B, or C")
        visual_match = re.match(r"`([^`]+)`", placement)
        if visual_match is None:
            fail(f"{paragraph_id} must name an implemented visual ID")
        visual_id: str | None = visual_match.group(1)
    else:
        if selected != "`NONE`" or not placement.startswith("`NONE`"):
            fail(f"{paragraph_id} is NO and must remain prose-only")
        visual_id = None

    for label in ("A", "B", "C"):
        check_treatment(record, paragraph_id, label)

    return {
        "decision": decision,
        "status": status,
        "visual_id": visual_id,
        "shared_scope": re.findall(r"`([^`]+)`", shared_scope),
        "placement": placement,
    }


def check_manifest(fixture_path: Path) -> int:
    fixture = json.loads(fixture_path.read_text(encoding="utf-8"))
    visuals = {visual["id"]: visual for visual in fixture["visuals"]}
    path = manifest_path(fixture_path)
    if not path.is_file():
        fail(f"missing {path.relative_to(ROOT)}")
    text = path.read_text(encoding="utf-8")
    if "- Implementer status: `COMPLETE`" not in text:
        fail(f"{path.name} implementer status is not COMPLETE")
    matches = list(PARAGRAPH_HEADING.finditer(text))
    actual = [match.group(1) for match in matches]
    expected = expected_paragraphs(fixture_path)
    if actual != expected:
        missing = [paragraph_id for paragraph_id in expected if paragraph_id not in actual]
        extra = [paragraph_id for paragraph_id in actual if paragraph_id not in expected]
        fail(
            f"{path.name} paragraph order or coverage differs from fixture; "
            f"missing={missing}, extra={extra}"
        )

    implementations: dict[str, dict[str, object]] = {}
    visual_records: dict[str, list[str]] = {}
    for index, match in enumerate(matches):
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        paragraph_id = match.group(1)
        implementation = check_record(text[match.start() : end], paragraph_id)
        implementations[paragraph_id] = implementation
        visual_id = implementation["visual_id"]
        if isinstance(visual_id, str):
            if visual_id not in visuals:
                fail(f"{paragraph_id} references missing fixture visual {visual_id}")
            visual_records.setdefault(visual_id, []).append(paragraph_id)

    for visual_id, visual in visuals.items():
        if visual_id not in visual_records:
            fail(f"fixture visual {visual_id} is not selected by any YES paragraph")
        placement = visual["after_paragraph_id"]
        if placement not in implementations:
            fail(f"fixture visual {visual_id} has unknown paragraph placement {placement}")
        if implementations[placement]["decision"] != "YES":
            fail(f"fixture visual {visual_id} is placed after NO paragraph {placement}")
        records = visual_records[visual_id]
        if placement not in records:
            fail(f"fixture visual {visual_id} is not placed inside its shared scope")
        for paragraph_id in records:
            declared_scope = implementations[paragraph_id]["shared_scope"]
            expected_scope = records if len(records) > 1 else []
            if declared_scope != expected_scope:
                fail(
                    f"{paragraph_id} scope {declared_scope} does not match all records "
                    f"served by {visual_id}: {expected_scope}"
                )
            placement_text = implementations[paragraph_id]["placement"]
            if f"after `{placement}`" not in placement_text:
                fail(f"{paragraph_id} records the wrong placement for {visual_id}")
    return len(expected)


def main() -> None:
    fixture_paths = sorted(FIXTURE_DIR.glob("*.json"))
    if not fixture_paths:
        fail("no explainer fixtures found")
    total = sum(check_manifest(fixture_path) for fixture_path in fixture_paths)
    print(f"visual manifests: ok ({len(fixture_paths)} papers, {total} paragraphs)")


if __name__ == "__main__":
    main()
