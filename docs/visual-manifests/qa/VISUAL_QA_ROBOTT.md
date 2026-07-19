# Blind VISUAL_QA — RoboTTT: Context Scaling for Robot Policies

## Verdict

PASS. Paragraph average: semantic **9.00/10**, visual **8.94/10**; minimum individual score **8/10**.

## Paragraph scores

| Paragraph | Semantic accuracy | Rationale | Visual decision / execution | Rationale |
|---|---:|---|---:|---|
| `rttt_why_p1` | 9/10 | Bounded, source-aware account of “A robot acting for minutes must remember which stages…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `rttt_why_p2` | 9/10 | Bounded, source-aware account of “Full attention over an ever-growing history makes each new…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `rttt_change_p1` | 9/10 | Bounded, source-aware account of “RoboTTT does not keep the complete history available for…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `rttt_change_p2` | 9/10 | Bounded, source-aware account of “The paper combines this state mechanism with two training…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `rttt_mechanism_p1` | 9/10 | Bounded, source-aware account of “RoboTTT is instantiated on GR00T N1.7. Its vision-language model…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `rttt_mechanism_p2` | 9/10 | Bounded, source-aware account of “At each step, projected keys and values define an…” | 9/10 | Original Figure 2 directly shows training and recurrent inference, with readable native-pixel inspection. |
| `rttt_mechanism_p3` | 9/10 | Bounded, source-aware account of “The updated weights become the next timestep's recurrent state…” | 8/10 | Original Figure 4 is relevant to propagated state, but its generic question duplicates the prior placement. |
| `rttt_example_p1` | 9/10 | Bounded, source-aware account of “For the Circuit task, a human first assembles an…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `rttt_example_p2` | 9/10 | Bounded, source-aware account of “After the scene is reset, the robot receives the…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `rttt_evidence_p1` | 9/10 | Bounded, source-aware account of “Across Pup Go Car, Circuit, and Gear Bot, RoboTTT…” | 9/10 | Original Figure 7 directly supports the main completion results and keeps exact experimental encoding. |
| `rttt_evidence_p2` | 9/10 | Bounded, source-aware account of “In the context-scaling study, average completion rises from 43.9%…” | 9/10 | Original Figure 8 directly supports context scaling; dense labels remain available via scrolling. |
| `rttt_evidence_p3` | 9/10 | Bounded, source-aware account of “RoboTTT recovers from roof and tire perturbations in 15…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `rttt_limitations_p1` | 9/10 | Bounded, source-aware account of “The authors note that longer-context training costs more, the…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `rttt_limitations_p2` | 9/10 | Bounded, source-aware account of “Trial counts are 20 per task, or 10 for…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `rttt_review_p1` | 9/10 | Bounded, source-aware account of “The mechanism is well matched to the problem: recurrent…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `rttt_review_p2` | 9/10 | Bounded, source-aware account of “The evidence is not yet a broad demonstration of…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |

## Cross-cutting inspection

- **Primary finding:** Four originals are relevant and non-duplicated, though the Figure 4 placement repeats the prior question wording instead of naming its distinct state-propagation role.
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
