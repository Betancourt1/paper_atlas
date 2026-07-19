# VISUAL_QA — Computational Propaganda

Independent review of `VISUAL_MANIFEST_COMPUTATIONAL_PROPAGANDA.md`, `computational-propaganda.json`, and the visual implementation in `0c7c6d3`. All 16 prose paragraph IDs are scored. `NO` is evaluated as an editorial decision.

## Aggregate scores

- `data_visualization_engineer`: **8/10**
- `visual_implementer`: **7/10**
- Engineer distribution: 8×5, 9×11
- Implementer distribution: 4×1, 6×1, 7×1, 8×3, 9×4, 10×6

The engineer correctly identifies the paper's conditional denominators and the separation between corpus inclusion and model influence. The main weakness is that formulaic treatment sets and very broad shared scopes treat one purpose-built visual as if it implemented several different paragraph-specific treatment-A topologies. The implementation is source-bounded and accessible, but two shared-scope claims are not actually represented and the HalfLife figure is placed before three paragraphs it claims to serve.

Rendered verification: the committed desktop and mobile Playwright projects visited this page, confirmed paragraph-contained figures, evidence and limitations, at least three visual forms, and no document-level horizontal overflow. The in-app browser was unavailable, so paper-specific visual screenshots could not be independently inspected; responsive scores use the rendered checks, DOM, and CSS. This limitation is not publication approval.

## Paragraph scores

| Paragraph | Decision / delivered visual | Engineer | Implementer | Concrete evidence and actionable finding |
|---|---|---:|---:|---|
| `propaganda_why_p1` | NO / prose only | 9 | 10 | The crawl, extraction, and curation caveats bound the threat in plain language; a visual here would prematurely imply a measured pipeline. No figure is attached. |
| `propaganda_why_p2` | NO / prose only | 9 | 10 | The threat-model exclusions are a list of access boundaries, not a relationship that needs reconstruction. Prose-only is preserved. |
| `propaganda_change_p1` | YES / shared `propaganda_visual_comments_vs_ads` after `propaganda_change_p2` | 8 | 4 | The move from posting access to three-stage inclusion is visual-worthy, but the delivered two-lane comments-versus-ads comparison does not encode the three questions named in this paragraph or treatment A. It serves the next paragraph only. Deliver the end-to-end inclusion relation here or remove this paragraph from the shared scope. |
| `propaganda_change_p2` | YES / shared `propaganda_visual_comments_vs_ads` after this paragraph | 8 | 9 | The contrast between 71.9% sandboxed comment survival and absent ad plaintext directly answers why visible placement is insufficient. The lanes, conditions, limitations, and fallback are precise; record that the parallel comparison replaces the manifest's treatment-A relation graph. |
| `propaganda_mechanism_p1` | YES / shared `propaganda_visual_halflife_flow` after `propaganda_mechanism_p3` | 9 | 9 | S1, S2, and S3 form an ordered conditional mechanism. The operation diagram preserves every gate and denominator, including the curation components and non-live-attack limitation. |
| `propaganda_mechanism_p2` | YES / shared `propaganda_visual_halflife_flow` after `propaganda_mechanism_p3` | 9 | 9 | The visual explicitly distinguishes 3.4% page prevalence, 71.9% simulated extraction survival, and 5.5% captured-document curation survival before the product. This directly addresses the paragraph's denominator warning. |
| `propaganda_mechanism_p3` | YES / shared `propaganda_visual_halflife_flow` after this paragraph | 8 | 6 | The paragraph's central relationship is the boundary between estimated corpus inclusion and a separate controlled model-influence experiment. The figure ends at inclusion and only states in limitations that it does not establish a live attack; it does not show the second experiment. Add the declared boundary or narrow the paragraph scope. |
| `propaganda_example_p1` | YES / shared `propaganda_visual_halflife_flow` placed before this paragraph | 8 | 7 | The figure includes the 71.9% extraction stage and its sandbox denominator, but omits the 37.5-word replacement-comment setup and appears before the worked example. It supports the value but does not implement the full example state path. |
| `propaganda_example_p2` | YES / shared `propaganda_visual_halflife_flow` placed before this paragraph | 9 | 8 | All three stage values, the rounded 0.13% product, the unreconciled 0.15%, and the non-live boundary are present. Placement before the paragraph weakens adjacency, and the generic operation list does not visually distinguish multiplication from ordinary sequence strongly enough. |
| `propaganda_evidence_p1` | YES / shared `propaganda_visual_halflife_flow` placed before this paragraph | 9 | 8 | The figure preserves 181,857 pages, 3.4%, 71.9%, 5.5%, 0.13%, and 0.15% with explicit denominators. It is source-faithful, but the report's claim of placement after `propaganda_mechanism_p3` means the evidence paragraph reaches backward across a section boundary. Place the figure after the evidence paragraph or declare a forward reference in prose. |
| `propaganda_evidence_p2` | YES / shared `propaganda_visual_model_effects` after `propaganda_evidence_p3` | 8 | 8 | The base-model range of 18.6–20.7 points at 0.1% poison is worth comparing, and the result constellation preserves it. Range endpoints are rendered as separate numbered results rather than an interval, which can imply independent conditions; use a range mark or tighter paired grouping. |
| `propaganda_evidence_p3` | YES / shared `propaganda_visual_model_effects` after this paragraph | 9 | 9 | The visual distinguishes base, post-SFT, and no-label post-SFT values, warns that endpoints are not matched pairs, and avoids claiming live poisoning. Its semantic list and fallback make the numbers available without visual styling. |
| `propaganda_limitations_p1` | NO / prose only | 9 | 10 | Crawler and pipeline generalizability limits are explicit and heterogeneous; a diagram would over-systematize them. No figure is attached. |
| `propaganda_limitations_p2` | NO / prose only | 9 | 10 | Sandbox-only validation, synthetic preference tasks, model scale, and unestablished deployment claims read best as prose. The implementation does not add a misleading summary graphic. |
| `propaganda_review_p1` | NO / prose only | 9 | 10 | This is a bounded methodological judgment already supported by the earlier pipeline visual. No duplicate visual is attached. |
| `propaganda_review_p2` | NO / prose only | 9 | 10 | The paragraph synthesizes threat-model boundaries and the unresolved 0.13/0.15 discrepancy; repetition would add no new encoding. Prose-only is faithful. |

## Cross-paper findings for this paper

1. `propaganda_change_p1` is marked implemented by the comments-versus-ads figure, but that figure does not show the paragraph's three-stage inclusion model. This is a substantive manifest-to-implementation mismatch.
2. The six-paragraph HalfLife scope is too broad for one placement. The visual appears after `propaganda_mechanism_p3` but claims to serve later worked-example and evidence paragraphs; those paragraphs should not need to look backward across sections.
3. The HalfLife operation list contains the correct values and warnings, but the renderer uses one identical vertical marker for stages, the calculated product, and the conflicting introduction value. Visually distinguish measured conditional gates, derived product, and disputed source value without relying on color alone.
4. Accessibility and fallback coverage are strong: static semantic structures, alt text, visible limitations and interpretations, claim/source links, and equivalent text are present, and no meaning depends on motion.

This report scores the candidate only and does not approve publication.
