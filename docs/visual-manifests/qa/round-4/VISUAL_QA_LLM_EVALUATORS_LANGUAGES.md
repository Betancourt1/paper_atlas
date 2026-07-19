# Blind visual QA — LLM Evaluators Across Languages (revision 6)

## Scope and aggregate scores

- Paragraphs audited: 16/16; implemented visuals: 1.
- Data-visualization-engineer: aggregate **8/10**; paragraph mean **132/16 = 8.250**; minimum **7/10**.
- Visual-implementer: aggregate **8/10**; paragraph mean **158/16 = 9.875**; minimum **8/10**.
- Proposed HTML/CSS-led treatments: **0/3 (0%)**. Selected HTML/CSS-led unique visual IDs: **0/1 (0%)**.
- Rendered inspection: desktop and mobile Chromium rendered the relational SVG after `language_mechanism_p1`; mobile uses the focusable horizontal scroller without page overflow. Semantic and caption fallbacks, evidence, and limitations are present.

## Paragraph-level audit

| Paragraph | DVE | Implementer | Auditable basis |
|---|---:|---:|---|
| `language_why_p1` | 9 | 10 | NO avoids reducing translation invariance to a decorative two-item comparison before the mechanism figure. |
| `language_why_p2` | 9 | 10 | Threshold and scalar-reward motivation is plain prose. |
| `language_change_p1` | 8 | 10 | Study dimensions are an inventory; no stock grid was added. |
| `language_change_p2` | 8 | 10 | The calibration framing is complex but still introductory; the mechanism figure carries the core relation. |
| `language_mechanism_p1` | 9 | 8 | YES has a genuine joint-decision warrant. The SVG branches two language score pairs to a comparator and threshold and shows preserved preference versus changed threshold outcome; labels are conceptual rather than an actual common score axis. |
| `language_mechanism_p2` | 8 | 10 | The preceding figure already explains the global-threshold mismatch; no duplicate visual. |
| `language_mechanism_p3` | 8 | 10 | Regression/proxy inventory lacks enough local quantitative detail for a faithful chart. |
| `language_example_p1` | 8 | 10 | Four rounded values could become a prohibited item-value list; prose preserves the 43/44 distinction. |
| `language_example_p2` | 8 | 10 | The code-switch attack demonstration is understandable in prose; a simple chain would be forbidden. |
| `language_evidence_p1` | 7 | 10 | Correlations and ANOVA support quantitative structure, but the generic NO rationale does not discuss a possible shared-scale or bivariate view. |
| `language_evidence_p2` | 7 | 10 | Multiple acceptance gaps across evaluators are highly visualizable on a shared scale; declining a chart is plausible but insufficiently justified. |
| `language_evidence_p3` | 7 | 10 | Before/after gap reduction and retained language effects could support one coherent quantitative comparison; rationale is generic. |
| `language_limitations_p1` | 9 | 10 | Dataset/proxy caveats are correctly prose-only. |
| `language_limitations_p2` | 9 | 10 | Causality and deployment limits should not be visualized speculatively. |
| `language_review_p1` | 9 | 10 | Measurement warning is direct and already supported by the figure. |
| `language_review_p2` | 9 | 10 | Partial mitigation and remaining interaction are clear in prose. |

## Implemented-visual topology classification

| Visual | Desktop/mobile result and evidence fidelity | Single chain | Item + value list | Repeated metric cards | Repeated dot tracks |
|---|---|---:|---:|---:|---:|
| `language_visual_ranking_acceptance_graph` | A branching relational graph, not a list. It teaches that difference and threshold operations consume the same scores differently, but it does not expose the actual common threshold geometry, so “A accepted/B changes” requires the caption. | No | No | No | No |

## Findings

1. The selected SVG is structurally compliant and useful, but a shared illustrative axis would make threshold crossing more immediately legible than outcome boxes alone.
2. Three evidence paragraphs contain meaningful shared-scale or joint quantitative structure; the NO decisions are not well defended by their generic rationales.
3. Mobile rendering and semantic fallback passed; the manifest's “no minimum width” implementation statement does not match the actual 680 px scroller.
