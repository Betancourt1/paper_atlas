from collections.abc import Generator

import pytest
from fastapi.testclient import TestClient
from paper_atlas_api.main import app


@pytest.fixture
def client() -> Generator[TestClient]:
    with TestClient(app) as test_client:
        yield test_client
