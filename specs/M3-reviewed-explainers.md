# M3 reviewed explainer slice

## Outcome

Turn every paper currently visible in the local research digest into a
source-backed, reviewable English explainer with one purposeful static visual.
The site must distinguish an indexed record, a reviewed draft, and a
human-published explainer.

## Included

- A strict `ExplainerDocument` JSON Schema with generated TypeScript and Python
  models.
- One validated explainer fixture for each existing paper fixture.
- Atomic claims and precise source locators.
- Five-minute, twenty-minute, deep, and original-paper reading paths.
- Question-led sections covering motivation, change, mechanism, evidence,
  limitations, and critical review.
- A source-backed visual specification with a semantic static renderer.
- A read-only explainer API endpoint.
- Desktop and mobile browser coverage for visible provenance and caveats.
- Independent publication review.

## Excluded

- Human publication approval.
- Interactive controls or animation without a paper-specific learning need.
- Automated ingestion, PDF parsing, Temporal workflows, or persistence.
- Reproduction of experiments or execution of paper repositories.

## Acceptance

- Metadata-only entries never display `Published`.
- Every explainer validates against the canonical schema.
- Every substantive claim references an existing `SourceRef`.
- Every block references existing claims and source references.
- Reading paths reference existing blocks and retain mechanism and caveats.
- Every visual identifies its pedagogical question, evidence, limitations,
  equivalent text, and alt text.
- The publication reviewer returns no unresolved blocker before a fixture is
  labeled `REVIEWED`.
- `make check` and desktop/mobile Playwright tests pass.
