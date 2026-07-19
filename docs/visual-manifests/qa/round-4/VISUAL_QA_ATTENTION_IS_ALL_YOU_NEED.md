# Blind visual QA — Attention Is All You Need (revision 6)

## Scope and aggregate scores

- Paragraphs audited: 18/18; implemented visuals: 2.
- Data-visualization-engineer: aggregate **8/10**; paragraph mean **151/18 = 8.389**; minimum **7/10**.
- Visual-implementer: aggregate **7/10**; paragraph mean **174/18 = 9.667**; minimum **5/10**.
- Proposed HTML/CSS-led treatments: **0/6 (0%)**. Selected HTML/CSS-led unique visual IDs: **0/2 (0%)**.
- Rendered inspection: desktop Chromium 1440×1000 and mobile Chromium iPhone 13 both rendered the two expected figures at the declared paragraphs. Mobile uses a 680 px SVG inside a keyboard-focusable horizontal scroller; there was no document-level overflow. Both figures expose SVG title/description, figure fallback text, evidence links, and limitations.

## Paragraph-level audit

| Paragraph | DVE | Implementer | Auditable basis |
|---|---:|---:|---|
| `attn_why_p1` | 9 | 10 | NO correctly avoids restating recurrence as a forbidden chain; no figure rendered. |
| `attn_why_p2` | 9 | 10 | The recurrence-versus-attention question is explicit in prose; no stock comparison was added. |
| `attn_change_p1` | 8 | 10 | NO is defensible, though the three attention domains are relational; implementation faithfully remains prose-only. |
| `attn_change_p2` | 8 | 10 | The path-length claim and component caveat could support a careful topology, but a list/chain would add little; no visual rendered. |
| `attn_mechanism_p1` | 8 | 10 | Avoiding a six-layer component inventory is correct; no visual rendered. |
| `attn_mechanism_p2` | 9 | 5 | YES has a genuine many-to-many warrant and three distinct non-stock treatments. The actual SVG connects three queries to four keys but collapses all keys into one overdrawn `Σ wV` node, omits distinct value nodes and per-query outputs, and therefore does not faithfully express row-wise mixing. |
| `attn_mechanism_p3` | 9 | 9 | YES correctly warrants dependency topology plus autoregressive state change. The SVG shows allowed prefix edges, blocked future input, source convergence, prediction, and feedback without becoming a single chain. |
| `attn_example_p1` | 8 | 10 | NO avoids duplicating the already-served mask mechanism as another sequence; no visual rendered. |
| `attn_example_p2` | 8 | 10 | The paragraph combines training concurrency and generation recurrence, but the preceding decoder figure serves the main dependency; no redundant figure rendered. |
| `attn_evidence_p1` | 7 | 10 | NO prevents an item-plus-value inventory, but the rationale does not seriously assess the joint scale/time/compute structure; implementation remains prose-only. |
| `attn_evidence_p2` | 8 | 10 | Version disagreement is better preserved in prose than flattened into a value list; no visual rendered. |
| `attn_evidence_p3` | 7 | 10 | The ablation and parsing results could support a shared-scale chart; the generic NO rationale is underdeveloped, though absence is preferable to banned repeated panels. |
| `attn_limitations_p1` | 8 | 10 | Complexity/path-length conditions could be visualized, but the bounded asymptotic caveat reads clearly; no visual rendered. |
| `attn_limitations_p2` | 9 | 10 | Scope and uncertainty omissions are prose claims, not a warranted visual structure. |
| `attn_limitations_p3` | 9 | 10 | The distinction between motivation and evidence is clearest in prose; no decorative figure. |
| `attn_review_p1` | 9 | 10 | NO correctly avoids a component inventory. |
| `attn_review_p2` | 9 | 10 | The concurrency/generation qualification is concise and already supported by the decoder figure; no duplicate visual. |
| `attn_review_p3` | 9 | 10 | Source/version/licensing provenance is correctly prose-only. |

## Implemented-visual topology classification

| Visual | Desktop/mobile result and evidence fidelity | Single chain | Item + value list | Repeated metric cards | Repeated dot tracks |
|---|---|---:|---:|---:|---:|
| `visual_attention_query_key_field` | Legible and scrollable, but the rendered topology fails to preserve one weighted output per query and depicts keys feeding a single shared sum without visible values. | No | No | No | No |
| `visual_attention_decoder_dependencies` | Legible branching dependency map; future input is visibly blocked, source positions converge, and feedback changes the next prefix state. | No | No | No | No |

## Findings

1. `visual_attention_query_key_field` materially collapses the row-wise attention relation. Render either one query to all keys/values and one output, or multiple queries with separate weighted outputs.
2. The implementation records say the SVGs scale without a minimum width, while the rendered mobile rule fixes SVG width at 680 px and scrolls. The actual behavior is accessible and passed overflow checks, but the record is inaccurate.
3. All proposed and selected primary media are non-HTML/CSS-led, and neither rendered figure matches a prohibited form.
