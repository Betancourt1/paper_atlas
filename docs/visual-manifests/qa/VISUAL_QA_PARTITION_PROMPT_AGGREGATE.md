# Blind visual QA — Partition, Prompt, Aggregate

Independent revision-12 review. `E` is engineer decision/proposal; `I` is implemented visual quality, both 1–10.

| Paragraph | E | I | Evidence |
|---|---:|---:|---|
| `ppa_why_p1` | 9 | 9 | Prompt granularity motivation is conceptual and clear. |
| `ppa_why_p2` | 9 | 9 | Consistency versus truth is an essential prose distinction. |
| `ppa_change_p1` | 9 | 9 | The partitioning change is introduced before the warranted reconstruction graph. |
| `ppa_change_p2` | 9 | 9 | Reference-free and reference-based checks need exact definitions. |
| `ppa_mechanism_p1` | 9 | 9 | Recursive partition setup is readable without duplicating the next visual. |
| `ppa_mechanism_p2` | 10 | 6 | The weighted reconstruction graph shows two depths, priors, sums, and `q = D1 = D2` as a relational structure; at mobile scale its labels are too small for comfortable reading. |
| `ppa_mechanism_p3` | 9 | 9 | Split/order consistency definitions remain clearer in prose. |
| `ppa_example_p1` | 9 | 9 | The demographic split example is short and grounded. |
| `ppa_example_p2` | 9 | 9 | Reconstruction versus ACS alignment is accurately distinguished in prose. |
| `ppa_evidence_p1` | 9 | 9 | Depth trade-off is qualified and does not warrant a custom trend without the original figure asset. |
| `ppa_evidence_p2` | 9 | 9 | Mixed consistency results would become a forbidden repeated metric display. |
| `ppa_evidence_p3` | 9 | 9 | Model-dependent micro-to-macro effect is concise. |
| `ppa_limitations_p1` | 9 | 9 | Dependence on splits, wording, and priors is qualitative. |
| `ppa_limitations_p2` | 10 | 10 | Declining a visual correctly prevents coherence from looking like correctness. |
| `ppa_review_p1` | 9 | 9 | The reference-free contribution is a textual synthesis. |
| `ppa_review_p2` | 9 | 9 | Macro-fallacy scope and interpretation require prose qualifiers. |

## Render and policy findings

- The SVG fits fully at both required viewports with no internal/page overflow or clipping and preserves its 760×440 aspect ratio.
- The graph is source-relevant, source-linked, accessible, and avoids all four forbidden structures. HTML/CSS-led primary visuals: 0 of 1 (0%).
- The desktop hierarchy is legible; mobile scaling reduces 11 px design text to roughly 4.6 CSS px, so fit does not equal legibility.

## Checks

- Focused Playwright visual suite: 6 passed on desktop 1440×1000 and mobile 390×844.
- Geometry capture: 1/1 container fits at both sizes; page width equals viewport width.
