"""Validated in-memory fixtures used by the M0 API."""

import json
from pathlib import Path

from paper_atlas_api.generated.paper_summary import PaperSummary

REPOSITORY_ROOT = Path(__file__).resolve().parents[4]
PAPER_SUMMARY_FIXTURE_PATH = (
    REPOSITORY_ROOT / "packages/test-fixtures/papers/paper-summary.json"
)


def load_paper_summary_fixture() -> PaperSummary:
    fixture_data = json.loads(PAPER_SUMMARY_FIXTURE_PATH.read_text(encoding="utf-8"))
    return PaperSummary.model_validate(fixture_data)


PAPER_SUMMARY_FIXTURE = load_paper_summary_fixture()
PAPERS_BY_ID = {PAPER_SUMMARY_FIXTURE.id: PAPER_SUMMARY_FIXTURE}
