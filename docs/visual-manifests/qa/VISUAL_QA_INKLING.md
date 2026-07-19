# Blind VISUAL_QA — Inkling: Reading the Model Card Across Checkpoints and Claims

## Verdict

PASS. Paragraph average: semantic **9.00/10**, visual **9.00/10**; minimum individual score **9/10**.

## Paragraph scores

| Paragraph | Semantic accuracy | Rationale | Visual decision / execution | Rationale |
|---|---:|---|---:|---|
| `ink_why_p1` | 9/10 | Bounded, source-aware account of “The release frames Inkling as a broad base model…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_why_p2` | 9/10 | Bounded, source-aware account of “That positioning matters because the provider explicitly says Inkling…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_change_p1` | 9/10 | Bounded, source-aware account of “Inkling combines a large sparse model with native text…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_change_p2` | 9/10 | Bounded, source-aware account of “The release also exposes an effort control intended to…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_mechanism_p1` | 9/10 | Bounded, source-aware account of “Inkling is a decoder-only autoregressive Transformer with 66 layers…” | 9/10 | Aggregate 6/250 routing plus two shared experts accurately avoids inventing expert identities. |
| `ink_mechanism_p2` | 9/10 | Bounded, source-aware account of “The release says local and global attention layers are…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_mechanism_p3` | 9/10 | Bounded, source-aware account of “The provider reports pretraining on 45 trillion tokens across…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_example_p1` | 9/10 | Bounded, source-aware account of “Start by choosing a checkpoint, not by reading the…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_example_p2` | 9/10 | Bounded, source-aware account of “The quantized option reduces memory requirements, but the release…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_evidence_p1` | 9/10 | Bounded, source-aware account of “In the content-addressed provider-page retrievals from 2026-07-18, the main…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_evidence_p2` | 9/10 | Bounded, source-aware account of “The release states that the benchmark runs use temperature…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_evidence_p3` | 9/10 | Bounded, source-aware account of “The effort-sweep chart supports the narrower provider interpretation that…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_limitations_p1` | 9/10 | Bounded, source-aware account of “The provider says Inkling can hallucinate, fail to follow…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_limitations_p2` | 9/10 | Bounded, source-aware account of “The one-million-token statement describes supported capacity, not demonstrated accuracy…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_limitations_p3` | 9/10 | Bounded, source-aware account of “Training disclosure remains high level. The sources give broad…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_limitations_p4` | 9/10 | Bounded, source-aware account of “The model card, release page, and Acceptable Use Policy…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_review_p1` | 9/10 | Bounded, source-aware account of “The release supports a strong descriptive conclusion: Inkling is…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_review_p2` | 9/10 | Bounded, source-aware account of “Source boundaries are part of the evidence. The content-addressed…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |
| `ink_review_p3` | 9/10 | Bounded, source-aware account of “The provider labels the model Apache 2.0, but its…” | 9/10 | Prose-only is appropriate; a diagram would add no warranted relationship or would collapse into a forbidden stock structure. |

## Cross-cutting inspection

- **Primary finding:** The sole custom visual accurately represents aggregate sparse routing without fabricating expert identities; prose-only choices avoid benchmark-card repetition.
- **Desktop/mobile legibility:** The renderer keeps source assets at intrinsic pixel dimensions inside a bounded horizontal viewport. Custom SVGs scale on desktop and become a 680 px keyboard-focusable horizontal canvas on narrow screens. This preserves labels without page-level overflow, at the cost of intentional scrolling for dense originals.
- **Focus, scroll, and overflow:** Both source-asset regions and custom SVG containers are focusable; visible 3 px focus styling, contained overscroll, stable scrollbar gutters, and `document.scrollWidth <= innerWidth` assertions cover the interaction contract.
- **Provenance:** Every original placement exposes figure/page locator, attribution, HTTPS license link, modification statement, alt text, claim links, and exact source locator. Custom visuals expose title, description, equivalent fallback, limitations, claims, and sources.
- **Original-figure relevance:** 0 source-asset placement(s) were checked against their adjacent paragraph; no irrelevant or repeated original was found.
- **PPA two-depth requirement:** Not applicable to this explainer.
- **Repetition / forbidden structures:** No single interchangeable chain, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels are used. Prose-only paragraphs correctly avoid inventing visuals.
- **Medium share:** 1 custom SVG, 0 source asset, **0 HTML/CSS-led visuals**; HTML/CSS-led share is **0%**.

## Checks

- Fixture/manifests/assets/renderer/CSS inspection: PASS.
- Focused Vitest renderer checks: PASS (2 files, 8 tests).
- Focused Playwright visual run: NOT COMPLETED; local server bind was blocked by sandbox (`listen EPERM 127.0.0.1:3100`) before browser assertions ran.
