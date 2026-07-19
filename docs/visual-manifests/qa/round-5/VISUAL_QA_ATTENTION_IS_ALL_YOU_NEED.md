# Blind visual QA — Attention Is All You Need — revision 6

## Evidence boundary

Reviewed the current manifest, fixture, implementation, and rendered output. `make e2e` passed 6/6 after the local server was permitted to bind: desktop- and mobile-Chromium rendered both visuals at their exact paragraphs and verified SVG title/desc, computed 11px text, fills/strokes/markers, no page overflow, and the mobile 680px canvas inside a focusable horizontal scroller.

Score evidence codes: `N` = manifest chooses NO with paragraph-specific prose/forbidden-form rationale and the fixture has no visual placement (DVE 9; implementer 10). `Y1` = query-key-value relation has a genuine many-to-many warrant and three distinct alternatives; rendered implementation shows one query branching through paired keys/values to one weighted output, but only labels multi-head recombination rather than encoding it (DVE 9; implementer 8). `Y2` = masked-prefix, source cross-attention, blocked future, and feedback form a real dependency/state topology; rendered implementation encodes all four relations (DVE 10; implementer 9).

| Paragraph | DVE /10 | Implementer /10 | Evidence |
|---|---:|---:|---|
| `attn_why_p1` | 9 | 10 | N |
| `attn_why_p2` | 9 | 10 | N |
| `attn_change_p1` | 9 | 10 | N |
| `attn_change_p2` | 9 | 10 | N |
| `attn_mechanism_p1` | 9 | 10 | N |
| `attn_mechanism_p2` | 9 | 8 | Y1 |
| `attn_mechanism_p3` | 10 | 9 | Y2 |
| `attn_example_p1` | 9 | 10 | N |
| `attn_example_p2` | 9 | 10 | N |
| `attn_evidence_p1` | 9 | 10 | N |
| `attn_evidence_p2` | 9 | 10 | N |
| `attn_evidence_p3` | 9 | 10 | N |
| `attn_limitations_p1` | 9 | 10 | N |
| `attn_limitations_p2` | 9 | 10 | N |
| `attn_limitations_p3` | 9 | 10 | N |
| `attn_review_p1` | 9 | 10 | N |
| `attn_review_p2` | 9 | 10 | N |
| `attn_review_p3` | 9 | 10 | N |

## Aggregates and topology

- Paragraphs: 18; visuals: 2.
- DVE: minimum 9; mean 9.0556; integer holistic 9/10.
- Implementer: minimum 8; mean 9.8333; integer holistic 10/10.
- Combined paragraph-role mean: 9.4444.
- Proposed HTML/CSS-led treatments: 0/6 (0%). Selected HTML/CSS-led unique IDs: 0/2 (0%).
- Prohibited proposals: 0. Prohibited outputs: 0. The first output is a branching/converging relation field; the second is a dependency graph with blocking, convergence, and feedback.

## Findings

1. `attn_mechanism_p2`: the selected implementation does not visually encode the eight-head parallelism/recombination named by the warrant and question; it relegates that part to a bracket label.
2. Automated desktop/mobile rendering verifies layout/scroll/focus mechanics and SVG labelling; it does not substitute for a manual screen-reader announcement audit.
