# Blind visual QA — SearchOS-V1 — revision 8

Scores are engineer decision / implemented result.

| Paragraph | Scores | Rationale |
| --- | --- | --- |
| `sos_why_p1` | 9 / 9 | Research-state requirements avoid a card inventory. |
| `sos_why_p2` | 9 / 9 | Failure modes remain better as prose. |
| `sos_change_p1` | 9 / 9 | Table/schema framing is explicit without a decorative mock table. |
| `sos_change_p2` | 9 / 9 | Role separation avoids a simple orchestration chain. |
| `sos_mechanism_p1` | 10 / 6 | Shared original Figure 2 is the right topology, but its dense 2548px architecture is reduced to 642px on desktop. |
| `sos_mechanism_p2` | 10 / 6 | Figure 2 directly matches middleware and shared state; fine labels remain difficult to inspect. |
| `sos_mechanism_p3` | 10 / 4 | Figures 2 and 5 are relevant together, but the two-up desktop layout shrinks them to 202px and 105px high. |
| `sos_example_p1` | 9 / 9 | The scoped dispatch example avoids a forbidden chain. |
| `sos_example_p2` | 9 / 9 | Evidence acceptance and stopping remain readable prose. |
| `sos_evidence_p1` | 9 / 9 | Distinct F1 aggregates are not normalized together. |
| `sos_evidence_p2` | 9 / 9 | Runtime, utilization, and F1 are not placed on arbitrary normalized tracks. |
| `sos_evidence_p3` | 9 / 9 | Two F1 changes avoid an item-plus-metric graphic. |
| `sos_limitations_p1` | 9 / 9 | Model, run-selection, and budget caveats remain prose. |
| `sos_limitations_p2` | 10 / 6 | Figure 5 matches the intervention evidence, but 27% desktop scale limits reading; it does not establish citation truth. |
| `sos_limitations_p3` | 9 / 9 | Future-work inventory is not carded. |
| `sos_review_p1` | 9 / 9 | Bounded synthesis does not repeat architecture assets. |
| `sos_review_p2` | 9 / 9 | Causal limitation remains explicitly textual. |

Findings: provenance and accessible alternatives are complete; no page overflow. Mobile preserves intrinsic-size originals in focusable, hinted, ArrowRight-scrollable regions. Desktop has no intrinsic-size inspection path, and the detailed architecture/intervention assets are substantially underscaled, especially the combined view. No forbidden custom stock structure. HTML/CSS-led primary visuals: 0/3 (0%).

Checks: visual Playwright suite passed on desktop Chromium and 390px mobile Chromium (6/6). Validator and unit suites were not rerun in this blind pass.
