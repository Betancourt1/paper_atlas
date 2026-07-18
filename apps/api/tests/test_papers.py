import json

from fastapi.testclient import TestClient
from paper_atlas_api.fixtures import (
    EXPLAINER_FIXTURE_DIRECTORY,
    PAPER_SUMMARY_FIXTURE_DIRECTORY,
    PAPER_SUMMARY_FIXTURE_PATH,
)


def test_get_known_paper_returns_canonical_fixture(client: TestClient) -> None:
    expected = json.loads(PAPER_SUMMARY_FIXTURE_PATH.read_text(encoding="utf-8"))

    response = client.get("/v1/papers/paper_attention_is_all_you_need")

    assert response.status_code == 200
    assert response.json() == expected


def test_get_digest_paper_returns_its_fixture(client: TestClient) -> None:
    fixture_path = PAPER_SUMMARY_FIXTURE_DIRECTORY / "trace.json"
    expected = json.loads(fixture_path.read_text(encoding="utf-8"))

    response = client.get("/v1/papers/paper_trace")

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


def test_get_known_paper_explainer_returns_validated_fixture(
    client: TestClient,
) -> None:
    fixture_path = EXPLAINER_FIXTURE_DIRECTORY / "trace.json"
    expected = json.loads(fixture_path.read_text(encoding="utf-8"))

    response = client.get("/v1/papers/paper_trace/explainer")

    assert response.status_code == 200
    assert response.json() == expected


def test_get_unknown_paper_explainer_returns_problem_details(
    client: TestClient,
) -> None:
    response = client.get("/v1/papers/paper_missing/explainer")

    assert response.status_code == 404
    assert response.headers["content-type"].startswith("application/problem+json")
