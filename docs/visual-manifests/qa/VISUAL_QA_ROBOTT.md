# Blind visual QA — RoboTTT: Context Scaling for Robot Policies

- Fixture: `packages/test-fixtures/explainers/robott.json`
- Manifest revision reviewed: `9`
- Paragraphs scored: `16`
- Engineer decision/proposal average: `8.56/10`
- Implemented visual quality average: `8.06/10`
- Minimum paragraph score: `6/10`

## Independent assessment

Five source-asset placements preserve the architecture and result figures, but Figure 2 is repeated three times and twice paired with Figure 4. The originals are legible at intrinsic scale; the repeated architecture imagery and multi-image horizontal tracks make the mechanism section heavier than necessary.

- Desktop and 390px legibility: original files render at intrinsic pixel width, so labels are not downscaled into illegibility. The tradeoff is figure-local horizontal travel; tall originals also expand the document substantially.
- Keyboard, focus, and scroll: every source viewport is a named focusable region with a visible 3px focus outline and native ArrowRight scrolling. SVG containers are focusable and become 680px-wide local scrollers at mobile width.
- Document overflow: focused Playwright checks confirmed figure overflow stays local and the document itself does not exceed the viewport at desktop or mobile width.
- Provenance: source visuals expose locator, attribution, linked license, modifications, claim links, source locators, specific alt text, and an equivalent hidden-text fallback.
- Paragraph match: source figures and SVGs are placed immediately after their target paragraphs. Shared placements are credited only where the same figure genuinely serves both adjacent paragraphs.
- Forbidden structures: no custom implementation reduces to a single interchangeable chain, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels. Original figures are retained as evidence rather than cosmetically redrawn.
- Repetition burden: High: Figure 2 appears three times, while Figure 4 appears twice. The repeated full assets match the nearby paragraphs but add substantial inspection burden.
- Multi-image sets: Two two-image sets keep the 1942px-wide architecture figure and the smaller sequence figure at independent intrinsic widths. This avoids misleading equal-width normalization but requires long horizontal travel.
- HTML/CSS-led share: `0/5 (0%)`. The implemented primary media are 5 source assets and 0 SVGs; CSS supplies presentation and scrolling, not the visual explanation itself.

## Paragraph scores

| Paragraph | Engineer decision / proposal | Rationale | Implemented quality | Rationale |
|---|---:|---|---:|---|
| `rttt_why_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. A robot acting for minutes must remember which stages it has completed, what actions failed, and what was previously visible before an object became… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `rttt_why_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Full attention over an ever-growing history makes each new prediction more expensive. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `rttt_change_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. RoboTTT does not keep the complete history available for attention. | 6/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `rttt_change_p2` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. The paper combines this state mechanism with two training ideas. | 6/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `rttt_mechanism_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. RoboTTT is instantiated on GR00T N1.7. | 7/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `rttt_mechanism_p2` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. At each step, projected keys and values define an inner loss. | 7/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `rttt_mechanism_p3` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. The updated weights become the next timestep's recurrent state. | 6/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `rttt_example_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. For the Circuit task, a human first assembles an unseen component configuration while the robot remains idle. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `rttt_example_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. After the scene is reset, the robot receives the same generic instruction used for every configuration. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `rttt_evidence_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. Across Pup Go Car, Circuit, and Gear Bot, RoboTTT reports a 79% average rubric-based completion score, compared with 42% for single-step GR00T N1.7 a… | 8/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `rttt_evidence_p2` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. In the context-scaling study, average completion rises from 43.9% with 1K-timestep pretraining to 71.5% at 8K. | 8/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `rttt_evidence_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. RoboTTT recovers from roof and tire perturbations in 15 of 20 and 18 of 20 trials. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `rttt_limitations_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The authors note that longer-context training costs more, the TTT objective is not designed specifically for robotics, and the policy still fails in… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `rttt_limitations_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Trial counts are 20 per task, or 10 for the longest settings, without reported confidence intervals. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `rttt_review_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The mechanism is well matched to the problem: recurrent fast weights provide a fixed-size state, while the scaling curve and component ablations conn… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `rttt_review_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The evidence is not yet a broad demonstration of robot-foundation-model scaling. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |

## Findings

1. Five source-asset placements preserve the architecture and result figures, but Figure 2 is repeated three times and twice paired with Figure 4. The originals are legible at intrinsic scale; the repeated architecture imagery and multi-image horizontal tracks make the mechanism section heavier than necessary.
2. The revision-9 intrinsic-width viewport solves source-label legibility and document-overflow containment, but it does not by itself solve inspection effort or repeated-source pacing.
3. Focus, keyboard scrolling, provenance, fallbacks, and paragraph placement are consistently implemented and verified in the rendered interface.

## Focused checks

- `pnpm --filter @paper-atlas/web test -- explainer-visual.test.tsx papers.test.ts` — passed (2 files, 8 tests).
- `pnpm --filter @paper-atlas/web test:visual` — passed (6 Playwright tests across desktop Chromium and 390px mobile Chromium).
- Direct renderer/CSS inspection — source images retain natural dimensions; multi-image sets use a max-content flex row; all overflow is contained in figure-local regions.
