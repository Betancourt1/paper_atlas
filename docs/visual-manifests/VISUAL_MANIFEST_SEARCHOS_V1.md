# Visual manifest — SearchOS-V1: Towards Robust Open-Domain Information-Seeking Agent Collaboration

- Paper ID: `paper_searchos_v1`
- Exact paper version: `v1`
- Explainer fixture: `packages/test-fixtures/explainers/searchos-v1.json`
- Manifest revision: `14`
- Engineer status: `COMPLETE`
- Implementer status: `COMPLETE`
- Paragraph coverage: `17 / 17` prose paragraphs
- Paragraph-ID derivation: `{block.id}_p{1-based index in block.paragraphs}`; each fixture paragraph appears exactly once.
- Evidence sources:
  - `sos_formulation_source` — SearchOS-V1 — relational formulation, SOCM, and orchestration; Sections 2–3.2, Equations 1–10, Figure 2, PDF pages 3–6; the arXiv v1 record identifies the paper as CC BY 4.0
  - `sos_middleware_source` — SearchOS-V1 — middleware and hierarchical skills; Sections 3.3–3.4, Equations 11–18, Figures 3–4, PDF pages 7–9
  - `sos_results_source` — SearchOS-V1 — benchmark protocol and main results; Section 4, Table 2, PDF pages 9–11
  - `sos_ablations_source` — SearchOS-V1 — scheduling, middleware, and skill analyses; Section 5, Tables 4–6 and Figures 5–6, PDF pages 12–13
  - `sos_scope_source` — SearchOS-V1 — declared scope and future work; Scope note in Section 3.4 and Section 7, PDF pages 9 and 15

Revision 11 corrects source-pixel semantics, removes a mismatched source figure, requires conditional inspection instructions, and returns the PPA hierarchy adaptation for visible two-depth invariance rework.

## `sos_why_p1`

- Location: `sos_why`, paragraph 1
- Text anchor: "A long-horizon research task requires more than issuing good queries. The system must remember"
- Claims and sources: `sos_core`, `sos_socm`, `sos_formulation_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: Entity/attribute completion, missing cells, and provenance motivate the system but do not form a separate dependency or quantitative structure. Figure 2 later supplies the actual schema-to-evidence architecture, so another visual here would duplicate that topology rather than reduce a paragraph-specific reconstruction.
- Explanatory job: Motivation and problem framing.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_why_p2`

- Location: `sos_why`, paragraph 2
- Text anchor: "Conventional agents often keep this state in growing conversation histories. As evidence becomes buried,"
- Claims and sources: `sos_core`, `sos_socm`, `sos_formulation_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: Buried evidence, duplicate work, and idle worker slots are three qualitative failure modes with no reported shared scale, transition data, or causal ordering. Rendering them would produce forbidden repeated cards or an item list; prose preserves their distinct meanings without implying comparability.
- Explanatory job: Motivation and problem framing.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_change_p1`

- Location: `sos_change`, paragraph 1
- Text anchor: "SearchOS converts a natural-language request into one or more related tables. Rows represent entities,"
- Claims and sources: `sos_schema`, `sos_socm`, `sos_formulation_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: Rows, attribute columns, citation cells, and missing values are already visible inside Figure 2 at the mechanism placement. This paragraph adds no new relation beyond defining those table semantics, so a second schema drawing would repeat the same evidence-bearing structure.
- Explanatory job: Method distinction and scope.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_change_p2`

- Location: `sos_change`, paragraph 2
- Text anchor: "The system then separates global coordination from local search. An orchestrator owns schema and"
- Claims and sources: `sos_schema`, `sos_socm`, `sos_formulation_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: Global orchestration versus local search is completely encoded by Figure 2 through the orchestrator and agent regions. The paragraph only names that responsibility boundary; another diagram would duplicate the same modules without adding a new dependency, state change, or failure condition.
- Explanatory job: Method distinction and scope.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_mechanism_p1`

- Location: `sos_mechanism`, paragraph 1
- Text anchor: "Search-Oriented Context Management contains four linked stores. Frontier Task tracks dependency-aware work. The Evidence"
- Claims and sources: `sos_socm`, `sos_middleware`, `sos_scheduler`, `sos_formulation_source`, `sos_middleware_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: Frontier Tasks, Evidence Graph, Coverage Map, and Failure Memory appear together in the complete Search-Oriented Context Management crop used by the next paragraph. Re-rendering the four stores here would reduce them to a forbidden component inventory and obscure their actual connections in the original architecture.
- Explanatory job: Shared-state architecture and provenance topology.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — the retained source placement already establishes the relationship.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_mechanism_p2`

- Location: `sos_mechanism`, paragraph 2
- Text anchor: "Before a model call, context middleware projects only the role-relevant portion of that state"
- Claims and sources: `sos_socm`, `sos_middleware`, `sos_scheduler`, `sos_formulation_source`, `sos_middleware_source`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — SearchOS relational state, memory, and role topology; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 2, PDF page 4, `sos_formulation_source`
- License and reuse status: `PERMITTED` — The paper's arXiv record identifies CC BY 4.0; preserve the authors, original caption, locator, and license link.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Evidence acceptance gate and atomic state mutation.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 2, PDF page 4, `sos_formulation_source`. It preserves the original source asset and may annotate only SearchOS relational state, memory, and role topology; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: At widths up to 640 px, replace the failed composite with exactly three clean, complete source-pixel crops from the 2548 × 1648 original Figure 2: (1) Context Middleware box, bounds x=46..637 and y=884..1159 (592 × 276 px); (2) complete Search-Oriented Context Management region, bounds x=18..1835 and y=1167..1639 (1818 × 473 px); (3) complete Search Agent Skills region, bounds x=1928..2523 and y=817..1618 (596 × 802 px). Stack them in that order as independent full-width blocks. Modification record: crop and vertical assembly only; exclude the middleware title, Sensor and Evidence Extraction neighbors, Toolset, dashed column boundary, adjacent modules, and all severed connector fragments. Do not redraw, relabel, resample, or include partial neighbors. Retain crop-specific alt text, max-width: 100%, height: auto, and no motion or scrollbar.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/searchos-v1/figure-2.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/searchos-v1/figure-2.png", label: "Original paper figure" }
  focus["Reading focus: SearchOS relational state, memory, and role topology"]
  locator["Source locator: Figure 2, PDF page 4, sos_formulation_source"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/searchos-v1/figure-2.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("SearchOS relational state, memory, and role topology")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 2, PDF page 4, `sos_formulation_source`. It preserves the original source asset and may annotate only SearchOS relational state, memory, and role topology; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: At widths up to 640 px, replace the failed composite with exactly three clean, complete source-pixel crops from the 2548 × 1648 original Figure 2: (1) Context Middleware box, bounds x=46..637 and y=884..1159 (592 × 276 px); (2) complete Search-Oriented Context Management region, bounds x=18..1835 and y=1167..1639 (1818 × 473 px); (3) complete Search Agent Skills region, bounds x=1928..2523 and y=817..1618 (596 × 802 px). Stack them in that order as independent full-width blocks. Modification record: crop and vertical assembly only; exclude the middleware title, Sensor and Evidence Extraction neighbors, Toolset, dashed column boundary, adjacent modules, and all severed connector fragments. Do not redraw, relabel, resample, or include partial neighbors. Retain crop-specific alt text, max-width: 100%, height: auto, and no motion or scrollbar.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/searchos-v1/figure-2.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/searchos-v1/figure-2.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/searchos-v1/figure-2.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/searchos-v1/figure-2.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/searchos-v1/figure-2.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/searchos-v1/figure-2.png", label: "Complete original context" }
  locator["Detail remains located within Figure 2, PDF page 4, sos_formulation_source"]
  source --- detail
  source --- context
  detail --- locator
  context --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/searchos-v1/figure-2.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("SearchOS relational state, memory, and role topology")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 2, PDF page 4, `sos_formulation_source`. It preserves the original source asset and may annotate only SearchOS relational state, memory, and role topology; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: At widths up to 640 px, replace the failed composite with exactly three clean, complete source-pixel crops from the 2548 × 1648 original Figure 2: (1) Context Middleware box, bounds x=46..637 and y=884..1159 (592 × 276 px); (2) complete Search-Oriented Context Management region, bounds x=18..1835 and y=1167..1639 (1818 × 473 px); (3) complete Search Agent Skills region, bounds x=1928..2523 and y=817..1618 (596 × 802 px). Stack them in that order as independent full-width blocks. Modification record: crop and vertical assembly only; exclude the middleware title, Sensor and Evidence Extraction neighbors, Toolset, dashed column boundary, adjacent modules, and all severed connector fragments. Do not redraw, relabel, resample, or include partial neighbors. Retain crop-specific alt text, max-width: 100%, height: auto, and no motion or scrollbar.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/searchos-v1/figure-2.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/searchos-v1/figure-2.png", label: "Original paper figure" }
  callout1["1: locate the evidence-bearing marks"]
  callout2["2: follow the paper-specific relation"]
  callout3["3: retain the source limitation"]
  source --- callout1
  source --- callout2
  source --- callout3
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/searchos-v1/figure-2.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("SearchOS relational state, memory, and role topology")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: Treatment A is implemented with the exact revision-14 source-pixel bounds: the complete Context Middleware box, complete Search-Oriented Context Management region, and complete Search Agent Skills region are independent mobile blocks; rejected revision-13 composites were removed.
- Delivery medium: `source asset`
- Visual ID and placement: `visual_searchos_source_figure_2` — rendered immediately after `sos_mechanism_p2`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/searchos-v1.json`, `apps/web/public/paper-assets/searchos/figure-2.png`; `apps/web/public/paper-assets/searchos/mobile/`; `apps/web/app/papers/[id]/explainer-visual.tsx`; `apps/web/app/globals.css`; `apps/web/tests/paper-page.spec.ts`
- Accessibility and fallback verification: `VERIFIED` — each clean crop has block-specific alt text, exact source-pixel bounds and modifications, and unchanged locator, attribution, license, fallback, and complete desktop original.
- Desktop and mobile verification: `VERIFIED` — source inspection and Playwright at 1440 × 1000 and 390 × 844 confirm the three mobile blocks are complete, fragment-free, contained, and scrollbar-free while desktop retains full Figure 2.
- Evidence deviations: `NONE` — rejected revision-13 assets were removed; the complete desktop original was not altered.

## `sos_mechanism_p3`

- Location: `sos_mechanism`, paragraph 3
- Text anchor: "Sensor middleware measures changes in grounded coverage and evidence count, along with iteration, search,"
- Claims and sources: `sos_socm`, `sos_middleware`, `sos_scheduler`, `sos_formulation_source`, `sos_middleware_source`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — sensor-policy intervention evidence; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 5, PDF pages 12-13, `sos_ablations_source`
- License and reuse status: `PERMITTED` — The paper's arXiv record identifies CC BY 4.0; preserve the authors, original caption, locator, and license link.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Coverage-aware controller state machine and asynchronous scheduling.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 5, PDF pages 12-13, `sos_ablations_source`. It preserves the original source asset and may annotate only sensor-policy intervention evidence; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: At widths up to 640 px, separate original Figure 5 into its three paper-defined intervention panels and stack them vertically: (a) early intervention ws_zh_034, (b) mid-run intervention ws_zh_014, and (c) late intervention ws_en_015. Each panel crop must include both Coverage and Total entities subplots, its detected-gap annotation, cumulative-tool-call axis, and intervention line. Modification record: three intact original-pixel panel crops following the papers panel boundaries; no arbitrary slicing, redraw, altered scale, or combined axes. Use max-width: 100%, height: auto, panel-specific alt text, and no motion or scrollbar.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/searchos-v1/figure-5.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/searchos-v1/figure-5.png", label: "Original paper figure" }
  focus["Reading focus: sensor-policy intervention evidence"]
  locator["Source locator: Figure 5, PDF pages 12-13, sos_ablations_source"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/searchos-v1/figure-5.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("sensor-policy intervention evidence")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 5, PDF pages 12-13, `sos_ablations_source`. It preserves the original source asset and may annotate only sensor-policy intervention evidence; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: At widths up to 640 px, separate original Figure 5 into its three paper-defined intervention panels and stack them vertically: (a) early intervention ws_zh_034, (b) mid-run intervention ws_zh_014, and (c) late intervention ws_en_015. Each panel crop must include both Coverage and Total entities subplots, its detected-gap annotation, cumulative-tool-call axis, and intervention line. Modification record: three intact original-pixel panel crops following the papers panel boundaries; no arbitrary slicing, redraw, altered scale, or combined axes. Use max-width: 100%, height: auto, panel-specific alt text, and no motion or scrollbar.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/searchos-v1/figure-5.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/searchos-v1/figure-5.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/searchos-v1/figure-5.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/searchos-v1/figure-5.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/searchos-v1/figure-5.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/searchos-v1/figure-5.png", label: "Complete original context" }
  locator["Detail remains located within Figure 5, PDF pages 12-13, sos_ablations_source"]
  source --- detail
  source --- context
  detail --- locator
  context --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/searchos-v1/figure-5.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("sensor-policy intervention evidence")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 5, PDF pages 12-13, `sos_ablations_source`. It preserves the original source asset and may annotate only sensor-policy intervention evidence; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: At widths up to 640 px, separate original Figure 5 into its three paper-defined intervention panels and stack them vertically: (a) early intervention ws_zh_034, (b) mid-run intervention ws_zh_014, and (c) late intervention ws_en_015. Each panel crop must include both Coverage and Total entities subplots, its detected-gap annotation, cumulative-tool-call axis, and intervention line. Modification record: three intact original-pixel panel crops following the papers panel boundaries; no arbitrary slicing, redraw, altered scale, or combined axes. Use max-width: 100%, height: auto, panel-specific alt text, and no motion or scrollbar.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/searchos-v1/figure-5.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/searchos-v1/figure-5.png", label: "Original paper figure" }
  callout1["1: locate the evidence-bearing marks"]
  callout2["2: follow the paper-specific relation"]
  callout3["3: retain the source limitation"]
  source --- callout1
  source --- callout2
  source --- callout3
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/searchos-v1/figure-5.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("sensor-policy intervention evidence")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: The selected evidence-correct treatment is implemented with its revision-13 semantic crop or narrow SVG reflow, preserving relationships, source fidelity, provenance, and scrollbar-free containment.
- Delivery medium: `source asset`
- Visual ID and placement: `visual_searchos_source_figures_2_5` — rendered immediately after `sos_mechanism_p3`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/searchos-v1.json`, `apps/web/public/paper-assets/searchos/figure-5.png`; `apps/web/public/paper-assets/searchos/mobile/`; `apps/web/app/papers/[id]/explainer-visual.tsx`; `apps/web/app/globals.css`; `apps/web/tests/paper-page.spec.ts`
- Accessibility and fallback verification: `VERIFIED` — paragraph-specific mobile crops or SVG reflows retain the selected labels and relationships; source modifications, paths, panel-specific alt text, semantic fallback, locator, attribution, and license remain explicit.
- Desktop and mobile verification: `VERIFIED` — Playwright at 1440 × 1000 and 390 × 844 confirms the complete desktop visual and selected mobile crops or reflow fit without internal or page-level overflow; mobile SVG labels render at 15 CSS px or larger.
- Evidence deviations: `NONE`

## `sos_example_p1`

- Location: `sos_example`, paragraph 1
- Text anchor: "Suppose a comparison request has a known company row but no verified value for"
- Claims and sources: `sos_schema`, `sos_middleware`, `sos_scheduler`, `sos_skills`, `sos_formulation_source`, `sos_middleware_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The missing-cell example instantiates the schema, orchestrator, and middleware relations already visible in Figure 2. Its remaining steps are a single ordered dispatch walkthrough, so a standalone rendering would be a forbidden chain rather than a new explanatory topology.
- Explanatory job: Worked example.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_example_p2`

- Location: `sos_example`, paragraph 2
- Text anchor: "A page visit alone does not fill the cell. Evidence middleware must extract a"
- Claims and sources: `sos_schema`, `sos_middleware`, `sos_scheduler`, `sos_skills`, `sos_formulation_source`, `sos_middleware_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: Evidence acceptance, atomic cell update, and branch stopping apply the architecture in Figure 2 and the intervention behavior in Figure 5. The paragraph introduces no additional branching beyond that covered evidence; another flow would merely serialize the prose into a forbidden chain.
- Explanatory job: Worked example.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_evidence_p1`

- Location: `sos_evidence`, paragraph 1
- Text anchor: "On WideSearch, SearchOS reports 80.3 item F1 and 56.5 row F1, compared with 76.0"
- Claims and sources: `sos_main_results`, `sos_schedule_ablation`, `sos_skill_ablation`, `sos_results_source`, `sos_ablations_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: Item, row, set, table, and list F1 are different aggregations across two benchmarks, and the strongest comparator changes by metric. A normalized chart would erase those identities, while separate tracks would be forbidden repeated panels; absent run variance, prose is the least misleading complete account.
- Explanatory job: Evaluation evidence.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_evidence_p2`

- Location: `sos_evidence`, paragraph 2
- Text anchor: "A paired scheduling study on 10 WideSearch cases reports that continuous dispatch reduces average"
- Claims and sources: `sos_main_results`, `sos_schedule_ablation`, `sos_skill_ablation`, `sos_results_source`, `sos_ablations_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The scheduling study exposes only two aggregate conditions over ten cases for runtime, utilization, and item F1, with different units and no case-level points or intervals. Normalization would invent a weighting, while parallel value tracks would be a forbidden item-plus-metric display.
- Explanatory job: Evaluation evidence.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_evidence_p3`

- Location: `sos_evidence`, paragraph 3
- Text anchor: "A joint removal of all hierarchical skill layers lowers item F1 from 80.3 to"
- Claims and sources: `sos_main_results`, `sos_schedule_ablation`, `sos_skill_ablation`, `sos_results_source`, `sos_ablations_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The experiment removes all hierarchical skill layers jointly, so the item- and row-F1 changes cannot identify a contribution from any individual layer. A component chart would imply unsupported attribution; two before/after values would otherwise collapse to a forbidden metric display.
- Explanatory job: Evaluation evidence.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_limitations_p1`

- Location: `sos_limitations`, paragraph 1
- Text anchor: "The main evaluation uses GLM-5 for agent roles, Qwen3.5-35B-A3B for evidence extraction, and reports"
- Claims and sources: `sos_citation_truth`, `sos_budget_fairness`, `sos_middleware_causality`, `sos_schema_fit_inference`, `sos_generality`, `sos_middleware_source`, `sos_results_source`, `sos_ablations_source`, `sos_scope_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The GLM-5 and Qwen setup, best-of-three reporting, missing variance, and budget conditions are heterogeneous qualifications on the evaluation protocol. They have no common scale or dependency to reconstruct, and cards would falsely present them as comparable findings.
- Explanatory job: Evidence boundary and limitation.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_limitations_p2`

- Location: `sos_limitations`, paragraph 2
- Text anchor: "A URL and anchored excerpt preserve provenance but do not independently prove that the"
- Claims and sources: `sos_citation_truth`, `sos_budget_fairness`, `sos_middleware_causality`, `sos_schema_fit_inference`, `sos_generality`, `sos_middleware_source`, `sos_results_source`, `sos_ablations_source`, `sos_scope_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: A URL and anchored excerpt preserve provenance but do not establish truth; that is an epistemic boundary, not a process or measured relationship. Visualizing it would imply a verification transition that the paper does not provide, so the qualification must remain explicit prose.
- Explanatory job: Evidence boundary and limitation.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — the retained source placement already establishes the relationship.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_limitations_p3`

- Location: `sos_limitations`, paragraph 3
- Text anchor: "The authors scope V1 to externalized search state and leave large-scale skill synthesis, broader"
- Claims and sources: `sos_citation_truth`, `sos_budget_fairness`, `sos_middleware_causality`, `sos_schema_fit_inference`, `sos_generality`, `sos_middleware_source`, `sos_results_source`, `sos_ablations_source`, `sos_scope_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: Skill synthesis, broader domains, multimodal search, and improved adaptation are independent future-work categories without dates, dependencies, or ordered milestones. A roadmap would invent sequence and a card set would be forbidden, so prose preserves their noncommittal status.
- Explanatory job: Evidence boundary and limitation.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_review_p1`

- Location: `sos_review`, paragraph 1
- Text anchor: "The paper provides bounded engineering evidence for making research state explicit. The schema, evidence"
- Claims and sources: `sos_schedule_ablation`, `sos_skill_ablation`, `sos_explicit_state_interpretation`, `sos_middleware_causality`, `sos_recall_interpretation`, `sos_generality`, `sos_results_source`, `sos_ablations_source`, `sos_scope_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The synthesis combines explicit research state with coverage-aware intervention, both already grounded by Figures 2 and 5. It adds no third mechanism or quantitative relation, so another summary visual would only repeat the two accepted originals.
- Explanatory job: Critical interpretation and claim boundary.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `sos_review_p2`

- Location: `sos_review`, paragraph 2
- Text anchor: "The main benchmark comparison evaluates the complete system, so it cannot assign the overall"
- Claims and sources: `sos_schedule_ablation`, `sos_skill_ablation`, `sos_explicit_state_interpretation`, `sos_middleware_causality`, `sos_recall_interpretation`, `sos_generality`, `sos_results_source`, `sos_ablations_source`, `sos_scope_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The benchmark evaluates the complete system and cannot assign gains to middleware, scheduling, schema planning, or skills individually. Any component-effect diagram or segmented metric view would fabricate causal attribution absent an isolating experiment; prose states that boundary directly.
- Explanatory job: Critical interpretation and claim boundary.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`
