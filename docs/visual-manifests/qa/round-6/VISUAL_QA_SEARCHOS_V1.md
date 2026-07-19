# Blind VISUAL_QA — SearchOS-V1: Towards Robust Open-Domain Information-Seeking Agent Collaboration — round 6

## Scope and method

This is an independent, blind review of revision 6 using only the permitted manifest, explainer fixture, current relevant renderer/schema/checker/tests, directly linked evidence locators, and the rendered local route. No prior QA report, coordinator policy, publication threshold, or paper-explainer workflow material was consulted.

Rendered verification: `pnpm --filter @paper-atlas/web test:visual` completed with 4/4 Playwright tests passing across 1440×1000 desktop Chromium and 390×844 mobile Chromium. All 3 selected figures were also inspected directly at both sizes. Mobile SVGs use the declared contained 680 px horizontal canvas; the default left-edge view is not document clipping, and the scroller is keyboard-focusable.

## Aggregates

| Measure | Result |
| --- | ---: |
| Paragraphs scored twice | 17 |
| DVE minimum | 9/10 |
| DVE mean | 9.18/10 |
| DVE holistic aggregate | 9/10 |
| Implementer minimum | 9/10 |
| Implementer mean | 9.82/10 |
| Implementer holistic aggregate | 9/10 |
| Proposed prohibited treatments | 0/9 |
| Selected prohibited outputs | 0/3 |
| Prose-only decisions | 14/17 |

The holistic scores are independent judgments, not rounded paragraph means and not a publication recommendation.

## Medium ratios

- Proposed treatments: 0/9 HTML/CSS-led (0.00%). Declared primary media are SVG, generated asset, or JavaScript; none is declared HTML/CSS-led.
- Selected unique visual IDs: 0/3 HTML/CSS-led (0.00%). Every selected primary medium is SVG.
- Accessible equivalent prose is treated as fallback for the SVG primary medium and is not counted as HTML/CSS-led primary treatment.

## Actual rendered topology audit

| Visual | Placement | Actual topology | Prohibited form | Treatment/evidence check |
| --- | --- | --- | --- | --- |
| `visual_searchos_socm_state_graph` | `sos_mechanism_p1` | multiplex typed-store graph around schema cells | No | SOCM links four typed stores around schema cells |
| `visual_searchos_evidence_gate` | `sos_mechanism_p2` | conjunctive transaction graph with distinct rejection paths and dual commit | No | Evidence commits only when two conditions hold |
| `visual_searchos_sensor_policy_dispatch` | `sos_mechanism_p3` | branched control policy plus independent asynchronous dispatch conjunction | No | Progress sensors and budgets drive asynchronous dispatch |

No proposed treatment or rendered output matches a single interchangeable chain, item-plus-metric list, repeated same-metric cards, or repeated one-axis dot tracks/panels. Local sequential edges occur inside some graphs, but branching, convergence, feedback, shared constraints, or skip dependencies make the elements non-interchangeable.

## Paragraph-level scores

| Paragraph | Decision | DVE | DVE evidence | Implementer | Implementer evidence |
| --- | --- | ---: | --- | ---: | --- |
| `sos_why_p1` | NO | 9 | The fixture states “A long-horizon research task requires more than issuing good queries. The system must remember which entities and a…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `sos_why_p2` | NO | 9 | The fixture states “Conventional agents often keep this state in growing conversation histories. As evidence becomes buried, workers ca…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `sos_change_p1` | NO | 9 | The fixture states “SearchOS converts a natural-language request into one or more related tables. Rows represent entities, columns repr…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `sos_change_p2` | NO | 9 | The fixture states “The system then separates global coordination from local search. An orchestrator owns schema and task mutation, exp…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `sos_mechanism_p1` | YES | 10 | The paragraph specifies four typed stores with non-interchangeable cross-links; graph, relation matrix, and role-projection alternatives all expose real topology. | 9 | The rendered SVG places four non-interchangeable stores around schema cells with distinct task, evidence, coverage, and failure relations plus an evidence-to-task resolving edge. |
| `sos_mechanism_p2` | YES | 10 | The paragraph contains a conjunction, two failure conditions, and an atomic two-store transition; all proposals encode logic or state transitions. | 9 | The rendered SVG branches a candidate into schema-binding and anchored-span checks, joins them at an AND gate, commits atomically to two stores, and routes failures to a separate rejection record. |
| `sos_mechanism_p3` | YES | 10 | The paragraph combines changing sensor state, five policy branches, terminal modes, and asynchronous slot dependencies; the alternatives encode feedback, concurrency, or a dependency matrix. | 9 | The rendered SVG keeps five policy actions separate and also shows slot release plus a ready unresolved gap converging on an independent AND gate and distinct dispatch state. |
| `sos_example_p1` | NO | 9 | The fixture states “Suppose a comparison request has a known company row but no verified value for one attribute. The Coverage Map mark…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `sos_example_p2` | NO | 9 | The fixture states “A page visit alone does not fill the cell. Evidence middleware must extract a candidate value, bind it to the corre…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `sos_evidence_p1` | NO | 9 | The fixture states “On WideSearch, SearchOS reports 80.3 item F1 and 56.5 row F1, compared with 76.0 and 54.5 for the strongest baselin…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `sos_evidence_p2` | NO | 9 | The fixture states “A paired scheduling study on 10 WideSearch cases reports that continuous dispatch reduces average runtime from 629.…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `sos_evidence_p3` | NO | 9 | The fixture states “A joint removal of all hierarchical skill layers lowers item F1 from 80.3 to 78.3 and row F1 from 56.5 to 53.1. The…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `sos_limitations_p1` | NO | 9 | The fixture states “The main evaluation uses GLM-5 for agent roles, Qwen3.5-35B-A3B for evidence extraction, and reports the best of th…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `sos_limitations_p2` | NO | 9 | The fixture states “A URL and anchored excerpt preserve provenance but do not independently prove that the extracted value is true. Cit…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `sos_limitations_p3` | NO | 9 | The fixture states “The authors scope V1 to externalized search state and leave large-scale skill synthesis, broader domains, multimoda…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `sos_review_p1` | NO | 9 | The fixture states “The paper provides bounded engineering evidence for making research state explicit. The schema, evidence gate, prog…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `sos_review_p2` | NO | 9 | The fixture states “The main benchmark comparison evaluates the complete system, so it cannot assign the overall gain to middleware, co…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |

## Evidence-fidelity notes

- `visual_searchos_socm_state_graph`: SOCM consists of Frontier Task, an Evidence Graph, a Coverage Map, and Failure Memory with role-specific projections. SearchOS represents a request as relational schema completion and associates each populated value with a source URL and anchored excerpt. Source locators: sos_formulation_source: Sections 2–3.2, Equations 1–10, Figure 2, PDF pages 3–6; the arXiv v1 record identifies the paper as CC BY 4.0
- `visual_searchos_evidence_gate`: Evidence middleware accepts a browsing candidate only when it binds to a schema cell and anchors to a source span, then updates evidence and coverage atomically. Source locators: sos_middleware_source: Sections 3.3–3.4, Equations 11–18, Figures 3–4, PDF pages 7–9
- `visual_searchos_sensor_policy_dispatch`: Pipeline-parallel orchestration immediately assigns released execution slots to ready unresolved gaps instead of waiting for synchronized batches. Source locators: sos_middleware_source: Sections 3.3–3.4, Equations 11–18, Figures 3–4, PDF pages 7–9

The visible figure captions preserve the fixture interpretations and limitations, link to the cited claims and exact source locators, and provide equivalent text. No rendered mark was treated as a measured magnitude unless the fixture explicitly supplies that value.

## Findings

- Mobile figures intentionally require horizontal exploration. The direct captures show only the left portion at the initial scroll position, but Playwright verifies a 680 px SVG inside the viewport-contained, focusable scroller and no document-level horizontal overflow.
- Each SVG has a unique title and description, visible interpretation, visible limitation, visible evidence links, and equivalent fallback prose.
- All 14 NO paragraphs remain prose-only in the rendered route; no extra visual was inserted.
- This report makes no pass/fail recommendation against any hidden acceptance threshold.
