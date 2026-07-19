# VISUAL_QA — LLM Evaluators are Biased across Languages

- Input revision: `7`
- Coverage: `16 / 16` paragraphs
- Verdict: `PASS WITH IMPLEMENTATION FINDING`
- Aggregate `data_visualization_engineer`: `9.75 / 10`
- Aggregate `visual_implementer`: `7.75 / 10`
- HTML/CSS share: `0 / 10 = 0%` (passes the 30% cap)

The source audit is strong: Figures 1–7 are used at the paragraphs whose jobs they directly perform, with exact PDF-page ranges, CC BY 4.0 attribution, and rasterization disclosures. Shared placements are explicit. Inspection confirmed that Figure 4 directly contrasts pairwise agreement with fixed-threshold acceptance and that the other wide empirical panels retain original axes/legends. The implementation weakness is systemic mobile legibility: 796–2980 px-wide originals are shrunk to the phone column rather than given source-preserving zoom/scroll. Add a keyboard-accessible pan/zoom or controlled overflow treatment to all source-asset image groups.

| Paragraph | Engineer | Implementer | Evidence and actionable finding |
|---|---:|---:|---|
| `language_why_p1` | 10 | 7 | Figure 4 directly establishes pairwise-versus-threshold disagreement; shared placement after `language_why_p2` is documented. Add mobile source inspection. |
| `language_why_p2` | 10 | 7 | Same exact Figure 4, PDF page 6, with specific alt/fallback and CC BY attribution. Add zoom/scroll on narrow screens. |
| `language_change_p1` | 10 | 7 | Original Figure 1 directly shows the cross-language effect and is placed after this paragraph. Wide 2780×976 raster needs mobile inspection. |
| `language_change_p2` | 10 | 7 | Original Figure 3 is precisely located on PDF page 5 and unedited beyond rasterization. Add mobile zoom/scroll. |
| `language_mechanism_p1` | 10 | 7 | Figure 4 directly supports the ranking/acceptance distinction and shares placement after p2. Mobile labels become too small. |
| `language_mechanism_p2` | 10 | 7 | Exact Figure 4 is used instead of a custom redraw; provenance is complete. Add responsive source inspection. |
| `language_mechanism_p3` | 10 | 7 | Original Figures 5–7 directly cover uncertainty/regression relationships, with exact pages 8–10. Multi-image mobile scaling needs zoom/scroll. |
| `language_example_p1` | 10 | 7 | Figure 4 directly visualizes the worked decision divergence. Preserve original and add mobile inspection. |
| `language_example_p2` | 9 | 10 | `NO_MATCH`; prose is sufficient for the bounded example and avoids a stock chain. No action. |
| `language_evidence_p1` | 10 | 7 | Figures 1–3 directly present the empirical evidence, exact pages and attribution included. Add mobile zoom/scroll for 2771–2980 px-wide panels. |
| `language_evidence_p2` | 10 | 7 | Figure 4 directly supports the threshold evidence. Add mobile inspection. |
| `language_evidence_p3` | 10 | 7 | Figures 5–7 preserve aligned uncertainty/regression evidence and source metadata. Add mobile inspection. |
| `language_limitations_p1` | 9 | 10 | `NO_MATCH`; caveat remains prose and avoids metric cards. No action. |
| `language_limitations_p2` | 9 | 10 | `NO_MATCH`; no direct figure is wrongly substituted. No action. |
| `language_review_p1` | 10 | 7 | Figure 4 is the correct direct original for the recap, with exact locator and license. Add mobile zoom/scroll. |
| `language_review_p2` | 9 | 10 | `NO_MATCH`; final caution is better as prose. No action. |

Checks: `make harness-check` passed. Figure 4 and representative Figures 1, 3, 5–7 were inspected through the assets and fixture metadata. `make visual` was blocked by an existing Next development process holding the app lock after the sandbox also denied port 3100.
