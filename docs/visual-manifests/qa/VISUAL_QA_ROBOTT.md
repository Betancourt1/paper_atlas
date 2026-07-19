# Blind visual QA — RoboTTT

Independent revision-12 review. `E` is engineer decision/proposal; `I` is implemented visual quality, both 1–10.

| Paragraph | E | I | Evidence |
|---|---:|---:|---|
| `rttt_why_p1` | 9 | 9 | Long-horizon memory motivation is concrete prose. |
| `rttt_why_p2` | 9 | 9 | Cost-versus-state trade-off is clear without an invented chart. |
| `rttt_change_p1` | 9 | 9 | Fast weights are introduced textually before the original architecture. |
| `rttt_change_p2` | 9 | 9 | SAF and TBPTT distinctions need exact prose. |
| `rttt_mechanism_p1` | 9 | 9 | Current-timestep attention versus cross-timestep TTT is concise. |
| `rttt_mechanism_p2` | 10 | 5 | Original Figure 2 is exactly relevant and faithful, but its wide architecture labels become too small at 390 px. |
| `rttt_mechanism_p3` | 10 | 5 | The supplied original training-sequence figure preserves the TBPTT boundary; mobile annotations are difficult to inspect. |
| `rttt_example_p1` | 9 | 9 | Circuit demonstration setup is sequential prose with no warranted standalone visual. |
| `rttt_example_p2` | 9 | 9 | The conditioned trajectory and 6/10 result remain bounded in text. |
| `rttt_evidence_p1` | 10 | 5 | Original Figure 7 supplies the actual completion comparison and full provenance, but mobile bar labels are small. |
| `rttt_evidence_p2` | 10 | 5 | Original Figure 8 is the relevant scaling result and remains undistorted; its mobile axes/legend are marginal. |
| `rttt_evidence_p3` | 9 | 9 | Recovery comparisons and the GDN caveat are clearer in prose. |
| `rttt_limitations_p1` | 9 | 9 | Backbone, setup, and task-family limits are qualitative. |
| `rttt_limitations_p2` | 9 | 9 | Trial counts and absent latency evidence should not be charted as a result. |
| `rttt_review_p1` | 9 | 9 | Mechanism-to-evidence synthesis is already supported by originals. |
| `rttt_review_p2` | 9 | 9 | Missing backbones, embodiments, uncertainty, and latency remain explicit prose. |

## Render and policy findings

- All four original figures fit completely at 1440×1000 and 390×844 with no scrollbars, page overflow, clipping, or aspect-ratio distortion.
- Source relevance and provenance are strong for every placement; limitations and evidence links are present.
- No custom forbidden stock structure is introduced. HTML/CSS-led primary visuals: 0 of 4 (0%).
- All four mobile figures rely on shrink-to-fit; key labels and relationships are materially harder to read than on desktop.

## Checks

- Focused Playwright visual suite: 6 passed across both required viewport projects.
- Geometry capture: 4/4 containers fit at both sizes; natural image dimensions loaded; page width equals viewport width.
