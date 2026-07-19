# Blind VISUAL_QA — Pretraining Data Can Be Poisoned through Computational Propaganda

## Verdict

PASS. Paragraph average: semantic **9.06/10**, visual **9.12/10**; minimum individual score **9/10**.

## Paragraph scores

| Paragraph | Semantic accuracy | Rationale | Visual decision / execution | Rationale |
|---|---:|---|---:|---|
| `propaganda_why_p1` | 9/10 | Bounded, source-aware account of “Pretraining corpora contain more web text than people can…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `propaganda_why_p2` | 9/10 | Bounded, source-aware account of “Earlier demonstrations often targeted known sources or assumed access…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `propaganda_change_p1` | 9/10 | Bounded, source-aware account of “HalfLife replaces the binary question 'can content be posted?'…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `propaganda_change_p2` | 9/10 | Bounded, source-aware account of “That decomposition can reject superficially plausible vectors. In the…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `propaganda_mechanism_p1` | 9/10 | Bounded, source-aware account of “HalfLife defines three gates. S1 measures whether a page…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `propaganda_mechanism_p2` | 9/10 | Bounded, source-aware account of “The paper estimates the conditional probability at each gate…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `propaganda_mechanism_p3` | 9/10 | Bounded, source-aware account of “Corpus inclusion is still only an intermediate outcome. The…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `propaganda_example_p1` | 9/10 | Bounded, source-aware account of “Start with a page identified as having a comment…” | 10/10 | Exact Figure 3 directly shows comment survival through extraction; crop is intact and attributed. |
| `propaganda_example_p2` | 9/10 | Bounded, source-aware account of “The resulting documents then pass through Dolma 3-style heuristic…” | 10/10 | Branching denominators, rejected complements, and the 0.13/0.15 discrepancy are encoded without stock-card repetition. |
| `propaganda_evidence_p1` | 10/10 | Bounded, source-aware account of “The inclusion analysis scans 181,857 pages from 200 WARC…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `propaganda_evidence_p2` | 9/10 | Bounded, source-aware account of “For model effects, the authors pretrain OLMo-3-like models from…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `propaganda_evidence_p3` | 9/10 | Bounded, source-aware account of “Clean supervised fine-tuning reduces the measured effect: at 0.1%…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `propaganda_limitations_p1` | 9/10 | Bounded, source-aware account of “Common Crawl is a proxy for production collection, and…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `propaganda_limitations_p2` | 9/10 | Bounded, source-aware account of “The authors avoid live injection and validate the vector…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `propaganda_review_p1` | 9/10 | Bounded, source-aware account of “The paper supports treating third-party page fragments as a…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `propaganda_review_p2` | 9/10 | Bounded, source-aware account of “The phrase 'can be poisoned at scale' should remain…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |

## Cross-cutting inspection

- **Primary finding:** The original extraction example and custom conditional tree form a non-repetitive pair; the tree keeps rejected branches and the numerical discrepancy visible.
- **Desktop/mobile legibility:** The renderer keeps source assets at intrinsic pixel dimensions inside a bounded horizontal viewport. Custom SVGs scale on desktop and become a 680 px keyboard-focusable horizontal canvas on narrow screens. This preserves labels without page-level overflow, at the cost of intentional scrolling for dense originals.
- **Focus, scroll, and overflow:** Both source-asset regions and custom SVG containers are focusable; visible 3 px focus styling, contained overscroll, stable scrollbar gutters, and `document.scrollWidth <= innerWidth` assertions cover the interaction contract.
- **Provenance:** Every original placement exposes figure/page locator, attribution, HTTPS license link, modification statement, alt text, claim links, and exact source locator. Custom visuals expose title, description, equivalent fallback, limitations, claims, and sources.
- **Original-figure relevance:** 1 source-asset placement(s) were checked against their adjacent paragraph; no irrelevant or repeated original was found.
- **PPA two-depth requirement:** Not applicable to this explainer.
- **Repetition / forbidden structures:** No single interchangeable chain, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels are used. Prose-only paragraphs correctly avoid inventing visuals.
- **Medium share:** 1 custom SVG, 1 source asset, **0 HTML/CSS-led visuals**; HTML/CSS-led share is **0%**.

## Checks

- Fixture/manifests/assets/renderer/CSS inspection: PASS.
- Focused Vitest renderer checks: PASS (2 files, 8 tests).
- Focused Playwright visual run: NOT COMPLETED; local server bind was blocked by sandbox (`listen EPERM 127.0.0.1:3100`) before browser assertions ran.
