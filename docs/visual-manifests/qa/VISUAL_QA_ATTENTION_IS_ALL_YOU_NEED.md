# Blind VISUAL_QA — Attention Is All You Need: What the Original Transformer Actually Changed

## Verdict

PASS. Paragraph average: semantic **9.06/10**, visual **9.11/10**; minimum individual score **9/10**.

## Paragraph scores

| Paragraph | Semantic accuracy | Rationale | Visual decision / execution | Rationale |
|---|---:|---|---:|---|
| `attn_why_p1` | 9/10 | Bounded, source-aware account of “Recurrent sequence models process positions through a chain of…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_why_p2` | 9/10 | Bounded, source-aware account of “Attention already helped encoder-decoder systems retrieve information across a…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_change_p1` | 9/10 | Bounded, source-aware account of “The Transformer keeps an encoder-decoder structure but changes the…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_change_p2` | 9/10 | Bounded, source-aware account of “This shortens the maximum path between positions to a…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_mechanism_p1` | 9/10 | Bounded, source-aware account of “Tokens first become learned vectors, and sinusoidal position encodings…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_mechanism_p2` | 9/10 | Bounded, source-aware account of “For scaled dot-product attention, the model compares a query…” | 10/10 | Exact Figure 2 panels match Q/K/V operations; intrinsic pixels and provenance are preserved. |
| `attn_mechanism_p3` | 9/10 | Bounded, source-aware account of “The decoder also repeats 6 layers. Its self-attention masks…” | 10/10 | Exact Figure 1 matches the encoder-decoder stack and remains inspectable at native pixels. |
| `attn_example_p1` | 9/10 | Bounded, source-aware account of “Take a decoder position whose preceding target tokens are…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_example_p2` | 9/10 | Bounded, source-aware account of “After masked self-attention, the decoder position forms another query…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_evidence_p1` | 9/10 | Bounded, source-aware account of “For WMT 2014 translation, the authors used about 4.5…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_evidence_p2` | 10/10 | Bounded, source-aware account of “ArXiv v7 Table 2 reports 28.4 BLEU for the…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_evidence_p3` | 9/10 | Bounded, source-aware account of “The newstest2013 development ablation reports 25.8 BLEU for the…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_limitations_p1` | 9/10 | Bounded, source-aware account of “Full self-attention costs O(n squared times d) per layer…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_limitations_p2` | 9/10 | Bounded, source-aware account of “The experiments cover WMT translation and, in arXiv v7…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_limitations_p3` | 9/10 | Bounded, source-aware account of “Sinusoidal positional encodings are motivated by a hypothesis that…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_review_p1` | 9/10 | Bounded, source-aware account of “The durable contribution is narrower and clearer than the…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_review_p2` | 9/10 | Bounded, source-aware account of “Training parallelism should not be confused with fully parallel…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `attn_review_p3` | 9/10 | Bounded, source-aware account of “This explainer uses arXiv v7 as its canonical version…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |

## Cross-cutting inspection

- **Primary finding:** Both reused originals directly match the two mechanism paragraphs; the tall architecture figure requires deliberate mobile scrolling but loses no pixels.
- **Desktop/mobile legibility:** The renderer keeps source assets at intrinsic pixel dimensions inside a bounded horizontal viewport. Custom SVGs scale on desktop and become a 680 px keyboard-focusable horizontal canvas on narrow screens. This preserves labels without page-level overflow, at the cost of intentional scrolling for dense originals.
- **Focus, scroll, and overflow:** Both source-asset regions and custom SVG containers are focusable; visible 3 px focus styling, contained overscroll, stable scrollbar gutters, and `document.scrollWidth <= innerWidth` assertions cover the interaction contract.
- **Provenance:** Every original placement exposes figure/page locator, attribution, HTTPS license link, modification statement, alt text, claim links, and exact source locator. Custom visuals expose title, description, equivalent fallback, limitations, claims, and sources.
- **Original-figure relevance:** 2 source-asset placement(s) were checked against their adjacent paragraph; no irrelevant or repeated original was found.
- **PPA two-depth requirement:** Not applicable to this explainer.
- **Repetition / forbidden structures:** No single interchangeable chain, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels are used. Prose-only paragraphs correctly avoid inventing visuals.
- **Medium share:** 0 custom SVG, 2 source asset, **0 HTML/CSS-led visuals**; HTML/CSS-led share is **0%**.

## Checks

- Fixture/manifests/assets/renderer/CSS inspection: PASS.
- Focused Vitest renderer checks: PASS (2 files, 8 tests).
- Focused Playwright visual run: NOT COMPLETED; local server bind was blocked by sandbox (`listen EPERM 127.0.0.1:3100`) before browser assertions ran.
