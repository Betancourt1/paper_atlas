"""Validated in-memory fixtures used by the read-only API."""

import json
from pathlib import Path

from paper_atlas_api.generated.explainer_document import ExplainerDocument
from paper_atlas_api.generated.paper_summary import PaperSummary

REPOSITORY_ROOT = Path(__file__).resolve().parents[4]
PAPER_SUMMARY_FIXTURE_DIRECTORY = REPOSITORY_ROOT / "packages/test-fixtures/papers"
EXPLAINER_FIXTURE_DIRECTORY = REPOSITORY_ROOT / "packages/test-fixtures/explainers"
PAPER_SUMMARY_FIXTURE_PATH = (
    PAPER_SUMMARY_FIXTURE_DIRECTORY / "paper-summary.json"
)


def load_paper_summary_fixture(path: Path) -> PaperSummary:
    fixture_data = json.loads(path.read_text(encoding="utf-8"))
    return PaperSummary.model_validate(fixture_data)


def load_explainer_fixture(path: Path) -> ExplainerDocument:
    fixture_data = json.loads(path.read_text(encoding="utf-8"))
    return ExplainerDocument.model_validate(fixture_data)


PAPER_SUMMARY_FIXTURE = load_paper_summary_fixture(PAPER_SUMMARY_FIXTURE_PATH)
PAPER_SUMMARY_FIXTURES = tuple(
    load_paper_summary_fixture(path)
    for path in sorted(PAPER_SUMMARY_FIXTURE_DIRECTORY.glob("*.json"))
)
PAPERS_BY_ID = {paper.id: paper for paper in PAPER_SUMMARY_FIXTURES}
EXPLAINER_FIXTURES = tuple(
    load_explainer_fixture(path)
    for path in sorted(EXPLAINER_FIXTURE_DIRECTORY.glob("*.json"))
)
EXPLAINERS_BY_PAPER_ID = {
    explainer.paper_id: explainer for explainer in EXPLAINER_FIXTURES
}
