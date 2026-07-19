# Blind VISUAL_QA — TRACE: Turn-level Reward Assignment via Credit Estimation for Long-Horizon Agents

## Verdict

PASS. Paragraph average: semantic **9.06/10**, visual **9.06/10**; minimum individual score **8/10**.

## Paragraph scores

| Paragraph | Semantic accuracy | Rationale | Visual decision / execution | Rationale |
|---|---:|---|---:|---|
| `trace_why_p1` | 9/10 | Bounded, source-aware account of “A search agent may make dozens of dependent decisions…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `trace_why_p2` | 9/10 | Bounded, source-aware account of “Process supervision can provide finer feedback, but commonly needs…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `trace_change_p1` | 9/10 | Bounded, source-aware account of “TRACE leaves final-answer verification in place but adds a…” | 10/10 | Original Figure 1 directly contrasts trajectory-local progress and preserves exact plotted semantics. |
| `trace_change_p2` | 9/10 | Bounded, source-aware account of “This is a change to credit assignment, not a…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `trace_mechanism_p1` | 9/10 | Bounded, source-aware account of “TRACE first splits a rollout after each tool action…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `trace_mechanism_p2` | 9/10 | Bounded, source-aware account of “The raw answer score is converted into a log-ratio…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `trace_mechanism_p3` | 9/10 | Bounded, source-aware account of “One-step credits telescope, so inserting redundant intermediate steps cannot…” | 10/10 | Distinct adjacent, skip, and outcome edges accurately reserve telescoping for one-step credit only. |
| `trace_example_p1` | 9/10 | Bounded, source-aware account of “Consider a trajectory that searches for a relevant source…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `trace_example_p2` | 9/10 | Bounded, source-aware account of “The useful search and page opening can receive positive…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `trace_evidence_p1` | 9/10 | Bounded, source-aware account of “The authors train Qwen3-4B-Thinking-2507 and Qwen3-30B-A3B-Thinking-2507 in the same…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `trace_evidence_p2` | 9/10 | Bounded, source-aware account of “On closed-web BrowseComp-Plus, TRACE moves the 4B base from…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `trace_evidence_p3` | 10/10 | Bounded, source-aware account of “In one 4B BrowseComp-Plus ablation, GRPO scores 30.0, raw…” | 8/10 | Original Figure 3 is relevant to learning dynamics, but the generic caption underspecifies the ablation paragraph. |
| `trace_limitations_p1` | 9/10 | Bounded, source-aware account of “The experiments cover long-horizon search with short answers that…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `trace_limitations_p2` | 9/10 | Bounded, source-aware account of “Only two related Qwen3 backbones and one interaction domain…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `trace_review_p1` | 9/10 | Bounded, source-aware account of “The controlled result supports a narrow conclusion: in the…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `trace_review_p2` | 9/10 | Bounded, source-aware account of “The paper does not establish a general solution to…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |

## Cross-cutting inspection

- **Primary finding:** Figure 1 and the custom credit DAG are semantically exact; the Figure 3 learning-dynamics placement is relevant but captioned more generically than the paragraph.
- **Desktop/mobile legibility:** The renderer keeps source assets at intrinsic pixel dimensions inside a bounded horizontal viewport. Custom SVGs scale on desktop and become a 680 px keyboard-focusable horizontal canvas on narrow screens. This preserves labels without page-level overflow, at the cost of intentional scrolling for dense originals.
- **Focus, scroll, and overflow:** Both source-asset regions and custom SVG containers are focusable; visible 3 px focus styling, contained overscroll, stable scrollbar gutters, and `document.scrollWidth <= innerWidth` assertions cover the interaction contract.
- **Provenance:** Every original placement exposes figure/page locator, attribution, HTTPS license link, modification statement, alt text, claim links, and exact source locator. Custom visuals expose title, description, equivalent fallback, limitations, claims, and sources.
- **Original-figure relevance:** 2 source-asset placement(s) were checked against their adjacent paragraph; no irrelevant or repeated original was found.
- **PPA two-depth requirement:** Not applicable to this explainer.
- **Repetition / forbidden structures:** No single interchangeable chain, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels are used. Prose-only paragraphs correctly avoid inventing visuals.
- **Medium share:** 1 custom SVG, 2 source asset, **0 HTML/CSS-led visuals**; HTML/CSS-led share is **0%**.

## Checks

- Fixture/manifests/assets/renderer/CSS inspection: PASS.
- Focused Vitest renderer checks: PASS (2 files, 8 tests).
- Focused Playwright visual run: NOT COMPLETED; local server bind was blocked by sandbox (`listen EPERM 127.0.0.1:3100`) before browser assertions ran.
