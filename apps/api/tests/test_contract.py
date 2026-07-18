import pytest
from paper_atlas_api.fixtures import PAPER_SUMMARY_FIXTURES
from paper_atlas_api.generated.paper_summary import PaperSummary
from pydantic import ValidationError


def test_python_model_validates_all_fixtures() -> None:
    assert len(PAPER_SUMMARY_FIXTURES) == 8
    assert {paper.id for paper in PAPER_SUMMARY_FIXTURES} >= {
        "paper_attention_is_all_you_need",
        "paper_trace",
        "paper_inkling",
    }


def test_python_model_rejects_unknown_fields() -> None:
    fixture = PAPER_SUMMARY_FIXTURES[0].model_dump(mode="json")
    fixture["unexpected"] = True

    with pytest.raises(ValidationError):
        PaperSummary.model_validate(fixture)
