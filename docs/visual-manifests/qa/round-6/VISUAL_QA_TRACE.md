# Blind VISUAL_QA — TRACE: Turn-level Reward Assignment via Credit Estimation for Long-Horizon Agents — round 6

## Scope and method

This is an independent, blind review of revision 6 using only the permitted manifest, explainer fixture, current relevant renderer/schema/checker/tests, directly linked evidence locators, and the rendered local route. No prior QA report, coordinator policy, publication threshold, or paper-explainer workflow material was consulted.

Rendered verification: `pnpm --filter @paper-atlas/web test:visual` completed with 4/4 Playwright tests passing across 1440×1000 desktop Chromium and 390×844 mobile Chromium. All 1 selected figure was also inspected directly at both sizes. Mobile SVGs use the declared contained 680 px horizontal canvas; the default left-edge view is not document clipping, and the scroller is keyboard-focusable.

## Aggregates

| Measure | Result |
| --- | ---: |
| Paragraphs scored twice | 16 |
| DVE minimum | 9/10 |
| DVE mean | 9.06/10 |
| DVE holistic aggregate | 9/10 |
| Implementer minimum | 9/10 |
| Implementer mean | 9.94/10 |
| Implementer holistic aggregate | 9/10 |
| Proposed prohibited treatments | 0/3 |
| Selected prohibited outputs | 0/1 |
| Prose-only decisions | 15/16 |

The holistic scores are independent judgments, not rounded paragraph means and not a publication recommendation.

## Medium ratios

- Proposed treatments: 0/3 HTML/CSS-led (0.00%). Declared primary media are SVG, generated asset, or JavaScript; none is declared HTML/CSS-led.
- Selected unique visual IDs: 0/1 HTML/CSS-led (0.00%). Every selected primary medium is SVG.
- Accessible equivalent prose is treated as fallback for the SVG primary medium and is not counted as HTML/CSS-led primary treatment.

## Actual rendered topology audit

| Visual | Placement | Actual topology | Prohibited form | Treatment/evidence check |
| --- | --- | --- | --- | --- |
| `trace_visual_credit_dependency_dag` | `trace_mechanism_p3` | dependency DAG with adjacent, skip, and global-anchor edges | No | TRACE combines local, look-ahead, and outcome credit scopes |

No proposed treatment or rendered output matches a single interchangeable chain, item-plus-metric list, repeated same-metric cards, or repeated one-axis dot tracks/panels. Local sequential edges occur inside some graphs, but branching, convergence, feedback, shared constraints, or skip dependencies make the elements non-interchangeable.

## Paragraph-level scores

| Paragraph | Decision | DVE | DVE evidence | Implementer | Implementer evidence |
| --- | --- | ---: | --- | ---: | --- |
| `trace_why_p1` | NO | 9 | The fixture states “A search agent may make dozens of dependent decisions before answering. A failed trajectory can contain useful sear…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_why_p2` | NO | 9 | The fixture states “Process supervision can provide finer feedback, but commonly needs step labels, an LLM judge, a learned critic, or …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_change_p1` | NO | 9 | The fixture states “TRACE leaves final-answer verification in place but adds a trajectory-local signal at tool-call boundaries. Instead…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_change_p2` | NO | 9 | The fixture states “This is a change to credit assignment, not a new browser, backbone, training corpus, or final verifier. In the cont…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_mechanism_p1` | NO | 9 | The fixture states “TRACE first splits a rollout after each tool action and returned observation. For every resulting prefix, a frozen …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_mechanism_p2` | NO | 9 | The fixture states “The raw answer score is converted into a log-ratio value representing relative closure of the initial answer-likeli…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_mechanism_p3` | YES | 10 | The paragraph combines adjacent telescoping edges, look-ahead skip dependencies, and a separate global outcome anchor; all proposals preserve the multi-scale dependency structure. | 9 | The rendered SVG augments the prefix sequence with short look-ahead skip dependencies and a separate outcome broadcast, while the bracket limits exact telescoping to adjacent differences. |
| `trace_example_p1` | NO | 9 | The fixture states “Consider a trajectory that searches for a relevant source, opens a page containing decisive evidence, then follows …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_example_p2` | NO | 9 | The fixture states “The useful search and page opening can receive positive local credit if they make the gold answer more predictable.…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_evidence_p1` | NO | 9 | The fixture states “The authors train Qwen3-4B-Thinking-2507 and Qwen3-30B-A3B-Thinking-2507 in the same ReAct-style search harness. Th…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_evidence_p2` | NO | 9 | The fixture states “On closed-web BrowseComp-Plus, TRACE moves the 4B base from 7.2 to 35.6 and the 30B-A3B base from 8.4 to 42.6. Rela…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_evidence_p3` | NO | 9 | The fixture states “In one 4B BrowseComp-Plus ablation, GRPO scores 30.0, raw log-probability delta 32.4, remaining-gap normalization 3…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_limitations_p1` | NO | 9 | The fixture states “The experiments cover long-horizon search with short answers that can be compared with known ground truth. The auth…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_limitations_p2` | NO | 9 | The fixture states “Only two related Qwen3 backbones and one interaction domain are evaluated. A higher frozen-model probability is evi…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_review_p1` | NO | 9 | The fixture states “The controlled result supports a narrow conclusion: in the authors' search setup, adding their reference-model-base…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `trace_review_p2` | NO | 9 | The fixture states “The paper does not establish a general solution to agent credit assignment. The proxy depends on a known answer, th…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |

## Evidence-fidelity notes

- `trace_visual_credit_dependency_dag`: The one-step local credit is the difference between adjacent log-ratio prefix values. The one-step credit telescopes, so redundant intermediate turns cannot increase its endpoint sum. The reported training objective combines local turn credit with GRPO's final outcome advantage. Source locators: trace_source_method: Sections 3.1–3.3, Equations 4–12, Algorithm 1

The visible figure captions preserve the fixture interpretations and limitations, link to the cited claims and exact source locators, and provide equivalent text. No rendered mark was treated as a measured magnitude unless the fixture explicitly supplies that value.

## Findings

- Mobile figures intentionally require horizontal exploration. The direct captures show only the left portion at the initial scroll position, but Playwright verifies a 680 px SVG inside the viewport-contained, focusable scroller and no document-level horizontal overflow.
- Each SVG has a unique title and description, visible interpretation, visible limitation, visible evidence links, and equivalent fallback prose.
- All 15 NO paragraphs remain prose-only in the rendered route; no extra visual was inserted.
- This report makes no pass/fail recommendation against any hidden acceptance threshold.
