# Blind visual QA — Attention Is All You Need — revision 13

Scope: current fixture, revision-13 manifest, current assets, renderer/CSS, and desktop/mobile rendering only. Scores are independent 1–10 judgments; no acceptance threshold was supplied.

| Paragraph | Engineer decision/proposal | Implementation | Paragraph-specific evidence |
|---|---:|---:|---|
| `attn_why_p1` | 9 | 10 | The sequential recurrence versus long convolutional paths are already clear; a diagram would collapse into a forbidden stock chain. |
| `attn_why_p2` | 9 | 10 | The historical distinction—attention supplement versus replacement—is one bounded contrast and is best left in prose. |
| `attn_change_p1` | 9 | 10 | Encoder self-attention, masked decoder attention, and cross-attention are fully shown later in Figure 1; no duplicate visual is warranted. |
| `attn_change_p2` | 9 | 10 | The constant path claim plus the list of non-attention components is legible prose; a repeated component list would be forbidden. |
| `attn_mechanism_p1` | 9 | 10 | Embeddings, positions, six layers, residuals, and normalization are visible in the later complete architecture figure; no extra placement is needed. |
| `attn_mechanism_p2` | 10 | 10 | Figure 2 directly supplies Q/K/V, MatMul, Scale, Mask, Softmax, parallel heads, concat, and projection; both complete paper-defined panels remain intact on mobile. |
| `attn_mechanism_p3` | 10 | 9 | Figure 1 directly answers the decoder dependency question. Desktop is the complete original; mobile uses meaningful encoder/decoder crops with overlap, though the split makes cross-attention continuity less immediate. |
| `attn_example_p1` | 9 | 10 | The worked mask-and-scaling example is linear prose and does not need a second architecture placement. |
| `attn_example_p2` | 9 | 10 | Training-parallel versus generation-sequential behavior is explicit; another flow would become a generic chain. |
| `attn_evidence_p1` | 9 | 10 | Dataset sizes, hardware, steps, and duration are an item-plus-metric list; prose correctly avoids a forbidden metric panel. |
| `attn_evidence_p2` | 9 | 10 | The key work is source-version conflict attribution, not spatial comparison; prose preserves exact values and versions. |
| `attn_evidence_p3` | 9 | 10 | Ablation and parsing figures are heterogeneous metrics; no shared visual frame is justified. |
| `attn_limitations_p1` | 9 | 10 | The asymptotic condition and restricted-attention caveat are concise; a single complexity chain adds no reasoning value. |
| `attn_limitations_p2` | 9 | 10 | Scope limits and missing uncertainty are categorical boundaries, not a visualizable relation. |
| `attn_limitations_p3` | 9 | 10 | Extrapolation and causal-interpretation caveats are correctly left as prose. |
| `attn_review_p1` | 9 | 10 | The synthesis reuses relationships already established by the two source figures; repetition would not add a new job. |
| `attn_review_p2` | 9 | 10 | Training parallelism versus autoregressive generation is a compact qualification, not a new diagram. |
| `attn_review_p3` | 9 | 10 | Version and reuse-license boundaries are provenance prose, not an evidence graphic. |

Engineer average: **9.11**. Implementation average: **9.94**. Combined average: **9.53**. Minimum paragraph scores: engineer **9**, implementation **9**.

Checks: desktop uses complete originals; mobile crops are paper-defined components, not arbitrary slices; provenance, locator, attribution, license, fallback, and modification disclosure are present. Images preserve natural aspect ratio. No forbidden stock structure, clipping, internal scrollbar, or page-level horizontal overflow was observed. Source assets account for both implemented visuals; HTML/CSS-led share is **0/2 (0%)**.
