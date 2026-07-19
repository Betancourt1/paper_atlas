# Blind visual QA — SearchOS-V1: Towards Robust Open-Domain Information-Seeking Agent Collaboration

- Fixture: `packages/test-fixtures/explainers/searchos-v1.json`
- Manifest revision reviewed: `9`
- Paragraphs scored: `17`
- Engineer decision/proposal average: `8.76/10`
- Implemented visual quality average: `8.41/10`
- Minimum paragraph score: `5/10`

## Independent assessment

The three source-asset placements preserve exact architecture and intervention evidence, but both originals recur and Figure 2 is 2548px wide. Labels remain available at source scale, yet desktop and especially 390px readers must traverse long horizontal distances; the combined set is the heaviest instance.

- Desktop and 390px legibility: original files render at intrinsic pixel width, so labels are not downscaled into illegibility. The tradeoff is figure-local horizontal travel; tall originals also expand the document substantially.
- Keyboard, focus, and scroll: every source viewport is a named focusable region with a visible 3px focus outline and native ArrowRight scrolling. SVG containers are focusable and become 680px-wide local scrollers at mobile width.
- Document overflow: focused Playwright checks confirmed figure overflow stays local and the document itself does not exceed the viewport at desktop or mobile width.
- Provenance: source visuals expose locator, attribution, linked license, modifications, claim links, source locators, specific alt text, and an equivalent hidden-text fallback.
- Paragraph match: source figures and SVGs are placed immediately after their target paragraphs. Shared placements are credited only where the same figure genuinely serves both adjacent paragraphs.
- Forbidden structures: no custom implementation reduces to a single interchangeable chain, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels. Original figures are retained as evidence rather than cosmetically redrawn.
- Repetition burden: High: Figure 2 appears twice and Figure 5 appears twice across only three visuals.
- Multi-image sets: The two-image architecture/intervention set preserves independent natural widths, preventing compression but producing a very long figure-local scroll region.
- HTML/CSS-led share: `0/3 (0%)`. The implemented primary media are 3 source assets and 0 SVGs; CSS supplies presentation and scrolling, not the visual explanation itself.

## Paragraph scores

| Paragraph | Engineer decision / proposal | Rationale | Implemented quality | Rationale |
|---|---:|---|---:|---|
| `sos_why_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. A long-horizon research task requires more than issuing good queries. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `sos_why_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Conventional agents often keep this state in growing conversation histories. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `sos_change_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. SearchOS converts a natural-language request into one or more related tables. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `sos_change_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The system then separates global coordination from local search. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `sos_mechanism_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. Search-Oriented Context Management contains four linked stores. | 7/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `sos_mechanism_p2` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. Before a model call, context middleware projects only the role-relevant portion of that state and adds selected skills. | 7/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `sos_mechanism_p3` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. Sensor middleware measures changes in grounded coverage and evidence count, along with iteration, search, and time budgets. | 5/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `sos_example_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Suppose a comparison request has a known company row but no verified value for one attribute. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `sos_example_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. A page visit alone does not fill the cell. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `sos_evidence_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. On WideSearch, SearchOS reports 80.3 item F1 and 56.5 row F1, compared with 76.0 and 54.5 for the strongest baseline on each metric. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `sos_evidence_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. A paired scheduling study on 10 WideSearch cases reports that continuous dispatch reduces average runtime from 629.13 to 476.34 seconds, raises slot… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `sos_evidence_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. A joint removal of all hierarchical skill layers lowers item F1 from 80.3 to 78.3 and row F1 from 56.5 to 53.1. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `sos_limitations_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The main evaluation uses GLM-5 for agent roles, Qwen3.5-35B-A3B for evidence extraction, and reports the best of three runs for each case. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `sos_limitations_p2` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. A URL and anchored excerpt preserve provenance but do not independently prove that the extracted value is true. | 7/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `sos_limitations_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The authors scope V1 to externalized search state and leave large-scale skill synthesis, broader domains, multimodal search, and improved adaptation… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `sos_review_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The paper provides bounded engineering evidence for making research state explicit. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `sos_review_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The main benchmark comparison evaluates the complete system, so it cannot assign the overall gain to middleware, coverage-aware scheduling, schema pl… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |

## Findings

1. The three source-asset placements preserve exact architecture and intervention evidence, but both originals recur and Figure 2 is 2548px wide. Labels remain available at source scale, yet desktop and especially 390px readers must traverse long horizontal distances; the combined set is the heaviest instance.
2. The revision-9 intrinsic-width viewport solves source-label legibility and document-overflow containment, but it does not by itself solve inspection effort or repeated-source pacing.
3. Focus, keyboard scrolling, provenance, fallbacks, and paragraph placement are consistently implemented and verified in the rendered interface.

## Focused checks

- `pnpm --filter @paper-atlas/web test -- explainer-visual.test.tsx papers.test.ts` — passed (2 files, 8 tests).
- `pnpm --filter @paper-atlas/web test:visual` — passed (6 Playwright tests across desktop Chromium and 390px mobile Chromium).
- Direct renderer/CSS inspection — source images retain natural dimensions; multi-image sets use a max-content flex row; all overflow is contained in figure-local regions.
