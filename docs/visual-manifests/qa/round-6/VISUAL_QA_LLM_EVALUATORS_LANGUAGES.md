# Blind VISUAL_QA — LLM Evaluators are Biased across Languages — round 6

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
| `language_visual_ranking_acceptance_graph` | `language_mechanism_p1` | two-operation decision graph with shared inputs and divergent threshold outcome | No | The same scores feed two different decisions |

No proposed treatment or rendered output matches a single interchangeable chain, item-plus-metric list, repeated same-metric cards, or repeated one-axis dot tracks/panels. Local sequential edges occur inside some graphs, but branching, convergence, feedback, shared constraints, or skip dependencies make the elements non-interchangeable.

## Paragraph-level scores

| Paragraph | Decision | DVE | DVE evidence | Implementer | Implementer evidence |
| --- | --- | ---: | --- | ---: | --- |
| `language_why_p1` | NO | 9 | The fixture states “Pairwise accuracy asks whether an evaluator ranks a preferred response above a rejected one. If every score in one …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_why_p2` | NO | 9 | The fixture states “Many real uses depend on absolute scores instead: a safety gate accepts content above a threshold, and reinforcemen…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_change_p1` | NO | 9 | The fixture states “The study keeps semantic content aligned across 23 professionally translated and human-validated language versions,…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_change_p2` | NO | 9 | The fixture states “The authors also connect score shifts to Common Crawl language prevalence, test two additional large judges, measur…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_mechanism_p1` | YES | 10 | The paragraph has an invariance plus decision-boundary relation; the proposals use one shared axis, a branched comparator/threshold graph, or a two-dimensional decision region. | 9 | The rendered SVG sends both language score pairs to a pairwise comparator and a global threshold, preserving the same preferred response while changing one threshold decision. It avoids repeated one-axis tracks. |
| `language_mechanism_p2` | NO | 9 | The fixture states “A global threshold exposes the mismatch: languages receiving higher baseline scores accept more responses even when…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_mechanism_p3` | NO | 9 | The fixture states “Summed response negative log-likelihood serves as one uncertainty proxy, with attribute-head disagreement, predicti…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_example_p1` | NO | 9 | The fixture states “For Skywork-LLaMA-8B, the paper rounds English to 93% pairwise accuracy and 23% acceptance, and Ukrainian to 87% pa…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_example_p2` | NO | 9 | The fixture states “The paper also wraps Hindi Safety content in an English frame. An off-the-shelf language identifier labels 44% of t…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_evidence_p1` | NO | 9 | The fixture states “All eight core evaluators show statistically significant differences in mean scores across languages by one-way ANO…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_evidence_p2` | NO | 9 | The fixture states “Under one global median threshold, the aggregate reward-model analysis reports a maximum acceptance gap of 43.0 per…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_evidence_p3` | NO | 9 | The fixture states “Uncertainty measures correlate positively with score at the language level, but nested regressions retain significa…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_limitations_p1` | NO | 9 | The fixture states “The data are translated benchmark items, not naturally authored multilingual conversations or culturally specific j…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_limitations_p2` | NO | 9 | The fixture states “The uncertainty-score association does not establish uncertainty as the cause of the shift. The safety consequences…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_review_p1` | NO | 9 | The fixture states “The strongest result is a measurement warning: high pairwise accuracy does not certify that raw evaluator scores ar…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `language_review_p2` | NO | 9 | The fixture states “Per-language centering is a useful diagnostic and partial mitigation, not a full solution. It requires language ide…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |

## Evidence-fidelity notes

- `language_visual_ranking_acceptance_graph`: Pairwise accuracy can remain high while language-dependent absolute score shifts create different threshold decisions. Reward-model acceptance-rate gaps reach 43.0 percentage points under a shared global median threshold. Source locators: language_source_intro: Pages 1–4, Sections 1–3.2 language_source_thresholds: Pages 5–7, Sections 3.4–3.5, Figure 4, Table 1, Appendix Table 15; Section 3.4 reports a 43.0-point aggregate maximum and separately describes rounded 23% versus 67% English/Ukrainian rates as a 44-point example

The visible figure captions preserve the fixture interpretations and limitations, link to the cited claims and exact source locators, and provide equivalent text. No rendered mark was treated as a measured magnitude unless the fixture explicitly supplies that value.

## Findings

- Mobile figures intentionally require horizontal exploration. The direct captures show only the left portion at the initial scroll position, but Playwright verifies a 680 px SVG inside the viewport-contained, focusable scroller and no document-level horizontal overflow.
- Each SVG has a unique title and description, visible interpretation, visible limitation, visible evidence links, and equivalent fallback prose.
- All 15 NO paragraphs remain prose-only in the rendered route; no extra visual was inserted.
- This report makes no pass/fail recommendation against any hidden acceptance threshold.
