"""Validated in-memory fixtures used by the M0 API."""

import json
from pathlib import Path

from paper_atlas_api.generated.paper_summary import PaperSummary

REPOSITORY_ROOT = Path(__file__).resolve().parents[4]
PAPER_SUMMARY_FIXTURE_DIRECTORY = REPOSITORY_ROOT / "packages/test-fixtures/papers"
PAPER_SUMMARY_FIXTURE_PATH = (
    PAPER_SUMMARY_FIXTURE_DIRECTORY / "paper-summary.json"
)


def load_paper_summary_fixture(path: Path) -> PaperSummary:
    fixture_data = json.loads(path.read_text(encoding="utf-8"))
    return PaperSummary.model_validate(fixture_data)


PAPER_SUMMARY_FIXTURE = load_paper_summary_fixture(PAPER_SUMMARY_FIXTURE_PATH)
PAPER_SUMMARY_FIXTURES = tuple(
    load_paper_summary_fixture(path)
    for path in sorted(PAPER_SUMMARY_FIXTURE_DIRECTORY.glob("*.json"))
)
PAPERS_BY_ID = {paper.id: paper for paper in PAPER_SUMMARY_FIXTURES}
