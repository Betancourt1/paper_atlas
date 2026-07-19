# Blind visual QA — RoboTTT — revision 13

| Paragraph | Engineer | Implementation | Paragraph-specific evidence |
|---|---:|---:|---|
| `rttt_why_p1` | 9 | 10 | Long-horizon memory need is motivation; a frame-history strip would be a stock chain. |
| `rttt_why_p2` | 9 | 10 | Growing attention cost versus compact state is a bounded trade-off. |
| `rttt_change_p1` | 9 | 10 | Fast-weight updating is shown in the later complete architecture figure. |
| `rttt_change_p2` | 9 | 10 | Action forcing and TBPTT are fully shown at the training-state paragraph. |
| `rttt_mechanism_p1` | 9 | 10 | Backbone and within/across-timestep roles are context for Figure 2, not a separate visual job. |
| `rttt_mechanism_p2` | 10 | 10 | Original Figure 2 directly shows training and inference dependencies; desktop is complete and mobile splits at the paper-defined training/inference panels. |
| `rttt_mechanism_p3` | 10 | 9 | Figure 4 directly shows TBPTT gradient stopping with fast-weight carry. Mobile separates the paper's input/TBPTT and fast-weight bands meaningfully, though the cross-band relation requires reading two images. |
| `rttt_example_p1` | 9 | 10 | Human demonstration and masked action loss are a worked narrative, not a separate topology. |
| `rttt_example_p2` | 9 | 10 | Reset, generic instruction, and 6/10 result are explicit prose. |
| `rttt_evidence_p1` | 10 | 9 | Figure 7 directly compares all task groups. Desktop is complete; mobile retains the original legend and two paper-defined task-group crops with an axis strip, but separation modestly increases lookup cost. |
| `rttt_evidence_p2` | 10 | 9 | Figure 8 directly shows context scaling. Desktop is complete; mobile uses meaningful overlapping x-ranges and duplicates the 1K point and original y-axis for continuity. |
| `rttt_evidence_p3` | 9 | 10 | Perturbation and DAgger numbers would be an item-plus-metric list and correctly stay prose-only. |
| `rttt_limitations_p1` | 9 | 10 | Costs, objective, backbone, setup, and task-family scope are categorical limitations. |
| `rttt_limitations_p2` | 9 | 10 | Trial counts, missing intervals, and absent latency comparison should remain exact prose. |
| `rttt_review_p1` | 9 | 10 | The mechanism/result synthesis is already covered by four originals. |
| `rttt_review_p2` | 9 | 10 | Missing generalization and latency evidence is a prose boundary. |

Engineer average: **9.25**. Implementation average: **9.81**. Combined average: **9.53**. Minimum: engineer **9**, implementation **9**.

All desktop figures are complete originals. Mobile crops use paper-defined training/inference, TBPTT/fast-weight, task-group, and x-range structures rather than arbitrary slices; axes, legends, and source pixels remain identifiable. Provenance and modification disclosure are complete. Natural aspect ratios hold and focused checks show no clipping or internal/page scrollbars. HTML/CSS-led share: **0/4 (0%)**.
