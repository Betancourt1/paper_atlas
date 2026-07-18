import pytest
from paper_atlas_api.fixtures import EXPLAINER_FIXTURES, PAPER_SUMMARY_FIXTURES
from paper_atlas_api.generated.explainer_document import ExplainerDocument
from paper_atlas_api.generated.paper_summary import PaperSummary
from pydantic import ValidationError


def test_python_model_validates_all_fixtures() -> None:
    assert len(PAPER_SUMMARY_FIXTURES) == 8
    assert {paper.id for paper in PAPER_SUMMARY_FIXTURES} >= {
        "paper_attention_is_all_you_need",
        "paper_trace",
        "paper_inkling",
    }


def test_python_model_validates_all_explainers() -> None:
    assert len(EXPLAINER_FIXTURES) == 8
    assert {explainer.paper_id for explainer in EXPLAINER_FIXTURES} == {
        paper.id for paper in PAPER_SUMMARY_FIXTURES
    }


def test_explainer_model_rejects_unknown_fields() -> None:
    fixture = EXPLAINER_FIXTURES[0].model_dump(mode="json")
    fixture["unexpected"] = True

    with pytest.raises(ValidationError):
        ExplainerDocument.model_validate(fixture)


def test_python_model_rejects_unknown_fields() -> None:
    fixture = PAPER_SUMMARY_FIXTURES[0].model_dump(mode="json")
    fixture["unexpected"] = True

    with pytest.raises(ValidationError):
        PaperSummary.model_validate(fixture)
