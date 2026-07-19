# Blind visual QA — LLM Evaluators across Languages

Independent revision-12 review. `E` is engineer decision/proposal; `I` is implemented visual quality, both 1–10.

| Paragraph | E | I | Evidence |
|---|---:|---:|---|
| `language_why_p1` | 9 | 9 | Invariance of pairwise order under offsets is concise and needs no decorative plot. |
| `language_why_p2` | 9 | 9 | Threshold-use motivation is conceptual prose. |
| `language_change_p1` | 10 | 5 | Original Figure 1 directly supplies the cross-language distribution, provenance, and fidelity, but dense panel labels are not comfortably legible at 390 px. |
| `language_change_p2` | 10 | 5 | Original Figure 3 is source-relevant and undistorted; its multi-panel text becomes too small on mobile. |
| `language_mechanism_p1` | 9 | 9 | Pair construction and normalization details require exact prose. |
| `language_mechanism_p2` | 10 | 5 | Original Figure 4 is the correct scatter-panel evidence and avoids a speculative redraw, but mobile axes, legends, and points are difficult to inspect. |
| `language_mechanism_p3` | 10 | 5 | The supplied original uncertainty/evaluator figure is faithful and relevant; mobile density prevents confident label reading. |
| `language_example_p1` | 9 | 9 | The offset example is simpler in text than in another plot. |
| `language_example_p2` | 9 | 9 | Threshold consequences are explicit and do not need repeated one-axis panels. |
| `language_evidence_p1` | 9 | 9 | Accuracy findings are already represented by the nearby source figure. |
| `language_evidence_p2` | 9 | 9 | Acceptance-rate differences need prose qualification. |
| `language_evidence_p3` | 9 | 9 | Uncertainty association is bounded and avoids visual overclaim. |
| `language_limitations_p1` | 9 | 9 | Dataset, evaluator, and language scope are qualitative boundaries. |
| `language_limitations_p2` | 9 | 9 | Correlation and calibration cautions should not be pictured as causal findings. |
| `language_review_p1` | 9 | 9 | The ranking-versus-threshold synthesis is concise prose. |
| `language_review_p2` | 9 | 9 | Generalization limits remain clear without another visual. |

## Render and policy findings

- All four source figures fit completely at 1440×1000 and 390×844: no internal scrollbars, page overflow, clipping, or aspect-ratio error.
- Each placement uses directly relevant original evidence with locator, attribution, license, modification record, claims, sources, and limitations.
- The implementation introduces no custom forbidden stock structure. HTML/CSS-led primary visuals: 0 of 4 (0%).
- Fit is technically correct, but responsive shrinking alone makes every dense original plot materially hard to read on mobile.

## Checks

- Focused Playwright visual suite: 6 passed on both required viewports.
- Geometry capture: 4/4 containers fit at both sizes; all images loaded at natural dimensions; page width equals viewport width.
