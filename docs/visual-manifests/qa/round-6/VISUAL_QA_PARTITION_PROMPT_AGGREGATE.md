# Blind VISUAL_QA — Partition, Prompt, Aggregate: Statistical Self-Consistency in Language Models — round 6

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
| `visual_ppa_weighted_reconstruction_graph` | `ppa_mechanism_p2` | parallel factor graph with normalization, summation, and comparison | No | Weighted subgroup estimates reconstruct one root quantity |

No proposed treatment or rendered output matches a single interchangeable chain, item-plus-metric list, repeated same-metric cards, or repeated one-axis dot tracks/panels. Local sequential edges occur inside some graphs, but branching, convergence, feedback, shared constraints, or skip dependencies make the elements non-interchangeable.

## Paragraph-level scores

| Paragraph | Decision | DVE | DVE evidence | Implementer | Implementer evidence |
| --- | --- | ---: | --- | ---: | --- |
| `ppa_why_p1` | NO | 9 | The fixture states “Many uses of in-context learning treat a prompt as a condition and the model's answer as an estimate of the corresp…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_why_p2` | NO | 9 | The fixture states “A model can give locally plausible answers while violating this requirement. Two statistically equivalent prompts c…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_change_p1` | NO | 9 | The fixture states “The framework separates alignment from self-consistency. Alignment asks whether an estimate matches external refere…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_change_p2` | NO | 9 | The fixture states “The paper turns this idea into split-consistency and order-consistency scores. It also identifies the macro fallacy…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_mechanism_p1` | NO | 9 | The fixture states “Start with a base population at the root. Each binary attribute splits every node at a level into two non-overlappi…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_mechanism_p2` | YES | 10 | The paragraph requires hierarchical priors, conditional estimates, normalization, aggregation, and root consistency; all proposed treatments expose a joint quantitative structure. | 9 | The rendered SVG gives each of three prior/estimate pairs its own multiplication operator, joins all contributions at one sum, shows a shared prior-normalization constraint, and keeps the direct-root comparison separate. |
| `ppa_mechanism_p3` | NO | 9 | The fixture states “Split consistency checks a node against the weighted sum of its immediate children. Order consistency asks whether …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_example_p1` | NO | 9 | The fixture states “Consider the probability that a person in the United States earns above a chosen threshold. One prompt asks for the…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_example_p2` | NO | 9 | The fixture states “The model estimates the income probability and population share for each subgroup. The explainer then multiplies ea…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_evidence_p1` | NO | 9 | The fixture states “In the ACS income experiment, Figure 3 reports that reconstructed aggregate estimates generally reduce alignment er…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_evidence_p2` | NO | 9 | The fixture states “The reference-free checks also reveal failures. In the two-attribute ACS tasks, the reported split-consistency scor…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_evidence_p3` | NO | 9 | The fixture states “A one-prompt micro-to-macro instruction often improves ACS estimates, but its effect is less systematic and more mo…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_limitations_p1` | NO | 9 | The fixture states “The macro-fallacy alignment analysis relies primarily on ACS data. Its magnitude depends on the chosen demographic …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_limitations_p2` | NO | 9 | The fixture states “Self-consistency is only a necessary condition for faithful conditional inference. A model can be internally cohere…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_review_p1` | NO | 9 | The fixture states “The strongest contribution is a simple, reference-free test of whether conditional estimates compose. It exposes a …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ppa_review_p2` | NO | 9 | The fixture states “The macro fallacy is more bounded: it is a repeated empirical pattern in the ACS analysis, not a universal rule tha…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |

## Evidence-fidelity notes

- `visual_ppa_weighted_reconstruction_graph`: Each level of a valid binary conditioning tree forms a mutually exclusive and collectively exhaustive partition of the base population. The method reconstructs a population estimate by weighting subgroup conditional estimates by their elicited subgroup priors and summing them. For each ACS tree level, the subgroup prior is estimated from 50 model responses after each response is normalized. Source locators: ppa_method: Sections 3.1–3.4, Equations 2–3, PDF pages 5–7 ppa_protocol: Appendix E.2, PDF pages 34–35

The visible figure captions preserve the fixture interpretations and limitations, link to the cited claims and exact source locators, and provide equivalent text. No rendered mark was treated as a measured magnitude unless the fixture explicitly supplies that value.

## Findings

- Mobile figures intentionally require horizontal exploration. The direct captures show only the left portion at the initial scroll position, but Playwright verifies a 680 px SVG inside the viewport-contained, focusable scroller and no document-level horizontal overflow.
- Each SVG has a unique title and description, visible interpretation, visible limitation, visible evidence links, and equivalent fallback prose.
- All 15 NO paragraphs remain prose-only in the rendered route; no extra visual was inserted.
- This report makes no pass/fail recommendation against any hidden acceptance threshold.
