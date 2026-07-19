# Blind VISUAL_QA — LLM Evaluators are Biased across Languages

## Verdict

PASS. Paragraph average: semantic **9.00/10**, visual **9.00/10**; minimum individual score **8/10**.

## Paragraph scores

| Paragraph | Semantic accuracy | Rationale | Visual decision / execution | Rationale |
|---|---:|---|---:|---|
| `language_why_p1` | 9/10 | Bounded, source-aware account of “Pairwise accuracy asks whether an evaluator ranks a preferred…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `language_why_p2` | 9/10 | Bounded, source-aware account of “Many real uses depend on absolute scores instead: a…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `language_change_p1` | 9/10 | Bounded, source-aware account of “The study keeps semantic content aligned across 23 professionally…” | 9/10 | Original Figure 1 is relevant and pixel-faithful, though dense labels require horizontal inspection on mobile. |
| `language_change_p2` | 9/10 | Bounded, source-aware account of “The authors also connect score shifts to Common Crawl…” | 9/10 | Original Figure 3 supports the resource-level qualification; native-size scrolling preserves detail. |
| `language_mechanism_p1` | 9/10 | Bounded, source-aware account of “Suppose an evaluator adds a language-conditioned baseline to every…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `language_mechanism_p2` | 9/10 | Bounded, source-aware account of “A global threshold exposes the mismatch: languages receiving higher…” | 10/10 | Original Figure 4 directly exposes accuracy-versus-acceptance divergence with exact axes and panels. |
| `language_mechanism_p3` | 9/10 | Bounded, source-aware account of “Summed response negative log-likelihood serves as one uncertainty proxy…” | 8/10 | Original Figure 5 is relevant, but the generic interpretation describes it less precisely than the paragraph does. |
| `language_example_p1` | 9/10 | Bounded, source-aware account of “For Skywork-LLaMA-8B, the paper rounds English to 93% pairwise…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `language_example_p2` | 9/10 | Bounded, source-aware account of “The paper also wraps Hindi Safety content in an…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `language_evidence_p1` | 9/10 | Bounded, source-aware account of “All eight core evaluators show statistically significant differences in…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `language_evidence_p2` | 9/10 | Bounded, source-aware account of “Under one global median threshold, the aggregate reward-model analysis…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `language_evidence_p3` | 9/10 | Bounded, source-aware account of “Uncertainty measures correlate positively with score at the language…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `language_limitations_p1` | 9/10 | Bounded, source-aware account of “The data are translated benchmark items, not naturally authored…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `language_limitations_p2` | 9/10 | Bounded, source-aware account of “The uncertainty-score association does not establish uncertainty as the…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `language_review_p1` | 9/10 | Bounded, source-aware account of “The strongest result is a measurement warning: high pairwise…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `language_review_p2` | 9/10 | Bounded, source-aware account of “Per-language centering is a useful diagnostic and partial mitigation…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |

## Cross-cutting inspection

- **Primary finding:** Four distinct originals cover distributions, resource level, the Figure 4 relationship, and uncertainty; the last placement has a less specific interpretation than its source image.
- **Desktop/mobile legibility:** The renderer keeps source assets at intrinsic pixel dimensions inside a bounded horizontal viewport. Custom SVGs scale on desktop and become a 680 px keyboard-focusable horizontal canvas on narrow screens. This preserves labels without page-level overflow, at the cost of intentional scrolling for dense originals.
- **Focus, scroll, and overflow:** Both source-asset regions and custom SVG containers are focusable; visible 3 px focus styling, contained overscroll, stable scrollbar gutters, and `document.scrollWidth <= innerWidth` assertions cover the interaction contract.
- **Provenance:** Every original placement exposes figure/page locator, attribution, HTTPS license link, modification statement, alt text, claim links, and exact source locator. Custom visuals expose title, description, equivalent fallback, limitations, claims, and sources.
- **Original-figure relevance:** 4 source-asset placement(s) were checked against their adjacent paragraph; no irrelevant or repeated original was found.
- **PPA two-depth requirement:** Not applicable to this explainer.
- **Repetition / forbidden structures:** No single interchangeable chain, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels are used. Prose-only paragraphs correctly avoid inventing visuals.
- **Medium share:** 0 custom SVG, 4 source asset, **0 HTML/CSS-led visuals**; HTML/CSS-led share is **0%**.

## Checks

- Fixture/manifests/assets/renderer/CSS inspection: PASS.
- Focused Vitest renderer checks: PASS (2 files, 8 tests).
- Focused Playwright visual run: NOT COMPLETED; local server bind was blocked by sandbox (`listen EPERM 127.0.0.1:3100`) before browser assertions ran.
