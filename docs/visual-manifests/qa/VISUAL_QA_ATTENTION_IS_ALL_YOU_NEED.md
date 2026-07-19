# Blind visual QA — Attention Is All You Need: What the Original Transformer Actually Changed

- Fixture: `packages/test-fixtures/explainers/attention-is-all-you-need.json`
- Manifest revision reviewed: `9`
- Paragraphs scored: `18`
- Engineer decision/proposal average: `8.67/10`
- Implemented visual quality average: `8.11/10`
- Minimum paragraph score: `5/10`

## Independent assessment

Five source-asset placements preserve the originals, but Figure 1 is repeated four times and its 1520 x 2239 intrinsic canvas makes inspection vertically and horizontally expensive. The two-panel Figure 2 set stays readable rather than being compressed, yet it also requires deliberate scrolling.

- Desktop and 390px legibility: original files render at intrinsic pixel width, so labels are not downscaled into illegibility. The tradeoff is figure-local horizontal travel; tall originals also expand the document substantially.
- Keyboard, focus, and scroll: every source viewport is a named focusable region with a visible 3px focus outline and native ArrowRight scrolling. SVG containers are focusable and become 680px-wide local scrollers at mobile width.
- Document overflow: focused Playwright checks confirmed figure overflow stays local and the document itself does not exceed the viewport at desktop or mobile width.
- Provenance: source visuals expose locator, attribution, linked license, modifications, claim links, source locators, specific alt text, and an equivalent hidden-text fallback.
- Paragraph match: source figures and SVGs are placed immediately after their target paragraphs. Shared placements are credited only where the same figure genuinely serves both adjacent paragraphs.
- Forbidden structures: no custom implementation reduces to a single interchangeable chain, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels. Original figures are retained as evidence rather than cosmetically redrawn.
- Repetition burden: High: Figure 1 is reproduced four times. The later placements add progressively less teaching value and make the document much longer.
- Multi-image sets: One two-image Figure 2 set is kept at independent intrinsic widths in a horizontal row; neither panel is normalized into a narrow equal-width column.
- HTML/CSS-led share: `0/5 (0%)`. The implemented primary media are 5 source assets and 0 SVGs; CSS supplies presentation and scrolling, not the visual explanation itself.

## Paragraph scores

| Paragraph | Engineer decision / proposal | Rationale | Implemented quality | Rationale |
|---|---:|---|---:|---|
| `attn_why_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Recurrent sequence models process positions through a chain of hidden states. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `attn_why_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Attention already helped encoder-decoder systems retrieve information across a sequence, but it was usually combined with recurrence. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `attn_change_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. The Transformer keeps an encoder-decoder structure but changes the operation used to exchange information between positions. | 7/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `attn_change_p2` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. This shortens the maximum path between positions to a constant number of sequential operations per self-attention layer. | 7/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `attn_mechanism_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. Tokens first become learned vectors, and sinusoidal position encodings are added so the model receives order information. | 6/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `attn_mechanism_p2` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. For scaled dot-product attention, the model compares a query with every key using Q times K-transpose, divides by the square root of the key dimensio… | 7/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `attn_mechanism_p3` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. The decoder also repeats 6 layers. | 6/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `attn_example_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Take a decoder position whose preceding target tokens are known. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `attn_example_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. After masked self-attention, the decoder position forms another query and compares it with keys from every encoded source position. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `attn_evidence_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. For WMT 2014 translation, the authors used about 4.5 million English-German sentence pairs with a shared 37,000-token byte-pair vocabulary and 36 mil… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `attn_evidence_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. ArXiv v7 Table 2 reports 28.4 BLEU for the big English-German model and 41.8 for English-French. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `attn_evidence_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The newstest2013 development ablation reports 25.8 BLEU for the base configuration, 24.9 with one attention head, 25.4 with 32 heads, and 25.7 when l… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `attn_limitations_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Full self-attention costs O(n squared times d) per layer. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `attn_limitations_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The experiments cover WMT translation and, in arXiv v7, English constituency parsing. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `attn_limitations_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Sinusoidal positional encodings are motivated by a hypothesis that they may extrapolate to longer sequences, but the reported comparison only shows n… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `attn_review_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. The durable contribution is narrower and clearer than the title: the paper shows that sequence-aligned recurrent and convolutional layers are not req… | 5/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `attn_review_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Training parallelism should not be confused with fully parallel generation. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `attn_review_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. This explainer uses arXiv v7 as its canonical version and preserves the conflicting English-French results from the primary sources. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |

## Findings

1. Five source-asset placements preserve the originals, but Figure 1 is repeated four times and its 1520 x 2239 intrinsic canvas makes inspection vertically and horizontally expensive. The two-panel Figure 2 set stays readable rather than being compressed, yet it also requires deliberate scrolling.
2. The revision-9 intrinsic-width viewport solves source-label legibility and document-overflow containment, but it does not by itself solve inspection effort or repeated-source pacing.
3. Focus, keyboard scrolling, provenance, fallbacks, and paragraph placement are consistently implemented and verified in the rendered interface.

## Focused checks

- `pnpm --filter @paper-atlas/web test -- explainer-visual.test.tsx papers.test.ts` — passed (2 files, 8 tests).
- `pnpm --filter @paper-atlas/web test:visual` — passed (6 Playwright tests across desktop Chromium and 390px mobile Chromium).
- Direct renderer/CSS inspection — source images retain natural dimensions; multi-image sets use a max-content flex row; all overflow is contained in figure-local regions.
