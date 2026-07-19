# VISUAL_QA — Partition, Prompt, Aggregate

Independent review of `VISUAL_MANIFEST_PARTITION_PROMPT_AGGREGATE.md`, `partition-prompt-aggregate.json`, and the visual implementation in `0c7c6d3`. All 16 prose paragraph IDs are scored.

## Aggregate scores

- `data_visualization_engineer`: **8/10**
- `visual_implementer`: **5/10**
- Engineer distribution: 5×1, 8×2, 9×13
- Implementer distribution: 2×1, 4×3, 5×3, 7×1, 8×3, 9×1, 10×4

The engineer correctly centers the probability identity, tree partition, and distinction between consistency and alignment. One `YES` decision (`ppa_evidence_p3`) is not justified by available quantitative detail and is not implemented. The main implementation failure is structural: the generic partition-tree renderer turns the first split, finer partition, weighted reconstruction, and consistency requirement into sibling branches, so it does not render the approved multilevel tree or the worked example's subgroups.

Rendered verification: both configured desktop and mobile projects visited this page, verified figure containment, evidence and limitations, multiple visual forms, and no page-level horizontal overflow. The in-app browser was unavailable, so no paper-specific screenshot could be independently inspected; responsive scoring uses rendered DOM checks and CSS. This is not publication approval.

## Paragraph scores

| Paragraph | Decision / delivered visual | Engineer | Implementer | Concrete evidence and actionable finding |
|---|---|---:|---:|---|
| `ppa_why_p1` | YES / `visual_ppa_prompt_aggregation_gap` after this paragraph | 9 | 8 | Direct population estimation versus weighted subgroup reconstruction is the paper's core equivalence and merits a visual. The four lanes preserve both routes and the consistency question, but they do not encode the weighted-sum operation or convergence; add a visible equation/merge rather than treating reconstruction as another parallel card. |
| `ppa_why_p2` | NO / prose only | 9 | 10 | The consequence of inconsistent equivalent prompts is already explicit and follows the preceding visual. No duplicate figure is attached. |
| `ppa_change_p1` | YES / shared `visual_ppa_consistency_checks` after `ppa_change_p2` | 9 | 8 | Alignment and self-consistency are conceptually different and deserve comparison. The delivered method cards include alignment alongside split and order consistency, but the generic “Approach A/B/C” framing makes a reference metric look like a third method; use relationship-specific headings. |
| `ppa_change_p2` | YES / shared `visual_ppa_consistency_checks` after this paragraph | 9 | 9 | Split consistency, order consistency, and external alignment are clearly differentiated, and limitations state that consistency is not accuracy. This is a faithful static comparison. |
| `ppa_mechanism_p1` | YES / shared `visual_ppa_partition_tree` after `ppa_mechanism_p2` | 9 | 4 | A multilevel exhaustive partition is inherently visual. The renderer, however, displays “First binary split” and “Finer partition” as sibling cards beneath the root rather than nested levels, so it does not preserve non-overlap, exhaustiveness, or recursive splitting. Implement actual parent/child levels. |
| `ppa_mechanism_p2` | YES / shared `visual_ppa_partition_tree` after this paragraph | 9 | 4 | The paragraph requires subgroup shares, normalization, weighted sum, 50 elicitations, and equality across levels. The visual exposes only text cards; it omits 50 elicitations and renders weighted reconstruction as a sibling branch rather than an aggregation back to the root. |
| `ppa_mechanism_p3` | YES / shared `visual_ppa_partition_tree` placed before this paragraph | 9 | 5 | The partition tree includes one generic “Consistency requirement” card but does not distinguish immediate-child split consistency from condition-order invariance. The separate consistency-check figure appears earlier, so this record should cite that shared visual or receive a local comparison. |
| `ppa_example_p1` | YES / shared `visual_ppa_partition_tree` placed before this paragraph | 9 | 4 | The worked example names age 31–68, its complement, and employment-status splits. None of those subgroup labels appears in the symbolic tree, and the figure appears before the example. A generic tree does not implement the declared example state path. |
| `ppa_example_p2` | YES / shared `visual_ppa_partition_tree` placed before this paragraph | 9 | 5 | The visual states weighted reconstruction and root agreement but does not show subgroup probabilities, shares, products, or the separate ACS alignment comparison. Add a source-bounded symbolic calculation or narrow the shared scope. |
| `ppa_evidence_p1` | YES / shared `visual_ppa_evidence_scope` after `ppa_evidence_p3` | 8 | 7 | A visual can clarify that reconstructed ACS error generally improves then declines, but the matrix only states that pattern in prose and has no depth or error encoding. It is an evidence summary, not the approved reported-condition comparison. |
| `ppa_evidence_p2` | YES / shared `visual_ppa_evidence_scope` after `ppa_evidence_p3` | 9 | 8 | The matrix correctly separates ACS consistency, WVS consistency, and reference-free synthetic tasks and preserves 0–0.33 at tolerance 0.02. It is source-bounded and explicit about scope, though it summarizes rather than visualizes the reported range. |
| `ppa_evidence_p3` | YES / shared `visual_ppa_evidence_scope` after this paragraph | 5 | 2 | The paragraph says only that one-prompt micro-to-macro prompting is less systematic and model-dependent. No values or relationship are supplied, so `NO` would be the disciplined choice. The delivered matrix contains no one-prompt row at all, making the implementation record factually incorrect. |
| `ppa_limitations_p1` | YES / shared `visual_ppa_evidence_scope` placed before this paragraph | 8 | 5 | The non-monotonic depth tradeoff can be visual, but the matrix mentions only that gain is not monotonic; it omits split choice, wording, post-hoc normalization, and difficult fine-grained priors. Place a scoped limitations visual here or keep this paragraph prose-only. |
| `ppa_limitations_p2` | NO / prose only | 9 | 10 | Coherence-not-accuracy and unproven optimization benefits are explicit epistemic boundaries. No figure is attached. |
| `ppa_review_p1` | NO / prose only | 9 | 10 | The reference-free contribution is a synthesis already supported by earlier visuals. No duplicate figure is attached. |
| `ppa_review_p2` | NO / prose only | 9 | 10 | The bounded macro-fallacy interpretation and unknown internal distributions are best left as prose. The implementation remains prose-only. |

## Cross-paper findings for this paper

1. `PartitionTree` does not render a partition tree for this fixture. It flattens levels and aggregation semantics into siblings, materially changing the probability topology.
2. The five-paragraph shared tree scope includes paragraphs after the figure and a worked example whose subgroup labels are absent. Shared scope is declared but not substantively satisfied.
3. `ppa_evidence_p3` should not be marked implemented: the evidence-scope matrix has no row for the one-prompt result.
4. Accessibility and static fallback are present, but semantic HTML alone cannot compensate for a visually incorrect hierarchy. The static fallback repeats the intended tree in prose while the visible topology contradicts it.

This report scores the candidate only and does not approve publication.
