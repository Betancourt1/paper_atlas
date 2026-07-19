# Blind VISUAL_QA — SearchOS-V1: Towards Robust Open-Domain Information-Seeking Agent Collaboration

## Verdict

PASS. Paragraph average: semantic **9.06/10**, visual **8.94/10**; minimum individual score **8/10**.

## Paragraph scores

| Paragraph | Semantic accuracy | Rationale | Visual decision / execution | Rationale |
|---|---:|---|---:|---|
| `sos_why_p1` | 9/10 | Bounded, source-aware account of “A long-horizon research task requires more than issuing good…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_why_p2` | 9/10 | Bounded, source-aware account of “Conventional agents often keep this state in growing conversation…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_change_p1` | 9/10 | Bounded, source-aware account of “SearchOS converts a natural-language request into one or more…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_change_p2` | 9/10 | Bounded, source-aware account of “The system then separates global coordination from local search…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_mechanism_p1` | 9/10 | Bounded, source-aware account of “Search-Oriented Context Management contains four linked stores. Frontier Task…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_mechanism_p2` | 9/10 | Bounded, source-aware account of “Before a model call, context middleware projects only the…” | 9/10 | Original Figure 2 directly shows system state and middleware; full native pixels preserve small labels. |
| `sos_mechanism_p3` | 9/10 | Bounded, source-aware account of “Sensor middleware measures changes in grounded coverage and evidence…” | 8/10 | Original Figure 5 is relevant to interventions, but the duplicated generic question weakens paragraph specificity. |
| `sos_example_p1` | 9/10 | Bounded, source-aware account of “Suppose a comparison request has a known company row…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_example_p2` | 9/10 | Bounded, source-aware account of “A page visit alone does not fill the cell…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_evidence_p1` | 9/10 | Bounded, source-aware account of “On WideSearch, SearchOS reports 80.3 item F1 and 56.5…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_evidence_p2` | 10/10 | Bounded, source-aware account of “A paired scheduling study on 10 WideSearch cases reports…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_evidence_p3` | 9/10 | Bounded, source-aware account of “A joint removal of all hierarchical skill layers lowers…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_limitations_p1` | 9/10 | Bounded, source-aware account of “The main evaluation uses GLM-5 for agent roles, Qwen3.5-35B-A3B…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_limitations_p2` | 9/10 | Bounded, source-aware account of “A URL and anchored excerpt preserve provenance but do…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_limitations_p3` | 9/10 | Bounded, source-aware account of “The authors scope V1 to externalized search state and…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_review_p1` | 9/10 | Bounded, source-aware account of “The paper provides bounded engineering evidence for making research…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `sos_review_p2` | 9/10 | Bounded, source-aware account of “The main benchmark comparison evaluates the complete system, so…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |

## Cross-cutting inspection

- **Primary finding:** The two originals are visually distinct and relevant; Figure 2 is exceptionally dense at native size, making the keyboard-scroll viewport essential on mobile.
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
