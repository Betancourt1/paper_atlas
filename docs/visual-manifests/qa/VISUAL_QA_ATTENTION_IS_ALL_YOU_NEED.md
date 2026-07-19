# Blind visual QA — Attention Is All You Need — revision 8

Independent review of the fixture, manifest, assets, renderer/CSS, and rendered 1440px/390px pages. Scores are engineer decision / implemented result.

| Paragraph | Scores | Rationale |
| --- | --- | --- |
| `attn_why_p1` | 9 / 9 | Prose correctly avoids a stock recurrence chain; implementation stays restrained. |
| `attn_why_p2` | 9 / 9 | The historical distinction is clearer in prose than a decorative comparison. |
| `attn_change_p1` | 9 / 7 | Original Figure 1 is the right shared evidence, but its desktop text is reduced to 42% scale. |
| `attn_change_p2` | 9 / 7 | Figure 1 matches the architectural boundary, with visible provenance; desktop inspection lacks intrinsic-size zoom. |
| `attn_mechanism_p1` | 10 / 7 | Original Figure 1 is preferable to a redraw, but labels are only moderately legible at desktop scale. |
| `attn_mechanism_p2` | 10 / 8 | Original Figure 2 directly explains both attention stages; two-panel desktop layout remains inspectable but small. |
| `attn_mechanism_p3` | 9 / 7 | Source architecture matches masking and cross-attention, though the full figure provides little paragraph-specific focus. |
| `attn_example_p1` | 9 / 9 | Prose avoids turning a compact calculation into a single-chain visual. |
| `attn_example_p2` | 9 / 9 | The training/generation qualification is best preserved in prose. |
| `attn_evidence_p1` | 10 / 10 | Heterogeneous setup quantities are not falsely normalized or carded. |
| `attn_evidence_p2` | 10 / 10 | Prose correctly preserves the version conflict instead of plotting a false single value. |
| `attn_evidence_p3` | 9 / 9 | Separate BLEU and F1 experiments are not forced onto a shared axis. |
| `attn_limitations_p1` | 9 / 9 | Complexity and scope qualifiers remain readable prose. |
| `attn_limitations_p2` | 9 / 9 | A heterogeneous caveat inventory is correctly rejected. |
| `attn_limitations_p3` | 9 / 9 | The hypothesis/evidence boundary needs prose, not a causal-looking graphic. |
| `attn_review_p1` | 8 / 6 | Figure 1 is relevant, but a fourth repeat of the same large asset adds page length without new visual guidance. |
| `attn_review_p2` | 9 / 9 | Prose cleanly protects the training-versus-generation distinction. |
| `attn_review_p3` | 9 / 9 | Version and licensing qualification is correctly kept textual. |

Findings: no page overflow; mobile originals preserve intrinsic pixels in a focusable horizontal viewport, show an inspection hint, accept ArrowRight, and expose a visible focus ring. Provenance, locator, attribution, license, modifications, alt text, fallback, claim links, and source links are present. Desktop originals are fitted rather than intrinsically inspectable; Figure 1 renders 642px wide from 1520px, so small labels are not comfortably legible. Repeating it four times creates substantial visual redundancy. No forbidden custom stock structure is rendered. HTML/CSS-led primary visuals: 0/5 (0%).
