"""FastAPI application for the Paper Atlas M0 contract."""

from typing import Literal

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel, ConfigDict

from paper_atlas_api import __version__
from paper_atlas_api.fixtures import PAPERS_BY_ID
from paper_atlas_api.generated.paper_summary import PaperSummary


class HealthResponse(BaseModel):
    model_config = ConfigDict(extra="forbid")

    status: Literal["ok"]
    service: Literal["paper-atlas-api"]
    version: str


class PaperNotFoundError(Exception):
    def __init__(self, paper_id: str) -> None:
        self.paper_id = paper_id


app = FastAPI(
    title="Paper Atlas API",
    version=__version__,
    description="Read-only M0 API contract backed by a validated fixture.",
)


@app.exception_handler(PaperNotFoundError)
async def paper_not_found_handler(
    request: Request, error: PaperNotFoundError
) -> JSONResponse:
    return JSONResponse(
        status_code=404,
        media_type="application/problem+json",
        content={
            "type": "https://paper-atlas.local/problems/paper-not-found",
            "title": "Paper not found",
            "status": 404,
            "detail": f"No paper exists with ID '{error.paper_id}'.",
            "instance": str(request.url.path),
        },
    )


@app.get("/health", response_model=HealthResponse, tags=["system"])
async def health() -> HealthResponse:
    return HealthResponse(status="ok", service="paper-atlas-api", version=__version__)


@app.get("/v1/papers/{paper_id}", response_model=PaperSummary, tags=["papers"])
async def get_paper(paper_id: str) -> PaperSummary:
    paper = PAPERS_BY_ID.get(paper_id)
    if paper is None:
        raise PaperNotFoundError(paper_id)
    return paper
