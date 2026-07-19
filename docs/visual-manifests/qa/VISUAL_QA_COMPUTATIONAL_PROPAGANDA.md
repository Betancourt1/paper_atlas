# Blind visual QA — Computational Propaganda

Independent revision-12 review. `E` is engineer decision/proposal; `I` is implemented visual quality, both 1–10.

| Paragraph | E | I | Evidence |
|---|---:|---:|---|
| `propaganda_why_p1` | 9 | 9 | The crawl/extract/filter uncertainty is a compact causal qualification, not a useful stock chain. |
| `propaganda_why_p2` | 9 | 9 | Threat-model boundaries are best retained verbatim in prose. |
| `propaganda_change_p1` | 9 | 9 | The three questions are introduced clearly before the later quantitative treatment. |
| `propaganda_change_p2` | 9 | 9 | The advertisement/comment contrast is categorical and already concise. |
| `propaganda_mechanism_p1` | 9 | 9 | Gate definitions are readable prose; illustrating them here would duplicate the worked example. |
| `propaganda_mechanism_p2` | 9 | 9 | Changing denominators are described explicitly and reserved for the warranted tree. |
| `propaganda_mechanism_p3` | 9 | 9 | The distinction between inclusion and model influence should not be collapsed into one pipeline. |
| `propaganda_example_p1` | 9 | 6 | Figure 3 is directly relevant and faithfully shown, but its wide, detailed plot is too small for comfortable mobile label reading. |
| `propaganda_example_p2` | 10 | 7 | The branching survival tree exposes changing denominators and the 0.13/0.15 discrepancy without a forbidden list; mobile labels are small but the relationships remain discernible. |
| `propaganda_evidence_p1` | 9 | 9 | Exact counts and unresolved discrepancy are safer in prose than a second metric display. |
| `propaganda_evidence_p2` | 9 | 9 | Model-scale and poison-rate results are concise and do not need repeated cards. |
| `propaganda_evidence_p3` | 9 | 9 | Post-SFT qualification is exact and visually unembellished. |
| `propaganda_limitations_p1` | 9 | 9 | Proxy and pipeline scope are qualitative boundaries. |
| `propaganda_limitations_p2` | 9 | 9 | The non-live, synthetic, sub-frontier limitations are appropriately prose-only. |
| `propaganda_review_p1` | 9 | 9 | Methodological synthesis is clear without another flow. |
| `propaganda_review_p2` | 10 | 10 | Prose preserves the crucial gap between staged evidence and a live attack. |

## Render and policy findings

- Both visuals fit completely at 1440×1000 and 390×844: no container or page overflow, no clipping, and preserved image/SVG aspect ratios.
- Figure 3 has exact provenance. The custom tree has claim/source links, explicit limitation text, and a responsive `viewBox`.
- Neither visual is a single interchangeable chain, item-plus-metric list, repeated cards, or repeated one-axis dot panels. HTML/CSS-led primary visuals: 0 of 2 (0%).
- Mobile legibility is the only material defect: the source plot is small; the SVG's 11 px design labels scale to roughly 4.6 CSS px.

## Checks

- Focused Playwright visual suite: 6 passed on both required viewports.
- Geometry capture: 2/2 containers fit at both sizes; page width equals viewport width.
