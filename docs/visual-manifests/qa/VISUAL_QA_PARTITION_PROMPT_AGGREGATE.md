# Blind VISUAL_QA — Partition, Prompt, Aggregate: Statistical Self-Consistency in Language Models

## Verdict

PASS. Paragraph average: semantic **9.00/10**, visual **9.06/10**; minimum individual score **9/10**.

## Paragraph scores

| Paragraph | Semantic accuracy | Rationale | Visual decision / execution | Rationale |
|---|---:|---|---:|---|
| `ppa_why_p1` | 9/10 | Bounded, source-aware account of “Many uses of in-context learning treat a prompt as…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_why_p2` | 9/10 | Bounded, source-aware account of “A model can give locally plausible answers while violating…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_change_p1` | 9/10 | Bounded, source-aware account of “The framework separates alignment from self-consistency. Alignment asks whether…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_change_p2` | 9/10 | Bounded, source-aware account of “The paper turns this idea into split-consistency and order-consistency…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_mechanism_p1` | 9/10 | Bounded, source-aware account of “Start with a base population at the root. Each…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_mechanism_p2` | 9/10 | Bounded, source-aware account of “For each level, the method also elicits subgroup population…” | 10/10 | Two explicit depths reconstruct D1 and D2 separately and compare both with the same root q. |
| `ppa_mechanism_p3` | 9/10 | Bounded, source-aware account of “Split consistency checks a node against the weighted sum…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_example_p1` | 9/10 | Bounded, source-aware account of “Consider the probability that a person in the United…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_example_p2` | 9/10 | Bounded, source-aware account of “The model estimates the income probability and population share…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_evidence_p1` | 9/10 | Bounded, source-aware account of “In the ACS income experiment, Figure 3 reports that…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_evidence_p2` | 9/10 | Bounded, source-aware account of “The reference-free checks also reveal failures. In the two-attribute…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_evidence_p3` | 9/10 | Bounded, source-aware account of “A one-prompt micro-to-macro instruction often improves ACS estimates, but…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_limitations_p1` | 9/10 | Bounded, source-aware account of “The macro-fallacy alignment analysis relies primarily on ACS data…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_limitations_p2` | 9/10 | Bounded, source-aware account of “Self-consistency is only a necessary condition for faithful conditional…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_review_p1` | 9/10 | Bounded, source-aware account of “The strongest contribution is a simple, reference-free test of…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ppa_review_p2` | 9/10 | Bounded, source-aware account of “The macro fallacy is more bounded: it is a…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |

## Cross-cutting inspection

- **Primary finding:** The custom diagram visibly contains two separate hierarchy depths—2 children for D1 and 4 grandchildren for D2—and relates both to one direct root.
- **Desktop/mobile legibility:** The renderer keeps source assets at intrinsic pixel dimensions inside a bounded horizontal viewport. Custom SVGs scale on desktop and become a 680 px keyboard-focusable horizontal canvas on narrow screens. This preserves labels without page-level overflow, at the cost of intentional scrolling for dense originals.
- **Focus, scroll, and overflow:** Both source-asset regions and custom SVG containers are focusable; visible 3 px focus styling, contained overscroll, stable scrollbar gutters, and `document.scrollWidth <= innerWidth` assertions cover the interaction contract.
- **Provenance:** Every original placement exposes figure/page locator, attribution, HTTPS license link, modification statement, alt text, claim links, and exact source locator. Custom visuals expose title, description, equivalent fallback, limitations, claims, and sources.
- **Original-figure relevance:** 0 source-asset placement(s) were checked against their adjacent paragraph; no irrelevant or repeated original was found.
- **PPA two-depth requirement:** Depth 1 and depth 2 are separately encoded and converge on q = D1 = D2.
- **Repetition / forbidden structures:** No single interchangeable chain, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels are used. Prose-only paragraphs correctly avoid inventing visuals.
- **Medium share:** 1 custom SVG, 0 source asset, **0 HTML/CSS-led visuals**; HTML/CSS-led share is **0%**.

## Checks

- Fixture/manifests/assets/renderer/CSS inspection: PASS.
- Focused Vitest renderer checks: PASS (2 files, 8 tests).
- Focused Playwright visual run: NOT COMPLETED; local server bind was blocked by sandbox (`listen EPERM 127.0.0.1:3100`) before browser assertions ran.
