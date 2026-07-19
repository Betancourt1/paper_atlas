# Blind visual QA — RoboTTT

| Paragraph | Engineer | Implemented | Rationale |
|---|---:|---:|---|
| `rttt_why_p1` | 9 | 10 | Motivation is clear in prose. |
| `rttt_why_p2` | 9 | 10 | Cost/state trade-off needs no stock comparison. |
| `rttt_change_p1` | 9 | 10 | Later original avoids repetition. |
| `rttt_change_p2` | 9 | 10 | Later originals cover the distinct mechanisms. |
| `rttt_mechanism_p1` | 9 | 10 | Later Figure 2 avoids repetition. |
| `rttt_mechanism_p2` | 10 | 9 | Figure 2 directly shows architecture and inference updates. |
| `rttt_mechanism_p3` | 10 | 8 | Figure 4 directly shows detach/carry behavior, but its 475 px width does not overflow on desktop while the UI still instructs scrolling; the desktop test fails on that assumption. |
| `rttt_example_p1` | 9 | 10 | Worked setup is clear in prose. |
| `rttt_example_p2` | 9 | 10 | Result qualification is clearer in prose. |
| `rttt_evidence_p1` | 10 | 9 | Figure 7 directly shows task completion across baselines. |
| `rttt_evidence_p2` | 10 | 9 | Figure 8 directly shows context scaling. |
| `rttt_evidence_p3` | 9 | 10 | Mixed perturbation and DAgger evidence should not share a chart. |
| `rttt_limitations_p1` | 9 | 10 | Boundary is clearer in prose. |
| `rttt_limitations_p2` | 9 | 10 | Boundary is clearer in prose. |
| `rttt_review_p1` | 9 | 10 | Existing figures avoid repetition. |
| `rttt_review_p2` | 9 | 10 | Research boundary belongs in prose. |

- Averages: engineer **9.25**, implemented **9.69**. Minimum paragraph score: **8**.
- Findings: all four originals directly match and carry locator, attribution, license, modifications, alt text, and fallback. Mobile behavior passes. Desktop source-asset automation fails because Figure 4 correctly fits without overflow while the test and visible hint require scrolling. HTML/CSS-led share: **0/4 (0%)**.

