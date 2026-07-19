from __future__ import annotations

import sys
import tomllib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
AGENT_DIR = ROOT / ".codex" / "agents"
SKILL_DIR = ROOT / ".agents" / "skills" / "paper-explainer"

EXPECTED_AGENTS = {
    "site_maintainer.toml": ("site_maintainer", "workspace-write"),
    "site_reviewer.toml": ("site_reviewer", "read-only"),
    "paper_researcher.toml": ("paper_researcher", "read-only"),
    "visual_editor.toml": ("visual_editor", "read-only"),
    "explainer_writer.toml": ("explainer_writer", "workspace-write"),
    "data_visualization_engineer.toml": (
        "data_visualization_engineer",
        "workspace-write",
    ),
    "visual_implementer.toml": ("visual_implementer", "workspace-write"),
    "visual_qa.toml": ("visual_qa", "workspace-write"),
    "publication_reviewer.toml": ("publication_reviewer", "read-only"),
}


def fail(message: str) -> None:
    print(f"agent harness: {message}", file=sys.stderr)
    raise SystemExit(1)


def load_toml(path: Path) -> dict[str, object]:
    if not path.is_file():
        fail(f"missing {path.relative_to(ROOT)}")
    try:
        with path.open("rb") as source:
            return tomllib.load(source)
    except tomllib.TOMLDecodeError as error:
        fail(f"invalid TOML in {path.relative_to(ROOT)}: {error}")


def check_config() -> None:
    config = load_toml(ROOT / ".codex" / "config.toml")
    agents = config.get("agents")
    if not isinstance(agents, dict):
        fail(".codex/config.toml must define [agents]")
    if agents.get("max_threads") != 4 or agents.get("max_depth") != 1:
        fail("agent concurrency must remain max_threads=4 and max_depth=1")


def check_agents() -> None:
    for filename, (expected_name, expected_sandbox) in EXPECTED_AGENTS.items():
        data = load_toml(AGENT_DIR / filename)
        if data.get("name") != expected_name:
            fail(f"{filename} must use name={expected_name!r}")
        if data.get("sandbox_mode") != expected_sandbox:
            fail(f"{filename} must use sandbox_mode={expected_sandbox!r}")
        for key in ("description", "developer_instructions"):
            value = data.get(key)
            if not isinstance(value, str) or not value.strip():
                fail(f"{filename} requires a non-empty {key}")


def check_skill() -> None:
    skill_path = SKILL_DIR / "SKILL.md"
    if not skill_path.is_file():
        fail("missing paper-explainer skill")
    text = skill_path.read_text(encoding="utf-8")
    parts = text.split("---", 2)
    if len(parts) != 3 or "name: paper-explainer" not in parts[1]:
        fail("paper-explainer SKILL.md has invalid frontmatter")
    required_phrases = (
        "paper_researcher",
        "visual_editor",
        "explainer_writer",
        "data_visualization_engineer",
        "visual_implementer",
        "VISUAL_QA",
        "publication_reviewer",
        "Never substitute indexed metadata for an explanation",
        "every difficult concept",
        "Reject generic box sequences",
        "TikZ, Mermaid, and Python",
        "SVG, CSS, and JavaScript",
    )
    for phrase in required_phrases:
        if phrase not in text:
            fail(f"paper-explainer skill must retain {phrase!r}")
    for relative_path in (
        "agents/openai.yaml",
        "references/publication-contract.md",
        "references/visual-manifest-template.md",
    ):
        if not (SKILL_DIR / relative_path).is_file():
            fail(f"paper-explainer skill is missing {relative_path}")


def check_routing_docs() -> None:
    root_agents = (ROOT / "AGENTS.md").read_text(encoding="utf-8")
    for path in ("docs/agent-harness.md", ".agents/skills/paper-explainer"):
        if path not in root_agents:
            fail(f"AGENTS.md must route agents to {path}")

    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    required_readme_phrases = (
        "Visual explanation standard",
        "There is no one-visual-per-paper quota",
        "paragraph-level visual",
    )
    for phrase in required_readme_phrases:
        if phrase not in readme:
            fail(f"README.md must retain {phrase!r}")


def main() -> None:
    check_config()
    check_agents()
    check_skill()
    check_routing_docs()
    print("agent harness: ok")


if __name__ == "__main__":
    main()
