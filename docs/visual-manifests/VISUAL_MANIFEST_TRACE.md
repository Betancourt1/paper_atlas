# Visual manifest — TRACE: Turn-level Reward Assignment via Credit Estimation for Long-Horizon Agents

- Paper ID: `paper_trace`
- Exact paper version: `v1`
- Explainer fixture: `packages/test-fixtures/explainers/trace.json`
- Manifest revision: `9`
- Engineer status: `COMPLETE`
- Implementer status: `COMPLETE`
- Paragraph coverage: `16 / 16` prose paragraphs
- Paragraph-ID derivation: `{block.id}_p{1-based index in block.paragraphs}`; each fixture paragraph appears exactly once.
- Evidence sources:
  - `trace_source_intro` — TRACE v1 introduction; Pages 1–3, Abstract and Section 1
  - `trace_source_method` — TRACE v1 method; Sections 3.1–3.3, Equations 4–12, Algorithm 1
  - `trace_source_experiments` — TRACE v1 experimental setup; Pages 7–8, Section 4.1
  - `trace_source_results` — TRACE v1 results and ablations; Pages 8–10, Sections 4.2–4.4, Tables 1–2, Figures 3–5
  - `trace_source_limitations` — TRACE v1 limitations; Page 12, Section 6

Revision 9 requires intrinsic-width inspection for every reused original on desktop and mobile. Source figures remain unmodified inside keyboard-accessible, figure-local horizontal viewports; multi-image sets may not be compressed into equal-width columns.

## `trace_why_p1`

- Location: `trace_why`, paragraph 1
- Text anchor: "A search agent may make dozens of dependent decisions before answering. A failed trajectory"
- Claims and sources: `trace_claim_outcome_blind`, `trace_claim_credit`, `trace_source_intro`, `trace_source_method`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — turn-level credit assignment problem and competing reward scopes; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 1, PDF page 2, `trace_source_intro`
- License and reuse status: `PERMITTED` — The paper's arXiv record identifies CC BY 4.0; preserve the authors, original caption, locator, and license link.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Motivation and problem framing.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 1, PDF page 2, `trace_source_intro`. It preserves the original source asset and may annotate only turn-level credit assignment problem and competing reward scopes; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figure-1.png", label: "Original paper figure" }
  focus["Reading focus: turn-level credit assignment problem and competing reward scopes"]
  locator["Source locator: Figure 1, PDF page 2, trace_source_intro"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/trace/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("turn-level credit assignment problem and competing reward scopes")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 1, PDF page 2, `trace_source_intro`. It preserves the original source asset and may annotate only turn-level credit assignment problem and competing reward scopes; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/trace/figure-1.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figure-1.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/trace/figure-1.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/trace/figure-1.png", label: "Complete original context" }
  locator["Detail remains located within Figure 1, PDF page 2, trace_source_intro"]
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

source = plt.imread(Path("apps/web/public/paper-assets/trace/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("turn-level credit assignment problem and competing reward scopes")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 1, PDF page 2, `trace_source_intro`. It preserves the original source asset and may annotate only turn-level credit assignment problem and competing reward scopes; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figure-1.png", label: "Original paper figure" }
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

source = plt.imread(Path("apps/web/public/paper-assets/trace/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("turn-level credit assignment problem and competing reward scopes")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: Treatment A keeps the complete original source figure or figure set unmodified at readable scale inside the revision-8 focusable horizontal inspection viewport; exact provenance and repeated asset reuse are preserved.
- Delivery medium: `source asset`
- Visual ID and placement: `trace_visual_source_figure_1_why` — rendered immediately after `trace_why_p1`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/trace.json`, `apps/web/public/paper-assets/trace/figure-1.png`
- Accessibility and fallback verification: `VERIFIED IN COMPONENT AND BROWSER` — every image retains specific alt text; the focusable viewport exposes native arrow-key scrolling and a visible mobile instruction; exact locator, attribution, license, modification metadata, and fallback remain present.
- Desktop and mobile verification: `VERIFIED` — Playwright at 1440 × 1000 and 390 × 844 confirms intrinsic-width images, contained figure-only overflow, focus indication, ArrowRight scrolling, visible mobile hint, and no document-level horizontal overflow.
- Evidence deviations: `NONE`

## `trace_why_p2`

- Location: `trace_why`, paragraph 2
- Text anchor: "Process supervision can provide finer feedback, but commonly needs step labels, an LLM judge,"
- Claims and sources: `trace_claim_outcome_blind`, `trace_claim_credit`, `trace_source_intro`, `trace_source_method`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The paragraph makes one bounded distinction in plain language: Process supervision can provide finer feedback, but commonly needs step labels, an LLM judge, a learned critic, or repeated rollouts. A visual would repeat that statement as a stock chain, list, or set of cards rather than reduce genuine mental reconstruction.
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

## `trace_change_p1`

- Location: `trace_change`, paragraph 1
- Text anchor: "TRACE leaves final-answer verification in place but adds a trajectory-local signal at tool-call boundaries."
- Claims and sources: `trace_claim_credit`, `trace_claim_outcome_anchor`, `trace_claim_controlled_setup`, `trace_source_method`, `trace_source_experiments`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — contrast between outcome-only and turn-level reward assignment; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 1, PDF page 2, `trace_source_intro`
- License and reuse status: `PERMITTED` — The paper's arXiv record identifies CC BY 4.0; preserve the authors, original caption, locator, and license link.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Method distinction and scope.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 1, PDF page 2, `trace_source_intro`. It preserves the original source asset and may annotate only contrast between outcome-only and turn-level reward assignment; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figure-1.png", label: "Original paper figure" }
  focus["Reading focus: contrast between outcome-only and turn-level reward assignment"]
  locator["Source locator: Figure 1, PDF page 2, trace_source_intro"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/trace/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("contrast between outcome-only and turn-level reward assignment")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 1, PDF page 2, `trace_source_intro`. It preserves the original source asset and may annotate only contrast between outcome-only and turn-level reward assignment; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/trace/figure-1.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figure-1.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/trace/figure-1.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/trace/figure-1.png", label: "Complete original context" }
  locator["Detail remains located within Figure 1, PDF page 2, trace_source_intro"]
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

source = plt.imread(Path("apps/web/public/paper-assets/trace/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("contrast between outcome-only and turn-level reward assignment")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 1, PDF page 2, `trace_source_intro`. It preserves the original source asset and may annotate only contrast between outcome-only and turn-level reward assignment; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figure-1.png", label: "Original paper figure" }
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

source = plt.imread(Path("apps/web/public/paper-assets/trace/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("contrast between outcome-only and turn-level reward assignment")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: Treatment A keeps the complete original source figure or figure set unmodified at readable scale inside the revision-8 focusable horizontal inspection viewport; exact provenance and repeated asset reuse are preserved.
- Delivery medium: `source asset`
- Visual ID and placement: `trace_visual_source_figure_1_change` — rendered immediately after `trace_change_p1`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/trace.json`, `apps/web/public/paper-assets/trace/figure-1.png`
- Accessibility and fallback verification: `VERIFIED IN COMPONENT AND BROWSER` — every image retains specific alt text; the focusable viewport exposes native arrow-key scrolling and a visible mobile instruction; exact locator, attribution, license, modification metadata, and fallback remain present.
- Desktop and mobile verification: `VERIFIED` — Playwright at 1440 × 1000 and 390 × 844 confirms intrinsic-width images, contained figure-only overflow, focus indication, ArrowRight scrolling, visible mobile hint, and no document-level horizontal overflow.
- Evidence deviations: `NONE`

## `trace_change_p2`

- Location: `trace_change`, paragraph 2
- Text anchor: "This is a change to credit assignment, not a new browser, backbone, training corpus,"
- Claims and sources: `trace_claim_credit`, `trace_claim_outcome_anchor`, `trace_claim_controlled_setup`, `trace_source_method`, `trace_source_experiments`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The paragraph makes one bounded distinction in plain language: This is a change to credit assignment, not a new browser, backbone, training corpus, or final verifier. A visual would repeat that statement as a stock chain, list, or set of cards rather than reduce genuine mental reconstruction.
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

## `trace_mechanism_p1`

- Location: `trace_mechanism`, paragraph 1
- Text anchor: "TRACE first splits a rollout after each tool action and returned observation. For every"
- Claims and sources: `trace_claim_prefix_probe`, `trace_claim_td`, `trace_claim_telescope`, `trace_claim_outcome_anchor`, `trace_source_method`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The paragraph's bounded operation is already explicit: TRACE first splits a rollout after each tool action and returned observation. Its supported visual form would be a single sequence or inventory of components, both forbidden, and the evidence does not justify extra branching, scale, or state topology.
- Explanatory job: Mechanism explanation.

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

## `trace_mechanism_p2`

- Location: `trace_mechanism`, paragraph 2
- Text anchor: "The raw answer score is converted into a log-ratio value representing relative closure of"
- Claims and sources: `trace_claim_prefix_probe`, `trace_claim_td`, `trace_claim_telescope`, `trace_claim_outcome_anchor`, `trace_source_method`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The paragraph's bounded operation is already explicit: The raw answer score is converted into a log-ratio value representing relative closure of the initial answer-likelihood gap. Its supported visual form would be a single sequence or inventory of components, both forbidden, and the evidence does not justify extra branching, scale, or state topology.
- Explanatory job: Mechanism explanation.

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

## `trace_mechanism_p3`

- Location: `trace_mechanism`, paragraph 3
- Text anchor: "One-step credits telescope, so inserting redundant intermediate steps cannot increase their endpoint sum. The"
- Claims and sources: `trace_claim_prefix_probe`, `trace_claim_td`, `trace_claim_telescope`, `trace_claim_outcome_anchor`, `trace_source_method`
- Visual needed: `YES`
- Complexity warrant: Multi-scale credit dependency graph: adjacent temporal differences telescope, short look-ahead adds skip dependencies, and a global outcome advantage anchors every local signal.
- Forbidden-structure audit: `PASS` — each treatment uses branching, a dependency matrix, feedback, shared-scale geometry, or a state topology; none is a single interchangeable chain, item-plus-metric list, repeated same-metric cards, or repeated one-axis dot panels.
- Source-figure audit: `ADAPT_REQUIRED`
- Original figure locator: Figure 2, PDF page 4, `trace_source_method`
- License and reuse status: `PERMITTED` — The TRACE paper is CC BY 4.0, but the matching original is unsuitable because its dominant topology is a forbidden single chain.
- Decision rationale: Reuse cannot supply the needed treatment under the recorded constraint; the existing independently warranted non-banned adaptation remains eligible for revision-7 implementation. A simple trajectory line would be forbidden and incomplete. The actual argument depends on overlapping local, propagated, and terminal edges whose scopes differ.
- Explanatory job: Credit-dependency topology and telescoping boundary.

### Treatment A — Local, look-ahead, and outcome credit DAG

- Teaching purpose: Distinguish the exact one-step telescope from the larger propagated training signal.
- Encoding and reading order: Prefix values form nodes; adjacent differences are local edges, short look-ahead adds skip edges, and the verified final outcome broadcasts a separate anchor. Edge classes remain visually distinct.
- Evidence and limitations: Claims `trace_claim_td`, `trace_claim_telescope`, `trace_claim_outcome_anchor`; `trace_source_method`, Equations 4–12 and Algorithm 1. The diagram is structural and does not imply unreported magnitudes.
- Primary delivery medium: `SVG`
- Recommended web medium: `SVG`
- Mobile, accessibility, and motion behavior: Preserve all labels at 200% zoom; on narrow screens use a single controlled horizontal scroll region or a content-specific stacked variant. Provide a semantic description of every relation and value. Keyboard focus must follow the stated reading order. If interactive, expose the same state in text, support pause/reset, and honor reduced motion; otherwise use no motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[font=\sffamily\scriptsize,>=stealth]
\node[draw,rounded corners,align=center] (n0) at (0.0,0.0) {V0};
\node[draw,rounded corners,align=center] (n1) at (3.2,0.0) {V1};
\node[draw,rounded corners,align=center] (n2) at (6.4,0.0) {V2};
\node[draw,rounded corners,align=center] (n3) at (9.600000000000001,0.0) {V3};
\node[draw,rounded corners,align=center] (n4) at (0.0,-1.8) {local deltas};
\node[draw,rounded corners,align=center] (n5) at (3.2,-1.8) {look-ahead skips};
\node[draw,rounded corners,align=center] (n6) at (6.4,-1.8) {final outcome};
\node[draw,rounded corners,align=center] (n7) at (9.600000000000001,-1.8) {combined advantage};
\draw[->] (n0) -- (n1);
\draw[->] (n1) -- (n2);
\draw[->] (n2) -- (n3);
\draw[->] (n0) -- (n2);
\draw[->] (n1) -- (n3);
\draw[->] (n3) -- (n6);
\draw[->] (n4) -- (n7);
\draw[->] (n5) -- (n7);
\draw[->] (n6) -- (n7);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart LR
  n0["V0"]
  n1["V1"]
  n2["V2"]
  n3["V3"]
  n4["local deltas"]
  n5["look-ahead skips"]
  n6["final outcome"]
  n7["combined advantage"]
  n0 --> n1
  n1 --> n2
  n2 --> n3
  n0 --> n2
  n1 --> n3
  n3 --> n6
  n4 --> n7
  n5 --> n7
  n6 --> n7
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt

labels = ['V0', 'V1', 'V2', 'V3', 'local deltas', 'look-ahead skips', 'final outcome', 'combined advantage']
fig, ax = plt.subplots(figsize=(9, 5))
edges = [(0, 1), (1, 2), (2, 3), (0, 2), (1, 3), (3, 6), (4, 7), (5, 7), (6, 7)]
positions = {i: ((i % 4) * 2.5, -(i // 4) * 1.4) for i in range(len(labels))}
for i, label in enumerate(labels):
    x, y = positions[i]
    ax.text(x, y, label, ha='center', va='center', bbox={'boxstyle': 'round', 'fc': '#fffdf8', 'ec': '#171714'})
for start, end in edges:
    x1, y1 = positions[start]
    x2, y2 = positions[end]
    ax.annotate('', (x2, y2), (x1, y1), arrowprops={'arrowstyle': '->', 'color': '#2f5ea8'})
ax.set_axis_off()
fig.tight_layout()
fig.savefig(Path('visual.svg'), format='svg')
```

### Treatment B — Upper-triangular credit-scope matrix

- Teaching purpose: Show which later prefixes can influence each turn under one-step and propagated credit.
- Encoding and reading order: Rows are tool turns and columns are future prefix probes. The diagonal band is one-step TD; a wider band is short look-ahead; a final outcome column is separate. The one-step band alone carries the telescoping guarantee.
- Evidence and limitations: Claims `trace_claim_td`, `trace_claim_telescope`, `trace_claim_outcome_anchor`; `trace_source_method`, Equations 4–12 and Algorithm 1. Binary cells show dependency scope, not credit magnitude or sign.
- Primary delivery medium: `generated asset`
- Recommended web medium: `SVG`
- Mobile, accessibility, and motion behavior: Preserve all labels at 200% zoom; on narrow screens use a single controlled horizontal scroll region or a content-specific stacked variant. Provide a semantic description of every relation and value. Keyboard focus must follow the stated reading order. If interactive, expose the same state in text, support pause/reset, and honor reduced motion; otherwise use no motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[font=\sffamily\scriptsize,>=stealth]
\fill[blue!80] (0,-0) rectangle ++(0.9,-0.9);
\draw (0,-0) rectangle ++(0.9,-0.9);
\fill[blue!80] (1,-0) rectangle ++(0.9,-0.9);
\draw (1,-0) rectangle ++(0.9,-0.9);
\fill[blue!20] (2,-0) rectangle ++(0.9,-0.9);
\draw (2,-0) rectangle ++(0.9,-0.9);
\fill[blue!80] (3,-0) rectangle ++(0.9,-0.9);
\draw (3,-0) rectangle ++(0.9,-0.9);
\fill[blue!20] (0,-1) rectangle ++(0.9,-0.9);
\draw (0,-1) rectangle ++(0.9,-0.9);
\fill[blue!80] (1,-1) rectangle ++(0.9,-0.9);
\draw (1,-1) rectangle ++(0.9,-0.9);
\fill[blue!80] (2,-1) rectangle ++(0.9,-0.9);
\draw (2,-1) rectangle ++(0.9,-0.9);
\fill[blue!80] (3,-1) rectangle ++(0.9,-0.9);
\draw (3,-1) rectangle ++(0.9,-0.9);
\fill[blue!20] (0,-2) rectangle ++(0.9,-0.9);
\draw (0,-2) rectangle ++(0.9,-0.9);
\fill[blue!20] (1,-2) rectangle ++(0.9,-0.9);
\draw (1,-2) rectangle ++(0.9,-0.9);
\fill[blue!80] (2,-2) rectangle ++(0.9,-0.9);
\draw (2,-2) rectangle ++(0.9,-0.9);
\fill[blue!80] (3,-2) rectangle ++(0.9,-0.9);
\draw (3,-2) rectangle ++(0.9,-0.9);
\node[anchor=west] at (0,1.0) {turn 1 / turn 2 / turn 3 / outcome};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart LR
  title["Upper-triangular credit-scope matrix"]
  subgraph rows["Rows"]
    r0["turn 1"]
    r1["turn 2"]
    r2["turn 3"]
  end
  subgraph columns["Encoded relations"]
    c0["relation 1"]
    c1["relation 2"]
    c2["relation 3"]
    c3["relation 4"]
  end
  title --- rows
  title --- columns
  r0 --> c0
  r0 --> c1
  r0 --> c3
  r1 --> c1
  r1 --> c2
  r1 --> c3
  r2 --> c2
  r2 --> c3
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt

labels = ['turn 1', 'turn 2', 'turn 3', 'outcome']
fig, ax = plt.subplots(figsize=(9, 5))
values = [[1, 1, 0, 1], [0, 1, 1, 1], [0, 0, 1, 1]]
image = ax.imshow(values, cmap='Blues', vmin=0)
ax.set_title(' / '.join(labels))
fig.colorbar(image, ax=ax, label='encoded relation')
ax.grid(alpha=0.2)
fig.tight_layout()
fig.savefig(Path('visual.svg'), format='svg')
```

### Treatment C — Telescoping cancellation ledger

- Teaching purpose: Show algebraically why intermediate prefix values cancel in the one-step sum while propagated credit and final outcome remain separate terms.
- Encoding and reading order: Signed value terms occupy two rows. Matching positive and negative intermediate terms are joined by cancellation arcs; only the initial negative endpoint and final positive endpoint survive into the one-step sum. Propagated and outcome terms sit outside the cancellation enclosure.
- Evidence and limitations: Claims `trace_claim_td`, `trace_claim_telescope`, `trace_claim_outcome_anchor`; `trace_source_method`, Equations 4–12 and Algorithm 1. The cancellation identity applies exactly to one-step credit, not to the complete propagated objective.
- Primary delivery medium: `SVG`
- Recommended web medium: `SVG`
- Mobile, accessibility, and motion behavior: Preserve all labels at 200% zoom; on narrow screens use a single controlled horizontal scroll region or a content-specific stacked variant. Provide a semantic description of every relation and value. Keyboard focus must follow the stated reading order. If interactive, expose the same state in text, support pause/reset, and honor reduced motion; otherwise use no motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[font=\sffamily\scriptsize,>=stealth]
\node[draw] (nv0) at (0,0) {$-V_0$};
\node[draw] (pv1) at (2,1) {$+V_1$};
\node[draw] (nv1) at (2,-1) {$-V_1$};
\node[draw] (pv2) at (4,1) {$+V_2$};
\node[draw] (nv2) at (4,-1) {$-V_2$};
\node[draw] (pv3) at (6,0) {$+V_3$};
\draw[<->,dashed] (pv1)--node[right]{cancel}(nv1);
\draw[<->,dashed] (pv2)--node[right]{cancel}(nv2);
\node[draw] (local) at (8,0) {$V_3-V_0$};
\node[draw] (prop) at (8,2) {propagated credit};
\node[draw] (outcome) at (8,-2) {outcome anchor};
\draw[->] (nv0)--(local); \draw[->] (pv3)--(local);
\draw[dotted] (prop)--(local); \draw[dotted] (outcome)--(local);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart LR
  nv0["-V0"] --> net["one-step sum = V3 - V0"]
  pv1["+V1"] -. "cancels" .- nv1["-V1"]
  pv2["+V2"] -. "cancels" .- nv2["-V2"]
  pv3["+V3"] --> net
  prop["propagated credit"] -. "separate component" .-> objective["combined advantage"]
  outcome["verified outcome"] -. "separate anchor" .-> objective
  net --> objective
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt

labels = ['-V0', '+V1', '-V1', '+V2', '-V2', '+V3', 'one-step sum', 'propagated', 'outcome']
fig, ax = plt.subplots(figsize=(9, 5))
positions = {0:(0,0),1:(2,1),2:(2,-1),3:(4,1),4:(4,-1),5:(6,0),6:(8,0),7:(8,2),8:(8,-2)}
for i, label in enumerate(labels):
    x, y = positions[i]
    ax.text(x, y, label, ha='center', bbox={'boxstyle':'round','fc':'#fffdf8'})
for a, b in [(0,6),(5,6)]:
    ax.annotate('', positions[b], positions[a], arrowprops={'arrowstyle':'->'})
for a, b in [(1,2),(3,4)]:
    ax.plot([positions[a][0],positions[b][0]],[positions[a][1],positions[b][1]],'--',color='#a44e36')
ax.text(2.2,0,'cancel',color='#a44e36')
ax.text(4.2,0,'cancel',color='#a44e36')
ax.set_axis_off()
fig.tight_layout()
fig.savefig(Path('visual.svg'), format='svg')
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: Treatment A is the approved revision-7 treatment already implemented as the preserved custom SVG; its evidence encoding and accessible fallback remain unchanged.
- Delivery medium: `SVG`
- Visual ID and placement: `trace_visual_credit_dependency_dag` — rendered immediately after `trace_mechanism_p3`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/trace.json`
- Accessibility and fallback verification: `VERIFIED IN FIXTURE` — the preserved custom SVG retains its specific alt text, limitations, and static fallback.
- Desktop and mobile verification: `PENDING SITE INTEGRATION` — renderer and responsive browser QA are owned by `site_maintainer`.
- Evidence deviations: `NONE`

## `trace_example_p1`

- Location: `trace_example`, paragraph 1
- Text anchor: "Consider a trajectory that searches for a relevant source, opens a page containing decisive"
- Claims and sources: `trace_claim_prefix_probe`, `trace_claim_td`, `trace_claim_outcome_anchor`, `trace_source_intro`, `trace_source_method`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — worked trajectory with locally different turn contributions; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 1, PDF page 2, `trace_source_intro`
- License and reuse status: `PERMITTED` — The paper's arXiv record identifies CC BY 4.0; preserve the authors, original caption, locator, and license link.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Worked example.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 1, PDF page 2, `trace_source_intro`. It preserves the original source asset and may annotate only worked trajectory with locally different turn contributions; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figure-1.png", label: "Original paper figure" }
  focus["Reading focus: worked trajectory with locally different turn contributions"]
  locator["Source locator: Figure 1, PDF page 2, trace_source_intro"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/trace/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("worked trajectory with locally different turn contributions")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 1, PDF page 2, `trace_source_intro`. It preserves the original source asset and may annotate only worked trajectory with locally different turn contributions; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/trace/figure-1.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figure-1.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/trace/figure-1.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/trace/figure-1.png", label: "Complete original context" }
  locator["Detail remains located within Figure 1, PDF page 2, trace_source_intro"]
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

source = plt.imread(Path("apps/web/public/paper-assets/trace/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("worked trajectory with locally different turn contributions")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 1, PDF page 2, `trace_source_intro`. It preserves the original source asset and may annotate only worked trajectory with locally different turn contributions; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figure-1.png", label: "Original paper figure" }
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

source = plt.imread(Path("apps/web/public/paper-assets/trace/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("worked trajectory with locally different turn contributions")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: Treatment A keeps the complete original source figure or figure set unmodified at readable scale inside the revision-8 focusable horizontal inspection viewport; exact provenance and repeated asset reuse are preserved.
- Delivery medium: `source asset`
- Visual ID and placement: `trace_visual_source_figure_1_example` — rendered immediately after `trace_example_p2`.
- Shared paragraph scope: `trace_example_p1`, `trace_example_p2`
- Changed files: `packages/test-fixtures/explainers/trace.json`, `apps/web/public/paper-assets/trace/figure-1.png`
- Accessibility and fallback verification: `VERIFIED IN COMPONENT AND BROWSER` — every image retains specific alt text; the focusable viewport exposes native arrow-key scrolling and a visible mobile instruction; exact locator, attribution, license, modification metadata, and fallback remain present.
- Desktop and mobile verification: `VERIFIED` — Playwright at 1440 × 1000 and 390 × 844 confirms intrinsic-width images, contained figure-only overflow, focus indication, ArrowRight scrolling, visible mobile hint, and no document-level horizontal overflow.
- Evidence deviations: `NONE`

## `trace_example_p2`

- Location: `trace_example`, paragraph 2
- Text anchor: "The useful search and page opening can receive positive local credit if they make"
- Claims and sources: `trace_claim_prefix_probe`, `trace_claim_td`, `trace_claim_outcome_anchor`, `trace_source_intro`, `trace_source_method`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — worked trajectory with locally different turn contributions; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 1, PDF page 2, `trace_source_intro`
- License and reuse status: `PERMITTED` — The paper's arXiv record identifies CC BY 4.0; preserve the authors, original caption, locator, and license link.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Worked example.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 1, PDF page 2, `trace_source_intro`. It preserves the original source asset and may annotate only worked trajectory with locally different turn contributions; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figure-1.png", label: "Original paper figure" }
  focus["Reading focus: worked trajectory with locally different turn contributions"]
  locator["Source locator: Figure 1, PDF page 2, trace_source_intro"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/trace/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("worked trajectory with locally different turn contributions")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 1, PDF page 2, `trace_source_intro`. It preserves the original source asset and may annotate only worked trajectory with locally different turn contributions; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/trace/figure-1.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figure-1.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/trace/figure-1.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/trace/figure-1.png", label: "Complete original context" }
  locator["Detail remains located within Figure 1, PDF page 2, trace_source_intro"]
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

source = plt.imread(Path("apps/web/public/paper-assets/trace/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("worked trajectory with locally different turn contributions")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 1, PDF page 2, `trace_source_intro`. It preserves the original source asset and may annotate only worked trajectory with locally different turn contributions; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figure-1.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figure-1.png", label: "Original paper figure" }
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

source = plt.imread(Path("apps/web/public/paper-assets/trace/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("worked trajectory with locally different turn contributions")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: Treatment A keeps the complete original source figure or figure set unmodified at readable scale inside the revision-8 focusable horizontal inspection viewport; exact provenance and repeated asset reuse are preserved.
- Delivery medium: `source asset`
- Visual ID and placement: `trace_visual_source_figure_1_example` — rendered immediately after `trace_example_p2`.
- Shared paragraph scope: `trace_example_p1`, `trace_example_p2`
- Changed files: `packages/test-fixtures/explainers/trace.json`, `apps/web/public/paper-assets/trace/figure-1.png`
- Accessibility and fallback verification: `VERIFIED IN COMPONENT AND BROWSER` — every image retains specific alt text; the focusable viewport exposes native arrow-key scrolling and a visible mobile instruction; exact locator, attribution, license, modification metadata, and fallback remain present.
- Desktop and mobile verification: `VERIFIED` — Playwright at 1440 × 1000 and 390 × 844 confirms intrinsic-width images, contained figure-only overflow, focus indication, ArrowRight scrolling, visible mobile hint, and no document-level horizontal overflow.
- Evidence deviations: `NONE`

## `trace_evidence_p1`

- Location: `trace_evidence`, paragraph 1
- Text anchor: "The authors train Qwen3-4B-Thinking-2507 and Qwen3-30B-A3B-Thinking-2507 in the same ReAct-style search harness. The training"
- Claims and sources: `trace_claim_controlled_setup`, `trace_claim_browsecomp_gain`, `trace_claim_grpo_gain`, `trace_claim_ablation`, `trace_source_experiments`, `trace_source_results`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The paragraph already reports the bounded evidence directly: The authors train Qwen3-4B-Thinking-2507 and Qwen3-30B-A3B-Thinking-2507 in the same ReAct-style search harness. The available values do not add a supported distribution, uncertainty interval, or joint structure; an honest graphic would reduce to an item-plus-metric list, repeated metric marks, or decorative comparison. Prose is clearer.
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

## `trace_evidence_p2`

- Location: `trace_evidence`, paragraph 2
- Text anchor: "On closed-web BrowseComp-Plus, TRACE moves the 4B base from 7.2 to 35.6 and the"
- Claims and sources: `trace_claim_controlled_setup`, `trace_claim_browsecomp_gain`, `trace_claim_grpo_gain`, `trace_claim_ablation`, `trace_source_experiments`, `trace_source_results`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: Base-to-TRACE changes for two backbones and GRPO-to-TRACE four-benchmark averages are quantitative, but they refer to different comparison baselines and scopes. One slope chart would imply exchangeability; separate backbone/comparator tracks would be repeated one-axis panels, and no uncertainty is reported. Prose keeps the controlled BrowseComp-Plus gains distinct from unweighted cross-benchmark averages.
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

## `trace_evidence_p3`

- Location: `trace_evidence`, paragraph 3
- Text anchor: "In one 4B BrowseComp-Plus ablation, GRPO scores 30.0, raw log-probability delta 32.4, remaining-gap normalization"
- Claims and sources: `trace_claim_controlled_setup`, `trace_claim_browsecomp_gain`, `trace_claim_grpo_gain`, `trace_claim_ablation`, `trace_source_experiments`, `trace_source_results`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — learning dynamics and ablation evidence on aligned experimental axes; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figures 3-4, PDF pages 8-10, `trace_source_results`
- License and reuse status: `PERMITTED` — The paper's arXiv record identifies CC BY 4.0; preserve the authors, original caption, locator, and license link.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Evaluation evidence.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figures 3-4, PDF pages 8-10, `trace_source_results`. It preserves the original source asset and may annotate only learning dynamics and ablation evidence on aligned experimental axes; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figures-3-4.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figures-3-4.png", label: "Original paper figure" }
  focus["Reading focus: learning dynamics and ablation evidence on aligned experimental axes"]
  locator["Source locator: Figures 3-4, PDF pages 8-10, trace_source_results"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/trace/figures-3-4.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("learning dynamics and ablation evidence on aligned experimental axes")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figures 3-4, PDF pages 8-10, `trace_source_results`. It preserves the original source asset and may annotate only learning dynamics and ablation evidence on aligned experimental axes; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figures-3-4.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/trace/figures-3-4.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/trace/figures-3-4.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figures-3-4.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/trace/figures-3-4.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/trace/figures-3-4.png", label: "Complete original context" }
  locator["Detail remains located within Figures 3-4, PDF pages 8-10, trace_source_results"]
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

source = plt.imread(Path("apps/web/public/paper-assets/trace/figures-3-4.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("learning dynamics and ablation evidence on aligned experimental axes")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figures 3-4, PDF pages 8-10, `trace_source_results`. It preserves the original source asset and may annotate only learning dynamics and ablation evidence on aligned experimental axes; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/trace/figures-3-4.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/trace/figures-3-4.png", label: "Original paper figure" }
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

source = plt.imread(Path("apps/web/public/paper-assets/trace/figures-3-4.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("learning dynamics and ablation evidence on aligned experimental axes")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: Treatment A keeps the complete original source figure or figure set unmodified at readable scale inside the revision-8 focusable horizontal inspection viewport; exact provenance and repeated asset reuse are preserved.
- Delivery medium: `source asset`
- Visual ID and placement: `trace_visual_source_figures_3_4` — rendered immediately after `trace_evidence_p3`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/trace.json`, `apps/web/public/paper-assets/trace/figure-3.png`, `apps/web/public/paper-assets/trace/figure-4.png`
- Accessibility and fallback verification: `VERIFIED IN COMPONENT AND BROWSER` — every image retains specific alt text; the focusable viewport exposes native arrow-key scrolling and a visible mobile instruction; exact locator, attribution, license, modification metadata, and fallback remain present.
- Desktop and mobile verification: `VERIFIED` — Playwright at 1440 × 1000 and 390 × 844 confirms intrinsic-width images, contained figure-only overflow, focus indication, ArrowRight scrolling, visible mobile hint, and no document-level horizontal overflow.
- Evidence deviations: `NONE`

## `trace_limitations_p1`

- Location: `trace_limitations`, paragraph 1
- Text anchor: "The experiments cover long-horizon search with short answers that can be compared with known"
- Claims and sources: `trace_claim_scope`, `trace_claim_proxy_not_causal`, `trace_source_results`, `trace_source_limitations`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: The experiments cover long-horizon search with short answers that can be compared with known ground truth. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
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

## `trace_limitations_p2`

- Location: `trace_limitations`, paragraph 2
- Text anchor: "Only two related Qwen3 backbones and one interaction domain are evaluated. A higher frozen-model"
- Claims and sources: `trace_claim_scope`, `trace_claim_proxy_not_causal`, `trace_source_results`, `trace_source_limitations`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: Only two related Qwen3 backbones and one interaction domain are evaluated. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
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

## `trace_review_p1`

- Location: `trace_review`, paragraph 1
- Text anchor: "The controlled result supports a narrow conclusion: in the authors' search setup, adding their"
- Claims and sources: `trace_claim_credit`, `trace_claim_grpo_gain`, `trace_claim_scope`, `trace_claim_proxy_not_causal`, `trace_source_method`, `trace_source_results`, `trace_source_limitations`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: The controlled result supports a narrow conclusion: in the authors' search setup, adding their reference-model-based turn credit to outcome training improves both tested backbones and several related benchmarks. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
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

## `trace_review_p2`

- Location: `trace_review`, paragraph 2
- Text anchor: "The paper does not establish a general solution to agent credit assignment. The proxy"
- Claims and sources: `trace_claim_credit`, `trace_claim_grpo_gain`, `trace_claim_scope`, `trace_claim_proxy_not_causal`, `trace_source_method`, `trace_source_results`, `trace_source_limitations`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: The paper does not establish a general solution to agent credit assignment. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
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
