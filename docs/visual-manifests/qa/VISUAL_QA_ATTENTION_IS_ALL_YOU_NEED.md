# VISUAL_QA — Attention Is All You Need

- Input revision: `7`
- Coverage: `18 / 18` paragraphs
- Verdict: `PASS WITH IMPLEMENTATION FINDING`
- Aggregate `data_visualization_engineer`: `9.33 / 10`
- Aggregate `visual_implementer`: `9.00 / 10`
- HTML/CSS share: `0 / 5 = 0%` (passes the 30% cap)

The manifest correctly prioritizes the reusable originals: Figure 1 (PDF page 3) for architecture/dependencies and both Figure 2 panels (PDF page 4) for attention mechanics. Fixture metadata supplies attribution, reuse permission, exact locators, unmodified-asset declarations, specific image alt text, and equivalent fallback text. The inspected originals are faithful and legible at native resolution. The implementation finding is mobile visual legibility: source PNGs are rendered at `width: 100%` with no zoom or horizontal-scroll treatment. In particular, the 1520×2239 Figure 1 is reduced to roughly phone-column width. Add a keyboard-accessible scroll/zoom container or a responsive source-preserving detail view; do not redraw the original.

Scores use 10 for an exemplary direct-source decision or complete no-visual implementation, 9 for a sound decision/custom implementation with minor headroom, and 7 where the correct original is present but mobile inspection is materially impaired. No forbidden form was proposed or implemented.

| Paragraph | Engineer | Implementer | Evidence and actionable finding |
|---|---:|---:|---|
| `attn_why_p1` | 9 | 10 | `NO_MATCH`; prose accurately handles the recurrent dependency versus convolutional path distinction without inventing a stock chain. No action. |
| `attn_why_p2` | 9 | 10 | `NO_MATCH`; the bounded replacement question is clearer as prose than as repeated boxes. No action. |
| `attn_change_p1` | 10 | 7 | `USE_ORIGINAL`, shared Figure 1 at `attn_change_p2`; exact page/attribution/license are present. Add mobile zoom/scroll for the tall 1520×2239 original. |
| `attn_change_p2` | 10 | 7 | Figure 1 directly shows the encoder-decoder replacement and residual paths; shared placement is correct. Same mobile legibility action. |
| `attn_mechanism_p1` | 10 | 7 | Figure 1 directly shows encoder/decoder sublayer topology and is placed immediately after this paragraph. Preserve original; add mobile inspection affordance. |
| `attn_mechanism_p2` | 10 | 7 | Both original Figure 2 panels are used with locator `PDF page 4`, specific alt text, and no modifications. The narrow/tall panels need mobile zoom/scroll. |
| `attn_mechanism_p3` | 10 | 7 | Original Figure 1 directly exposes masked and cross-attention dependencies. Mobile downscaling obscures labels; add controlled inspection. |
| `attn_example_p1` | 9 | 10 | `NO_MATCH`; prose is sufficient for the token-level example and avoids a single interchangeable chain. No action. |
| `attn_example_p2` | 9 | 10 | `NO_MATCH`; the bounded interpretive example does not warrant a new visual. No action. |
| `attn_evidence_p1` | 9 | 10 | `NO_MATCH`; result prose does not force reconstruction of a multidimensional relationship. No action. |
| `attn_evidence_p2` | 9 | 10 | `NO_MATCH`; no direct original is wrongly displaced and no metric-card treatment is introduced. No action. |
| `attn_evidence_p3` | 9 | 10 | `NO_MATCH`; prose-only treatment is proportionate to the evidence statement. No action. |
| `attn_limitations_p1` | 9 | 10 | `NO_MATCH`; limitation remains prose, avoiding decorative cards. No action. |
| `attn_limitations_p2` | 9 | 10 | `NO_MATCH`; prose preserves caveat nuance. No action. |
| `attn_limitations_p3` | 9 | 10 | `NO_MATCH`; no visual is needed to restate this scope boundary. No action. |
| `attn_review_p1` | 10 | 7 | Reuses exact Figure 1 for the architectural recap, with full provenance. Add mobile zoom/scroll rather than shrinking the source to column width. |
| `attn_review_p2` | 9 | 10 | `NO_MATCH`; prose-only review avoids redundant visual repetition. No action. |
| `attn_review_p3` | 9 | 10 | `NO_MATCH`; the final review claim remains clear and non-visual. No action. |

Checks: `make harness-check` passed (`8 papers, 134 paragraphs`). Representative originals Figure 1 and both Figure 2 assets were inspected. `make visual` could not run because another Next development process already held the app lock; the attempted sandbox run also could not bind port 3100.
