# Publication review — scroll-free visual revision 18

- Reviewer role: `publication_reviewer`
- Scope: all eight current explainer fixtures, their final manifests, source/custom assets, and fresh root-level visual QA reports
- Decision: `PASS`
- Publication meaning: ready for a human publication decision; this review does not publish automatically

## Candidate verdicts

| Explainer | Version | Manifest revision | Verdict | Review basis |
| --- | --- | ---: | --- | --- |
| Attention Is All You Need | arXiv v7 | 13 | PASS | Figures 1 and 2 remain attributed original assets under the authors' stated scholarly/journalistic figure permission. Mobile panel crops preserve the architecture and cross-attention relationship without scrolling. |
| Computational Propaganda | arXiv v1 | 13 | PASS | Original Figure 3 is attributed under CC BY 4.0 and its mobile panels retain their contents. The separate conditional-denominator SVG preserves the reported 0.13%/0.15% discrepancy. |
| Inkling | fixed 2026-07-18 source snapshot and immutable checkpoint commits | 13 | PASS | The custom routing SVG stays inside the source-backed 6-of-256 plus two-shared-expert claim and does not reuse web graphics whose reuse permission is unknown. |
| LLM Evaluators are Biased across Languages | arXiv v1 | 13 | PASS | Four directly matching figures are reused under CC BY 4.0. Mobile panel crops retain axes, marks, uncertainty, thresholds, and legends needed for their adjacent claims. |
| Partition, Prompt, Aggregate | arXiv v1 | 13 | PASS | No CC BY-NC-ND source figure is reproduced. The custom SVG independently encodes the two-depth weighted reconstruction and equality claim without copying protected figure expression. |
| RoboTTT | arXiv v1 | 13 | PASS | Figures 2, 4, 7, and 8 retain exact locators, CC BY 4.0 attribution, the PDF's NVIDIA copyright caveat, and complete mobile task/scale context. |
| SearchOS-V1 | arXiv v1 | 15 | PASS | Figures 2 and 5 remain attributed under CC BY 4.0. The corrected mobile crops preserve complete modules or panels and document their exact source-pixel boundaries and padding. |
| TRACE | arXiv v1 | 18 | PASS | Figures 1, 3, and 4 remain attributed under CC BY 4.0. Revision 18 preserves Figure 1's complete question, branch connector geometry, trajectory axes, and labels; the custom dependency DAG truthfully replaces the forbidden chain topology of Figure 2. |

## Gate evidence

- All 134 prose paragraphs are represented exactly once across the eight manifests. Every implemented visual has a complexity warrant, source-figure audit, claim and source references, accessibility fallback, mobile treatment, and implementation record.
- Original assets expose exact figure/page locators, attribution, license labels and links, modification statements, specific alternative text, limitations, and evidence references. Custom SVGs retain source claims and explicit evidence boundaries.
- Mobile derivatives are documented as original-pixel crops, panel splits, duplicated original legend/axis context, or neutral padding. The final QA directly inspected the current renders and found no clipped mark, missing relationship, ratio distortion, internal scrollbar, or page-level overflow at 1440 x 1000 and 390 x 844.
- All eight fresh QA reports return `PASS` with a minimum paragraph score of 9/10 in both evidence-fidelity and rendered-communication passes. They report 0% HTML/CSS-led implemented visuals and no forbidden stock topology.
- The fixtures remain `REVIEWED`, not `PUBLISHED`, preserving the required human decision boundary.

## Checks independently repeated

- `make harness-check` — passed.
- `make visual-manifest-check` — passed for 8 papers and 134 paragraphs.
- `pnpm --filter @paper-atlas/content-schema test` — 14/14 tests passed.
- `pnpm --filter @paper-atlas/web test` — 8/8 tests passed.

## Decision

`PASS` — the eight scroll-free explainer revisions are coherent, attributable, accessible publication candidates ready for the human publication decision and the separate site-integration gate.
