# Blind VISUAL_QA — RoboTTT: Context Scaling for Robot Policies — round 6

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
| `visual_robottt_fast_weight_architecture` | `rttt_mechanism_p2` | parallel activation/gradient graph with recurrent fast-weight state | No | RoboTTT updates fast weights inside inference |

No proposed treatment or rendered output matches a single interchangeable chain, item-plus-metric list, repeated same-metric cards, or repeated one-axis dot tracks/panels. Local sequential edges occur inside some graphs, but branching, convergence, feedback, shared constraints, or skip dependencies make the elements non-interchangeable.

## Paragraph-level scores

| Paragraph | Decision | DVE | DVE evidence | Implementer | Implementer evidence |
| --- | --- | ---: | --- | ---: | --- |
| `rttt_why_p1` | NO | 9 | The fixture states “A robot acting for minutes must remember which stages it has completed, what actions failed, and what was previousl…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_why_p2` | NO | 9 | The fixture states “Full attention over an ever-growing history makes each new prediction more expensive. A compact recurrent state avo…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_change_p1` | NO | 9 | The fixture states “RoboTTT does not keep the complete history available for attention. It uses fast weights as recurrent state: a smal…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_change_p2` | NO | 9 | The fixture states “The paper combines this state mechanism with two training ideas. Sequence action forcing samples a different flow-m…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_mechanism_p1` | NO | 9 | The fixture states “RoboTTT is instantiated on GR00T N1.7. Its vision-language model encodes the current observation, and its Diffusion…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_mechanism_p2` | YES | 10 | The paragraph has distinct activation, gradient, gated merge, and recurrent-state paths; the proposals encode feedback or incidence rather than a linear pipeline. | 9 | The rendered SVG separates K/V inner-loss inputs, gradient update, updated-query path, parallel attention path, gated merge, action denoiser, and an explicit next-timestep recurrent state. |
| `rttt_mechanism_p3` | NO | 9 | The fixture states “The updated weights become the next timestep's recurrent state. During sequence training, gradients flow within eac…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_example_p1` | NO | 9 | The fixture states “For the Circuit task, a human first assembles an unseen component configuration while the robot remains idle. The d…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_example_p2` | NO | 9 | The fixture states “After the scene is reset, the robot receives the same generic instruction used for every configuration. Its action …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_evidence_p1` | NO | 9 | The fixture states “Across Pup Go Car, Circuit, and Gear Bot, RoboTTT reports a 79% average rubric-based completion score, compared wit…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_evidence_p2` | NO | 9 | The fixture states “In the context-scaling study, average completion rises from 43.9% with 1K-timestep pretraining to 71.5% at 8K. The …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_evidence_p3` | NO | 9 | The fixture states “RoboTTT recovers from roof and tire perturbations in 15 of 20 and 18 of 20 trials. GDN also reaches 18 of 20 on tir…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_limitations_p1` | NO | 9 | The fixture states “The authors note that longer-context training costs more, the TTT objective is not designed specifically for roboti…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_limitations_p2` | NO | 9 | The fixture states “Trial counts are 20 per task, or 10 for the longest settings, without reported confidence intervals. The paper argu…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_review_p1` | NO | 9 | The fixture states “The mechanism is well matched to the problem: recurrent fast weights provide a fixed-size state, while the scaling …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `rttt_review_p2` | NO | 9 | The fixture states “The evidence is not yet a broad demonstration of robot-foundation-model scaling. A second backbone, different embod…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |

## Evidence-fidelity notes

- `visual_robottt_fast_weight_architecture`: RoboTTT places TTT layers after attention in the DiT action head and carries their fast weights forward between timesteps. Sequence action forcing uses independently sampled noise levels per action chunk, while TBPTT carries fast weights across detached segment boundaries. Source locators: rttt_architecture_source: Sections 2–3.2, Equations 1–5, Figures 2–4, PDF pages 3–5; the arXiv v1 record identifies the paper as CC BY 4.0 rttt_training_source: Sections 3.3–3.4, Figures 5–6, PDF pages 6–7

The visible figure captions preserve the fixture interpretations and limitations, link to the cited claims and exact source locators, and provide equivalent text. No rendered mark was treated as a measured magnitude unless the fixture explicitly supplies that value.

## Findings

- Mobile figures intentionally require horizontal exploration. The direct captures show only the left portion at the initial scroll position, but Playwright verifies a 680 px SVG inside the viewport-contained, focusable scroller and no document-level horizontal overflow.
- Each SVG has a unique title and description, visible interpretation, visible limitation, visible evidence links, and equivalent fallback prose.
- All 15 NO paragraphs remain prose-only in the rendered route; no extra visual was inserted.
- This report makes no pass/fail recommendation against any hidden acceptance threshold.
