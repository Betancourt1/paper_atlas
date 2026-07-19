# Blind visual QA — Attention Is All You Need

Independent revision-12 review. Scores are 1–10 and are judgments, not threshold checks. `E` scores the engineer decision/proposal; `I` scores the implemented visual result, including a correct prose-only decision.

## Paragraph scores

| Paragraph | E | I | Evidence |
|---|---:|---:|---|
| `attn_why_p1` | 9 | 9 | Prose cleanly contrasts recurrent serial paths and convolutional distance; a diagram would mostly restate it. |
| `attn_why_p2` | 9 | 9 | The historical question is conceptual and remains clearer without ornament. |
| `attn_change_p1` | 9 | 9 | The three attention roles are compactly enumerated; later source figures carry the topology. |
| `attn_change_p2` | 9 | 9 | The path-length qualification and retained components need prose, not a stock chain. |
| `attn_mechanism_p1` | 9 | 9 | Layer counts and surrounding residual operations are already supported by the following original architecture figure. |
| `attn_mechanism_p2` | 10 | 6 | Original Figure 2 is exactly relevant and faithfully preserved, but the two tall panels become small at 390 px and their internal labels are difficult to read. |
| `attn_mechanism_p3` | 10 | 6 | Original Figure 1 directly shows the encoder/decoder dependencies and provenance is complete; its dense labels are marginal on mobile. |
| `attn_example_p1` | 9 | 9 | The masking and scaling walkthrough is linear prose; another diagram would duplicate Figure 2. |
| `attn_example_p2` | 9 | 9 | Training-versus-generation timing is explicit and does not warrant a second architecture rendering. |
| `attn_evidence_p1` | 9 | 9 | Dataset, hardware, and duration facts are heterogeneous, so a metric-card treatment would be weaker. |
| `attn_evidence_p2` | 10 | 10 | Prose correctly preserves the version conflict rather than flattening it into a chart. |
| `attn_evidence_p3` | 9 | 9 | The small ablation set is readable inline and avoids forbidden repeated metric panels. |
| `attn_limitations_p1` | 9 | 9 | Complexity conditions and restricted-attention caveat need exact prose. |
| `attn_limitations_p2` | 9 | 9 | Scope boundaries are qualitative and appropriately unillustrated. |
| `attn_limitations_p3` | 9 | 9 | The extrapolation and causal-explanation cautions should not be visualized as findings. |
| `attn_review_p1` | 9 | 9 | The synthesis depends on distinctions, not spatial comparison. |
| `attn_review_p2` | 9 | 9 | The training/generation qualification is concise and not improved by a stock pipeline. |
| `attn_review_p3` | 9 | 9 | Versioning and reuse-license discussion is correctly prose-only. |

## Render and policy findings

- At 1440×1000 and 390×844, both figure containers have `scrollWidth <= clientWidth` and `scrollHeight <= clientHeight`; page widths equal viewport widths. No clipping or internal/page scrollbar was observed.
- All images remain within their containers and preserve natural aspect ratio. The mobile issue is legibility, not fit or distortion.
- Both visuals use directly relevant original paper figures with locator, attribution, license, modification record, claim links, and limitations.
- No custom forbidden stock structure is introduced. HTML/CSS-led primary visuals: 0 of 2 (0%).

## Checks

- Focused Playwright visual suite: 6 passed across desktop Chromium 1440×1000 and mobile Chromium 390×844.
- Independent geometry capture: 2/2 visual containers fit at both sizes; natural image dimensions loaded; no horizontal page overflow.
