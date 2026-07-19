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


def check_record(record: str, paragraph_id: str) -> None:
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
        "- Shared paragraph scope:",
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
    if decision == "YES" and status == "NOT_NEEDED":
        fail(f"{paragraph_id} is YES and cannot be NOT_NEEDED")

    for label in ("A", "B", "C"):
        check_treatment(record, paragraph_id, label)


def check_manifest(fixture_path: Path) -> int:
    path = manifest_path(fixture_path)
    if not path.is_file():
        fail(f"missing {path.relative_to(ROOT)}")
    text = path.read_text(encoding="utf-8")
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

    for index, match in enumerate(matches):
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        check_record(text[match.start() : end], match.group(1))
    return len(expected)


def main() -> None:
    fixture_paths = sorted(FIXTURE_DIR.glob("*.json"))
    if not fixture_paths:
        fail("no explainer fixtures found")
    total = sum(check_manifest(fixture_path) for fixture_path in fixture_paths)
    print(f"visual manifests: ok ({len(fixture_paths)} papers, {total} paragraphs)")


if __name__ == "__main__":
    main()
