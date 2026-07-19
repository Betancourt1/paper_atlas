# Blind visual QA — LLM Evaluators Across Languages — revision 6

## Evidence boundary

Reviewed current permitted sources and rendered desktop/mobile Chromium output. `make e2e` passed 6/6 and verified exact placement, SVG labelling/styles, overflow containment, and focusable mobile scrolling.

Codes: `N` = supported prose-only decision and absence of visual (9, 10). `Y` = the invariant ranking versus absolute-threshold split is a non-trivial branching decision relationship with three distinct treatments; rendered SVG sends both language pairs to comparator and threshold branches and shows preserved ranking versus changed acceptance (9, 9).

| Paragraph | DVE /10 | Implementer /10 | Evidence |
|---|---:|---:|---|
| `language_why_p1` | 9 | 10 | N |
| `language_why_p2` | 9 | 10 | N |
| `language_change_p1` | 9 | 10 | N |
| `language_change_p2` | 9 | 10 | N |
| `language_mechanism_p1` | 9 | 9 | Y |
| `language_mechanism_p2` | 9 | 10 | N |
| `language_mechanism_p3` | 9 | 10 | N |
| `language_example_p1` | 9 | 10 | N |
| `language_example_p2` | 9 | 10 | N |
| `language_evidence_p1` | 9 | 10 | N |
| `language_evidence_p2` | 9 | 10 | N |
| `language_evidence_p3` | 9 | 10 | N |
| `language_limitations_p1` | 9 | 10 | N |
| `language_limitations_p2` | 9 | 10 | N |
| `language_review_p1` | 9 | 10 | N |
| `language_review_p2` | 9 | 10 | N |

## Aggregates and topology

- Paragraphs: 16; visuals: 1. DVE minimum/mean 9/9.0000, integer holistic 9/10. Implementer minimum 9, mean 9.9375, integer holistic 10/10. Combined mean 9.4688.
- Proposed HTML/CSS-led: 0/3 (0%). Selected HTML/CSS-led: 0/1 (0%).
- Prohibited proposals: 0. Prohibited outputs: 0. The output is a two-operation branching/convergence graph, not repeated one-axis tracks.
- Finding: automated rendering does not substitute for manual screen-reader verification.
