# Blind visual QA — revision 6 collection summary

## Scope and evidence boundary

The audit covers all 134 fixture paragraphs twice across eight papers: 123 `NO` decisions and 11 `YES` decisions/implemented unique visuals. `make e2e` passed 6/6 after local port permission was granted. Desktop- and mobile-Chromium rendered all 11 visuals at exact YES placements and verified figure/SVG presence, title/desc, computed fills/strokes/text/markers, topology-specific hooks, no page overflow, and focusable 680px mobile horizontal scrollers.

## Mechanically auditable totals

| Paper | Paragraphs | Visuals | DVE min | DVE mean | Impl min | Impl mean | Combined mean | Proposed HTML/CSS | Selected HTML/CSS | Prohibited proposal/output |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Attention Is All You Need | 18 | 2 | 9 | 9.0556 | 8 | 9.8333 | 9.4444 | 0/6 | 0/2 | 0/0 |
| Computational Propaganda | 16 | 1 | 9 | 9.0625 | 9 | 9.9375 | 9.5000 | 0/3 | 0/1 | 0/0 |
| Inkling | 19 | 1 | 8 | 8.9474 | 9 | 9.9474 | 9.4474 | 0/3 | 0/1 | 0/0 |
| LLM Evaluators Across Languages | 16 | 1 | 9 | 9.0000 | 9 | 9.9375 | 9.4688 | 0/3 | 0/1 | 0/0 |
| Partition, Prompt, Aggregate | 16 | 1 | 9 | 9.0625 | 9 | 9.9375 | 9.5000 | 0/3 | 0/1 | 0/0 |
| RoboTTT | 16 | 1 | 9 | 9.0625 | 9 | 9.9375 | 9.5000 | 0/3 | 0/1 | 0/0 |
| SearchOS V1 | 17 | 3 | 9 | 9.1176 | 9 | 9.8235 | 9.4706 | 0/9 | 0/3 | 0/0 |
| TRACE | 16 | 1 | 9 | 9.0625 | 9 | 9.9375 | 9.5000 | 0/3 | 0/1 | 0/0 |
| **Collection** | **134** | **11** | **8** | **9.0448** | **8** | **9.9104** | **9.4776** | **0/33 (0%)** | **0/11 (0%)** | **0/0** |

Collection integer holistic aggregates: DVE **9/10**; implementer **10/10**. Exact score sums are DVE 1212/134 and implementer 1328/134. The combined score sum is 2540/268.

## Prohibited-form classification

Across all 33 proposals and all 11 selected/source-rendered SVG topologies:

1. Single interchangeable chain: 0 proposals; 0 outputs.
2. Item plus metric/value list: 0 proposals; 0 outputs.
3. Repeated same-metric cards: 0 proposals; 0 outputs.
4. Repeated one-dimensional dot tracks/panels: 0 proposals; 0 outputs.

The 11 outputs comprise branching/converging dependency fields, decision graphs, conditional trees, weighted factor graphs, control/feedback graphs, and state/conjunction graphs. The TRACE adjacent-state line is materially crossed by skip dependencies and a separate terminal broadcast, so its actual topology is not the prohibited single-chain form. PPA's repeated multiplication branches are terms in one shared normalization/sum/comparator graph, not standalone repeated cards or tracks.

## Collection findings

1. The attention query/key visual under-encodes the eight-head recombination named in its warrant and question; that content appears only as a note.
2. Inkling Treatment B contains internally ambiguous wording about whether a 16×16 occupancy field is complete or a schematic subset.
3. SearchOS sensor-policy Treatment B proposes qualitative regions despite absent numeric boundaries; its caveat reduces but does not remove the risk of an asserted policy surface.
4. The implementation consistently provides SVG title/desc, figure interpretation, limitations, source links, hidden equivalent text, and a focusable mobile horizontal scroller in source.
5. Automated desktop/mobile Chromium rendering verifies clipping/overflow, computed text/color styles, SVG labels, and scroll/focus mechanics; it does not substitute for subjective visual inspection at every scroll position or a manual screen-reader announcement audit.

This report gives independent scores only and makes no pass/fail or publication recommendation.
