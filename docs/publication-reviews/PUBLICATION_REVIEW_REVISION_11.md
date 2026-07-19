# Publication review — explainer revision 11

- Reviewer role: `publication_reviewer`
- Scope: all eight current explainer fixtures and their revision-11 visual manifests
- Decision: `PASS`
- Publication meaning: ready for a human publication decision; this review does not publish automatically

## Candidate verdicts

| Explainer | Version | Verdict | Review basis |
| --- | --- | --- | --- |
| Attention Is All You Need | arXiv v7 | PASS | The architecture, attention operation, evaluation discrepancy, computational cost, and autoregressive limitation are source-bounded. Original Figures 1 and 2 are adjacent, attributed, and covered by the authors' scholarly/journalistic reuse permission. |
| Computational Propaganda | arXiv v1 | PASS | The HalfLife stages, 0.13%/0.15% discrepancy, controlled model effect, and no-live-attack boundary are explicit. Original Figure 3 is used for the extraction example under CC BY 4.0; the custom conditional tree covers the distinct denominator argument. |
| Inkling | release v1, sources fixed to 2026-07-18 retrievals and immutable checkpoint commits | PASS | Provider claims, checkpoint differences, mutable-source boundaries, resource requirements, benchmark caveats, and non-established conclusions remain distinct. The custom sparse-routing visual does not claim undocumented expert identities. |
| LLM Evaluators are Biased across Languages | arXiv v1 | PASS | Pairwise accuracy, absolute-score shifts, threshold gaps, uncertainty, calibration, and causal limits are separated. Four directly matching original figures are reused under CC BY 4.0. |
| Partition, Prompt, Aggregate | arXiv v1 | PASS | Partition reconstruction, two-depth invariance, macro-fallacy evidence, and necessary-not-sufficient self-consistency limits are explicit. The CC BY-NC-ND restriction is treated conservatively: no original figure is reproduced, and the selected SVG is an independently encoded explanatory adaptation. |
| RoboTTT | arXiv v1 | PASS | Fast-weight state, training method, controlled robot results, small trial counts, latency gap, and generality boundary are preserved. Figures 2, 4, 7, and 8 are reused under CC BY 4.0 with exact locators. |
| SearchOS-V1 | arXiv v1 | PASS | Shared-state architecture, middleware, scheduling, benchmark results, citation-truth gap, budget-fairness gap, and generality limits are kept separate. Figures 2 and 5 are reused under CC BY 4.0 with exact locators. |
| TRACE | arXiv v1 | PASS | Prefix scoring, local temporal-difference credit, outcome anchoring, controlled results, and proxy/generality limits are source-bounded. Figures 1 and 3 are reused under CC BY 4.0; the custom dependency DAG explains the distinct telescoping relationship. |

## Gate findings

- Exact versions and source identities are recorded in every fixture and manifest. Inkling's mutable web sources include retrieval dates and content hashes; its checkpoint sources use immutable commit IDs.
- Substantive and numerical claims use stable claim IDs, epistemic status, confidence, verification status, and precise source references. Disputed or tempting overclaims are represented as `DISPUTED`, `EXPLAINER_INFERENCE`, or `NOT_ESTABLISHED` instead of being smoothed over.
- Every explainer includes the central mechanism, evaluation evidence, limitations, independent critical review, and five-minute, twenty-minute, and deep reading paths.
- All 134 prose paragraphs have revision-11 manifest decisions and final blind visual QA. The QA reports pass all eight candidates; no forbidden stock topology or HTML/CSS-led primary visual is present.
- Source assets expose adjacent placement, exact figure/page locators, attribution, license labels and links, modification statements, alt text, fallbacks, claim links, and source references. Dense originals retain native pixels inside keyboard-focusable horizontal inspection regions.
- The candidates are labeled `REVIEWED`, not `PUBLISHED`, which correctly preserves the required human decision boundary.

## Non-blocking polish

- The blind visual QA scored four original-figure placements 8/10 because their questions or interpretations are more generic than the adjacent paragraph: `language_mechanism_p3`, `rttt_mechanism_p3`, `sos_mechanism_p3`, and `trace_evidence_p3`. The figures are relevant, licensed, correctly placed, and evidence-complete, so these are caption-specificity improvements rather than publication blockers.
- The blind reviewer could not start its own Playwright server in the sandbox. Its fixture, manifest, asset, renderer, CSS, and focused Vitest checks passed; final release still depends on the separate site-review and real-browser gates required by the harness.

## Decision

`PASS` — all eight revision-11 explainers are publication candidates ready for a human publication decision, subject to the independent site-integration gate.
