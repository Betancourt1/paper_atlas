# Blind VISUAL_QA — Pretraining Data Can Be Poisoned through Computational Propaganda — round 6

## Scope and method

This is an independent, blind review of revision 6 using only the permitted manifest, explainer fixture, current relevant renderer/schema/checker/tests, directly linked evidence locators, and the rendered local route. No prior QA report, coordinator policy, publication threshold, or paper-explainer workflow material was consulted.

Rendered verification: `pnpm --filter @paper-atlas/web test:visual` completed with 4/4 Playwright tests passing across 1440×1000 desktop Chromium and 390×844 mobile Chromium. All 1 selected figure was also inspected directly at both sizes. Mobile SVGs use the declared contained 680 px horizontal canvas; the default left-edge view is not document clipping, and the scroller is keyboard-focusable.

## Aggregates

| Measure | Result |
| --- | ---: |
| Paragraphs scored twice | 16 |
| DVE minimum | 9/10 |
| DVE mean | 9.06/10 |
| DVE holistic aggregate | 9/10 |
| Implementer minimum | 9/10 |
| Implementer mean | 9.94/10 |
| Implementer holistic aggregate | 9/10 |
| Proposed prohibited treatments | 0/3 |
| Selected prohibited outputs | 0/1 |
| Prose-only decisions | 15/16 |

The holistic scores are independent judgments, not rounded paragraph means and not a publication recommendation.

## Medium ratios

- Proposed treatments: 0/3 HTML/CSS-led (0.00%). Declared primary media are SVG, generated asset, or JavaScript; none is declared HTML/CSS-led.
- Selected unique visual IDs: 0/1 HTML/CSS-led (0.00%). Every selected primary medium is SVG.
- Accessible equivalent prose is treated as fallback for the SVG primary medium and is not counted as HTML/CSS-led primary treatment.

## Actual rendered topology audit

| Visual | Placement | Actual topology | Prohibited form | Treatment/evidence check |
| --- | --- | --- | --- | --- |
| `propaganda_visual_halflife_tree` | `propaganda_example_p2` | branching conditional-survival tree with rejection complements | No | HalfLife inclusion changes denominator at every gate |

No proposed treatment or rendered output matches a single interchangeable chain, item-plus-metric list, repeated same-metric cards, or repeated one-axis dot tracks/panels. Local sequential edges occur inside some graphs, but branching, convergence, feedback, shared constraints, or skip dependencies make the elements non-interchangeable.

## Paragraph-level scores

| Paragraph | Decision | DVE | DVE evidence | Implementer | Implementer evidence |
| --- | --- | ---: | --- | ---: | --- |
| `propaganda_why_p1` | NO | 9 | The fixture states “Pretraining corpora contain more web text than people can inspect. That scale creates room for malicious content, b…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_why_p2` | NO | 9 | The fixture states “Earlier demonstrations often targeted known sources or assumed access to the victim's data pipeline. This paper stu…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_change_p1` | NO | 9 | The fixture states “HalfLife replaces the binary question 'can content be posted?' with an end-to-end inclusion model. It asks whether …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_change_p2` | NO | 9 | The fixture states “That decomposition can reject superficially plausible vectors. In the tested DOM-based crawl path, programmatic adv…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_mechanism_p1` | NO | 9 | The fixture states “HalfLife defines three gates. S1 measures whether a page is injectable through a public discussion interface. S2 me…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_mechanism_p2` | NO | 9 | The fixture states “The paper estimates the conditional probability at each gate using sampled crawl data and sandboxed replacements, t…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_mechanism_p3` | NO | 9 | The fixture states “Corpus inclusion is still only an intermediate outcome. The authors separately train models with controlled poison …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_example_p1` | NO | 9 | The fixture states “Start with a page identified as having a comment interface. In a sandboxed copy, the researchers replace an existin…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_example_p2` | YES | 10 | The paragraph has three changing denominators, rejection branches, and an unresolved provenance discrepancy; the tree, mosaic, and sensitivity surface are warranted quantitative structures. | 9 | The rendered SVG shows all three conditional splits, rejected complements, 3.4%, 71.9%, 5.5%, and the separate 0.13% versus 0.15% discrepancy note. It is a branching probability structure, not an item/value list. |
| `propaganda_evidence_p1` | NO | 9 | The fixture states “The inclusion analysis scans 181,857 pages from 200 WARC files in Common Crawl CC-MAIN-2025-51. Comment signatures …” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_evidence_p2` | NO | 9 | The fixture states “For model effects, the authors pretrain OLMo-3-like models from 65M to 1.3B parameters with controlled poison token…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_evidence_p3` | NO | 9 | The fixture states “Clean supervised fine-tuning reduces the measured effect: at 0.1% poison, post-SFT shifts range from 0.9 to 7.4 poi…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_limitations_p1` | NO | 9 | The fixture states “Common Crawl is a proxy for production collection, and the tested curation path is one open Dolma 3-style pipeline.…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_limitations_p2` | NO | 9 | The fixture states “The authors avoid live injection and validate the vector in sandboxes. The behavioral experiments use synthetic ent…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_review_p1` | NO | 9 | The fixture states “The paper supports treating third-party page fragments as a real data-provenance concern. Its strongest contributio…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `propaganda_review_p2` | NO | 9 | The fixture states “The phrase 'can be poisoned at scale' should remain bounded by the threat model. Inclusion is estimated from a samp…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |

## Evidence-fidelity notes

- `propaganda_visual_halflife_tree`: Comment-platform signatures were detected on 3.4% of 181,857 sampled Common Crawl pages. In sandboxed replacements, 71.9% of injected comments survived plaintext extraction. The combined tested Dolma 3-style curation path retained 5.5% of captured injected-comment documents. Section 4.4 and the rounded product of the reported stages give an approximately 0.13% document-level inclusion estimate, while the v1 Introduction states 0.15%; the paper does not reconcile the difference. Source locators: propaganda_source_threat: Pages 1–3, Sections 1–2.2; Introduction page 2 states a 0.15% inclusion probability propaganda_source_inclusion: Pages 4–6, Sections 4.1–4.6, Figures 1–2; Section 4.4 page 5 reports 0.13%, consistent with the rounded 3.4% × 71.9% × 5.5% stage product

The visible figure captions preserve the fixture interpretations and limitations, link to the cited claims and exact source locators, and provide equivalent text. No rendered mark was treated as a measured magnitude unless the fixture explicitly supplies that value.

## Findings

- Mobile figures intentionally require horizontal exploration. The direct captures show only the left portion at the initial scroll position, but Playwright verifies a 680 px SVG inside the viewport-contained, focusable scroller and no document-level horizontal overflow.
- Each SVG has a unique title and description, visible interpretation, visible limitation, visible evidence links, and equivalent fallback prose.
- All 15 NO paragraphs remain prose-only in the rendered route; no extra visual was inserted.
- This report makes no pass/fail recommendation against any hidden acceptance threshold.
