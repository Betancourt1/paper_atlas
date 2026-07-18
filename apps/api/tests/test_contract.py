import json

import pytest
from paper_atlas_api.fixtures import PAPER_SUMMARY_FIXTURE_PATH
from paper_atlas_api.generated.paper_summary import PaperSummary
from pydantic import ValidationError


def test_python_model_validates_canonical_fixture() -> None:
    fixture = json.loads(PAPER_SUMMARY_FIXTURE_PATH.read_text(encoding="utf-8"))

    paper = PaperSummary.model_validate(fixture)

    assert paper.id == "paper_attention_is_all_you_need"


def test_python_model_rejects_unknown_fields() -> None:
    fixture = json.loads(PAPER_SUMMARY_FIXTURE_PATH.read_text(encoding="utf-8"))
    fixture["unexpected"] = True

    with pytest.raises(ValidationError):
        PaperSummary.model_validate(fixture)
