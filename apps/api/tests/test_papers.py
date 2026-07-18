import json

from fastapi.testclient import TestClient
from paper_atlas_api.fixtures import PAPER_SUMMARY_FIXTURE_PATH


def test_get_known_paper_returns_canonical_fixture(client: TestClient) -> None:
    expected = json.loads(PAPER_SUMMARY_FIXTURE_PATH.read_text(encoding="utf-8"))

    response = client.get("/v1/papers/paper_attention_is_all_you_need")

    assert response.status_code == 200
    assert response.json() == expected


def test_get_unknown_paper_returns_problem_details(client: TestClient) -> None:
    response = client.get("/v1/papers/paper_missing")

    assert response.status_code == 404
    assert response.headers["content-type"].startswith("application/problem+json")
    assert response.json() == {
        "type": "https://paper-atlas.local/problems/paper-not-found",
        "title": "Paper not found",
        "status": 404,
        "detail": "No paper exists with ID 'paper_missing'.",
        "instance": "/v1/papers/paper_missing",
    }
