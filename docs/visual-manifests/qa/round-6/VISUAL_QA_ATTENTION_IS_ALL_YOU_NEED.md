# Blind VISUAL_QA — Attention Is All You Need: What the Original Transformer Actually Changed — round 6

## Scope and method

This is an independent, blind review of revision 6 using only the permitted manifest, explainer fixture, current relevant renderer/schema/checker/tests, directly linked evidence locators, and the rendered local route. No prior QA report, coordinator policy, publication threshold, or paper-explainer workflow material was consulted.

Rendered verification: `pnpm --filter @paper-atlas/web test:visual` completed with 4/4 Playwright tests passing across 1440×1000 desktop Chromium and 390×844 mobile Chromium. All 2 selected figures were also inspected directly at both sizes. Mobile SVGs use the declared contained 680 px horizontal canvas; the default left-edge view is not document clipping, and the scroller is keyboard-focusable.

## Aggregates

| Measure | Result |
| --- | ---: |
| Paragraphs scored twice | 18 |
| DVE minimum | 9/10 |
| DVE mean | 9.11/10 |
| DVE holistic aggregate | 9/10 |
| Implementer minimum | 8/10 |
| Implementer mean | 9.83/10 |
| Implementer holistic aggregate | 9/10 |
| Proposed prohibited treatments | 0/6 |
| Selected prohibited outputs | 0/2 |
| Prose-only decisions | 16/18 |

The holistic scores are independent judgments, not rounded paragraph means and not a publication recommendation.

## Medium ratios

- Proposed treatments: 0/6 HTML/CSS-led (0.00%). Declared primary media are SVG, generated asset, or JavaScript; none is declared HTML/CSS-led.
- Selected unique visual IDs: 0/2 HTML/CSS-led (0.00%). Every selected primary medium is SVG.
- Accessible equivalent prose is treated as fallback for the SVG primary medium and is not counted as HTML/CSS-led primary treatment.

## Actual rendered topology audit

| Visual | Placement | Actual topology | Prohibited form | Treatment/evidence check |
| --- | --- | --- | --- | --- |
| `visual_attention_query_key_field` | `attn_mechanism_p2` | branching many-to-many field plus eight-head recombination | No | Every query relates to every key before values mix |
| `visual_attention_decoder_dependencies` | `attn_mechanism_p3` | branched dependency graph with blocked future edge and autoregressive feedback | No | The decoder combines permitted prefix and source dependencies |

No proposed treatment or rendered output matches a single interchangeable chain, item-plus-metric list, repeated same-metric cards, or repeated one-axis dot tracks/panels. Local sequential edges occur inside some graphs, but branching, convergence, feedback, shared constraints, or skip dependencies make the elements non-interchangeable.

## Paragraph-level scores

| Paragraph | Decision | DVE | DVE evidence | Implementer | Implementer evidence |
| --- | --- | ---: | --- | ---: | --- |
| `attn_why_p1` | NO | 9 | The fixture states “Recurrent sequence models process positions through a chain of hidden states. That dependency makes computation wit…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_why_p2` | NO | 9 | The fixture states “Attention already helped encoder-decoder systems retrieve information across a sequence, but it was usually combine…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_change_p1` | NO | 9 | The fixture states “The Transformer keeps an encoder-decoder structure but changes the operation used to exchange information between p…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_change_p2` | NO | 9 | The fixture states “This shortens the maximum path between positions to a constant number of sequential operations per self-attention l…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_mechanism_p1` | NO | 9 | The fixture states “Tokens first become learned vectors, and sinusoidal position encodings are added so the model receives order inform…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_mechanism_p2` | YES | 10 | The paragraph requires readers to reconstruct query-to-key scoring, value mixing, and eight parallel head outputs; all three proposed treatments encode non-trivial many-to-many or matrix structure with explicit evidence and limitations. | 8 | The rendered SVG preserves one query row, three key/value pairs, eight distinct head outputs, Concat, W_O, and prose fallback. Desktop inspection shows the eight fan strokes crossing several head-output nodes, which weakens individual-path discrimination; mobile containment and horizontal scrolling work. |
| `attn_mechanism_p3` | YES | 10 | The paragraph combines causal masking, full source dependency, and a changing autoregressive state; the three treatments encode dependency matrices or feedback rather than a simple chain. | 9 | The rendered SVG distinguishes permitted prefix edges, four source dependencies, the blocked future target, cross-attention, next-token distribution, and a feedback return. Desktop and mobile inspection plus semantic SVG checks support the implementation. |
| `attn_example_p1` | NO | 9 | The fixture states “Take a decoder position whose preceding target tokens are known. Its query is compared with keys from the known tar…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_example_p2` | NO | 9 | The fixture states “After masked self-attention, the decoder position forms another query and compares it with keys from every encoded …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_evidence_p1` | NO | 9 | The fixture states “For WMT 2014 translation, the authors used about 4.5 million English-German sentence pairs with a shared 37,000-tok…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_evidence_p2` | NO | 9 | The fixture states “ArXiv v7 Table 2 reports 28.4 BLEU for the big English-German model and 41.8 for English-French. The 28.4 result ex…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_evidence_p3` | NO | 9 | The fixture states “The newstest2013 development ablation reports 25.8 BLEU for the base configuration, 24.9 with one attention head, 2…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_limitations_p1` | NO | 9 | The fixture states “Full self-attention costs O(n squared times d) per layer. The paper argues it is faster than recurrence when sequen…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_limitations_p2` | NO | 9 | The fixture states “The experiments cover WMT translation and, in arXiv v7, English constituency parsing. They do not establish superio…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_limitations_p3` | NO | 9 | The fixture states “Sinusoidal positional encodings are motivated by a hypothesis that they may extrapolate to longer sequences, but th…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_review_p1` | NO | 9 | The fixture states “The durable contribution is narrower and clearer than the title: the paper shows that sequence-aligned recurrent an…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_review_p2` | NO | 9 | The fixture states “Training parallelism should not be confused with fully parallel generation. The decoder mask allows known target po…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `attn_review_p3` | NO | 9 | The fixture states “This explainer uses arXiv v7 as its canonical version and preserves the conflicting English-French results from the…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |

## Evidence-fidelity notes

- `visual_attention_query_key_field`: Scaled dot-product attention computes softmax of Q times K-transpose divided by the square root of the key dimension, then multiplies those weights by V. The authors interpret multi-head attention as a way to attend jointly to different representation subspaces and positions instead of collapsing them through one attention average. Source locators: source_attention_arxiv_v7: Pages 1-10; Sections 1-7; Figures 1-2; Equation 1; Tables 1-4; version and figure-permission notice
- `visual_attention_decoder_dependencies`: The base encoder and decoder each contain 6 layers; the decoder masks future target positions and adds encoder-decoder attention over the encoded source. Scaled dot-product attention computes softmax of Q times K-transpose divided by the square root of the key dimension, then multiplies those weights by V. Source locators: source_attention_arxiv_v7: Pages 1-10; Sections 1-7; Figures 1-2; Equation 1; Tables 1-4; version and figure-permission notice

The visible figure captions preserve the fixture interpretations and limitations, link to the cited claims and exact source locators, and provide equivalent text. No rendered mark was treated as a measured magnitude unless the fixture explicitly supplies that value.

## Findings

- `visual_attention_query_key_field`: the eight recombination strokes cross several intermediate head-output nodes. The topology is complete, but individual-path tracing is less legible than the manifest asks for.
- Mobile figures intentionally require horizontal exploration. The direct captures show only the left portion at the initial scroll position, but Playwright verifies a 680 px SVG inside the viewport-contained, focusable scroller and no document-level horizontal overflow.
- Each SVG has a unique title and description, visible interpretation, visible limitation, visible evidence links, and equivalent fallback prose.
- All 16 NO paragraphs remain prose-only in the rendered route; no extra visual was inserted.
- This report makes no pass/fail recommendation against any hidden acceptance threshold.
