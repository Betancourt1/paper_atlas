# Visual manifest — RoboTTT: Context Scaling for Robot Policies

- Paper ID: `paper_robott`
- Exact paper version: `v1`
- Explainer fixture: `packages/test-fixtures/explainers/robott.json`
- Manifest revision: `12`
- Engineer status: `COMPLETE`
- Implementer status: `REWORK_REQUIRED`
- Paragraph coverage: `16 / 16` prose paragraphs
- Paragraph-ID derivation: `{block.id}_p{1-based index in block.paragraphs}`; each fixture paragraph appears exactly once.
- Evidence sources:
  - `rttt_architecture_source` — RoboTTT v1 — architecture and sequence training; Sections 2–3.2, Equations 1–5, Figures 2–4, PDF pages 3–5; the arXiv v1 record identifies the paper as CC BY 4.0
  - `rttt_training_source` — RoboTTT v1 — context learning and DAgger Distillation; Sections 3.3–3.4, Figures 5–6, PDF pages 6–7
  - `rttt_results_source` — RoboTTT v1 — real-robot evaluation and ablations; Section 4, Tables 1–3, Figures 7–12, PDF pages 7–11
  - `rttt_limits_source` — RoboTTT v1 — limitations, deployment, and evaluation details; Section 6 and Appendices A–B, PDF pages 12 and 20–22

Revision 11 corrects source-pixel semantics, removes a mismatched source figure, requires conditional inspection instructions, and returns the PPA hierarchy adaptation for visible two-depth invariance rework.

## `rttt_why_p1`

- Location: `rttt_why`, paragraph 1
- Text anchor: "A robot acting for minutes must remember which stages it has completed, what actions"
- Claims and sources: `rttt_core`, `rttt_architecture`, `rttt_architecture_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The paragraph makes one bounded distinction in plain language: A robot acting for minutes must remember which stages it has completed, what actions failed, and what was previously visible before an object became occluded. A visual would repeat that statement as a stock chain, list, or set of cards rather than reduce genuine mental reconstruction.
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

## `rttt_why_p2`

- Location: `rttt_why`, paragraph 2
- Text anchor: "Full attention over an ever-growing history makes each new prediction more expensive. A compact"
- Claims and sources: `rttt_core`, `rttt_architecture`, `rttt_architecture_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The paragraph makes one bounded distinction in plain language: Full attention over an ever-growing history makes each new prediction more expensive. A visual would repeat that statement as a stock chain, list, or set of cards rather than reduce genuine mental reconstruction.
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

## `rttt_change_p1`

- Location: `rttt_change`, paragraph 1
- Text anchor: "RoboTTT does not keep the complete history available for attention. It uses fast weights"
- Claims and sources: `rttt_architecture`, `rttt_training`, `rttt_architecture_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `rttt_mechanism_p2`, where it performs the complex explanatory job. Repeating the full figure here would add visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Method distinction and scope.

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

## `rttt_change_p2`

- Location: `rttt_change`, paragraph 2
- Text anchor: "The paper combines this state mechanism with two training ideas. Sequence action forcing samples"
- Claims and sources: `rttt_architecture`, `rttt_training`, `rttt_architecture_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `rttt_mechanism_p2` and `rttt_mechanism_p3`, where it performs the complex explanatory job. Repeating the full figure here would add visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Method distinction and scope.

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

## `rttt_mechanism_p1`

- Location: `rttt_mechanism`, paragraph 1
- Text anchor: "RoboTTT is instantiated on GR00T N1.7. Its vision-language model encodes the current observation, and"
- Claims and sources: `rttt_architecture`, `rttt_training`, `rttt_architecture_source`, `rttt_training_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `rttt_mechanism_p2`, where it performs the complex explanatory job. Repeating the full figure here would add visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Mechanism explanation.

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

## `rttt_mechanism_p2`

- Location: `rttt_mechanism`, paragraph 2
- Text anchor: "At each step, projected keys and values define an inner loss. Gradient descent updates"
- Claims and sources: `rttt_architecture`, `rttt_training`, `rttt_architecture_source`, `rttt_training_source`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — policy, context, and fast-weight update dependencies; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 2, PDF page 4, `rttt_architecture_source`
- License and reuse status: `PERMITTED` — The arXiv v1 record identifies CC BY 4.0, while the PDF also carries an NVIDIA copyright notice; use the arXiv-licensed asset and preserve both the attribution and this recorded notice conflict.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Inference-time inner-loop update, parallel pathways, and gated merge.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 2, PDF page 4, `rttt_architecture_source`. It preserves the original source asset and may annotate only policy, context, and fast-weight update dependencies; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and render each source asset entirely inside its available container at desktop and mobile widths with no internal or page-level scrollbar. Preserve aspect ratio and source pixels using `max-width: 100%` and `height: auto`; when a multi-image set would make labels or relationships illegible, stack its images vertically or use a permitted panel or crop rather than squeezing or scrolling. Preserve the original caption, exact locator, attribution, license, equivalent text explanation, and legible relationships. If no permitted crop or reflow keeps the source legible, reconsider the `YES` decision instead of adding overflow. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/robott/figure-2.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/robott/figure-2.png", label: "Original paper figure" }
  focus["Reading focus: policy, context, and fast-weight update dependencies"]
  locator["Source locator: Figure 2, PDF page 4, rttt_architecture_source"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/robott/figure-2.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("policy, context, and fast-weight update dependencies")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 2, PDF page 4, `rttt_architecture_source`. It preserves the original source asset and may annotate only policy, context, and fast-weight update dependencies; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and render each source asset entirely inside its available container at desktop and mobile widths with no internal or page-level scrollbar. Preserve aspect ratio and source pixels using `max-width: 100%` and `height: auto`; when a multi-image set would make labels or relationships illegible, stack its images vertically or use a permitted panel or crop rather than squeezing or scrolling. Preserve the original caption, exact locator, attribution, license, equivalent text explanation, and legible relationships. If no permitted crop or reflow keeps the source legible, reconsider the `YES` decision instead of adding overflow. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/robott/figure-2.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/robott/figure-2.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/robott/figure-2.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/robott/figure-2.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/robott/figure-2.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/robott/figure-2.png", label: "Complete original context" }
  locator["Detail remains located within Figure 2, PDF page 4, rttt_architecture_source"]
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

source = plt.imread(Path("apps/web/public/paper-assets/robott/figure-2.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("policy, context, and fast-weight update dependencies")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 2, PDF page 4, `rttt_architecture_source`. It preserves the original source asset and may annotate only policy, context, and fast-weight update dependencies; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and render each source asset entirely inside its available container at desktop and mobile widths with no internal or page-level scrollbar. Preserve aspect ratio and source pixels using `max-width: 100%` and `height: auto`; when a multi-image set would make labels or relationships illegible, stack its images vertically or use a permitted panel or crop rather than squeezing or scrolling. Preserve the original caption, exact locator, attribution, license, equivalent text explanation, and legible relationships. If no permitted crop or reflow keeps the source legible, reconsider the `YES` decision instead of adding overflow. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/robott/figure-2.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/robott/figure-2.png", label: "Original paper figure" }
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

source = plt.imread(Path("apps/web/public/paper-assets/robott/figure-2.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("policy, context, and fast-weight update dependencies")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `REWORK_REQUIRED`
- Selected treatment: `A`
- Selection rationale: Treatment A remains the evidence-correct choice, but its current intrinsic-width inspection treatment violates revision 12. Reimplementation must fit the complete source asset inside the container without internal or page scrolling while preserving aspect ratio, source pixels, provenance, and legibility; use a permitted crop or panel, or reconsider the visual, if responsive fitting is illegible.
- Delivery medium: `source asset`
- Visual ID and placement: `visual_robott_source_figure_2_mechanism` — rendered immediately after `rttt_mechanism_p2`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/robott.json`, `apps/web/public/paper-assets/robott/figure-2.png`
- Accessibility and fallback verification: `PENDING RESPONSIVE REWORK` — retain existing specific alt text, semantic fallback, exact locator, attribution, license, and modification metadata; verify that labels and relationships remain legible without horizontal interaction.
- Desktop and mobile verification: `PENDING RESPONSIVE REWORK` — prove at 1440 × 1000 and 390 × 844 that the complete visualization fits inside its container, preserves aspect ratio, keeps labels and relationships legible, and creates neither internal nor page-level scrollbars.
- Evidence deviations: `NONE`

## `rttt_mechanism_p3`

- Location: `rttt_mechanism`, paragraph 3
- Text anchor: "The updated weights become the next timestep's recurrent state. During sequence training, gradients flow"
- Claims and sources: `rttt_architecture`, `rttt_training`, `rttt_architecture_source`, `rttt_training_source`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — TBPTT boundary that carries fast-weight state while truncating gradients; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 4, PDF page 5, `rttt_architecture_source`
- License and reuse status: `PERMITTED` — The arXiv v1 record identifies CC BY 4.0, while the PDF also carries an NVIDIA copyright notice; use the arXiv-licensed asset and preserve both the attribution and this recorded notice conflict.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Mechanism explanation.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 4, PDF page 5, `rttt_architecture_source`. It preserves the original source asset and may annotate only TBPTT boundary that carries fast-weight state while truncating gradients; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and render each source asset entirely inside its available container at desktop and mobile widths with no internal or page-level scrollbar. Preserve aspect ratio and source pixels using `max-width: 100%` and `height: auto`; when a multi-image set would make labels or relationships illegible, stack its images vertically or use a permitted panel or crop rather than squeezing or scrolling. Preserve the original caption, exact locator, attribution, license, equivalent text explanation, and legible relationships. If no permitted crop or reflow keeps the source legible, reconsider the `YES` decision instead of adding overflow. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/robott/figure-4.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/robott/figure-4.png", label: "Original paper figure" }
  focus["Reading focus: TBPTT boundary that carries fast-weight state while truncating gradients"]
  locator["Source locator: Figure 4, PDF page 5, rttt_architecture_source"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/robott/figure-4.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("TBPTT boundary that carries fast-weight state while truncating gradients")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 4, PDF page 5, `rttt_architecture_source`. It preserves the original source asset and may annotate only TBPTT boundary that carries fast-weight state while truncating gradients; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and render each source asset entirely inside its available container at desktop and mobile widths with no internal or page-level scrollbar. Preserve aspect ratio and source pixels using `max-width: 100%` and `height: auto`; when a multi-image set would make labels or relationships illegible, stack its images vertically or use a permitted panel or crop rather than squeezing or scrolling. Preserve the original caption, exact locator, attribution, license, equivalent text explanation, and legible relationships. If no permitted crop or reflow keeps the source legible, reconsider the `YES` decision instead of adding overflow. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/robott/figure-4.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/robott/figure-4.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/robott/figure-4.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/robott/figure-4.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/robott/figure-4.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/robott/figure-4.png", label: "Complete original context" }
  locator["Detail remains located within Figure 4, PDF page 5, rttt_architecture_source"]
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

source = plt.imread(Path("apps/web/public/paper-assets/robott/figure-4.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("TBPTT boundary that carries fast-weight state while truncating gradients")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 4, PDF page 5, `rttt_architecture_source`. It preserves the original source asset and may annotate only TBPTT boundary that carries fast-weight state while truncating gradients; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and render each source asset entirely inside its available container at desktop and mobile widths with no internal or page-level scrollbar. Preserve aspect ratio and source pixels using `max-width: 100%` and `height: auto`; when a multi-image set would make labels or relationships illegible, stack its images vertically or use a permitted panel or crop rather than squeezing or scrolling. Preserve the original caption, exact locator, attribution, license, equivalent text explanation, and legible relationships. If no permitted crop or reflow keeps the source legible, reconsider the `YES` decision instead of adding overflow. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/robott/figure-4.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/robott/figure-4.png", label: "Original paper figure" }
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

source = plt.imread(Path("apps/web/public/paper-assets/robott/figure-4.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("TBPTT boundary that carries fast-weight state while truncating gradients")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `REWORK_REQUIRED`
- Selected treatment: `A`
- Selection rationale: Treatment A remains the evidence-correct choice, but its current intrinsic-width inspection treatment violates revision 12. Reimplementation must fit the complete source asset inside the container without internal or page scrolling while preserving aspect ratio, source pixels, provenance, and legibility; use a permitted crop or panel, or reconsider the visual, if responsive fitting is illegible.
- Delivery medium: `source asset`
- Visual ID and placement: `visual_robott_source_figures_2_4_mechanism` — rendered immediately after `rttt_mechanism_p3`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/robott.json`, `apps/web/public/paper-assets/robott/figure-4.png`
- Accessibility and fallback verification: `PENDING RESPONSIVE REWORK` — retain existing specific alt text, semantic fallback, exact locator, attribution, license, and modification metadata; verify that labels and relationships remain legible without horizontal interaction.
- Desktop and mobile verification: `PENDING RESPONSIVE REWORK` — prove at 1440 × 1000 and 390 × 844 that the complete visualization fits inside its container, preserves aspect ratio, keeps labels and relationships legible, and creates neither internal nor page-level scrollbars.
- Evidence deviations: `NONE`

## `rttt_example_p1`

- Location: `rttt_example`, paragraph 1
- Text anchor: "For the Circuit task, a human first assembles an unseen component configuration while the"
- Claims and sources: `rttt_context_learning`, `rttt_one_shot`, `rttt_generality`, `rttt_training_source`, `rttt_results_source`, `rttt_limits_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The worked example is short enough to follow in prose: For the Circuit task, a human first assembles an unseen component configuration while the robot remains idle. Rendering the same ordered actions would create a forbidden single chain; no additional quantitative or spatial relation is supported here.
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

## `rttt_example_p2`

- Location: `rttt_example`, paragraph 2
- Text anchor: "After the scene is reset, the robot receives the same generic instruction used for"
- Claims and sources: `rttt_context_learning`, `rttt_one_shot`, `rttt_generality`, `rttt_training_source`, `rttt_results_source`, `rttt_limits_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The worked example is short enough to follow in prose: After the scene is reset, the robot receives the same generic instruction used for every configuration. Rendering the same ordered actions would create a forbidden single chain; no additional quantitative or spatial relation is supported here.
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

## `rttt_evidence_p1`

- Location: `rttt_evidence`, paragraph 1
- Text anchor: "Across Pup Go Car, Circuit, and Gear Bot, RoboTTT reports a 79% average rubric-based"
- Claims and sources: `rttt_main_result`, `rttt_scaling`, `rttt_perturbation`, `rttt_dagger`, `rttt_results_source`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — real-robot evaluation on the paper's shared experimental frame; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 7, PDF page 7, `rttt_results_source`
- License and reuse status: `PERMITTED` — The arXiv v1 record identifies CC BY 4.0, while the PDF also carries an NVIDIA copyright notice; use the arXiv-licensed asset and preserve both the attribution and this recorded notice conflict.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Evaluation evidence.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 7, PDF page 7, `rttt_results_source`. It preserves the original source asset and may annotate only real-robot evaluation on the paper's shared experimental frame; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and render each source asset entirely inside its available container at desktop and mobile widths with no internal or page-level scrollbar. Preserve aspect ratio and source pixels using `max-width: 100%` and `height: auto`; when a multi-image set would make labels or relationships illegible, stack its images vertically or use a permitted panel or crop rather than squeezing or scrolling. Preserve the original caption, exact locator, attribution, license, equivalent text explanation, and legible relationships. If no permitted crop or reflow keeps the source legible, reconsider the `YES` decision instead of adding overflow. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/robott/figure-7.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/robott/figure-7.png", label: "Original paper figure" }
  focus["Reading focus: real-robot evaluation on the paper's shared experimental frame"]
  locator["Source locator: Figure 7, PDF page 7, rttt_results_source"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/robott/figure-7.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("real-robot evaluation on the paper's shared experimental frame")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 7, PDF page 7, `rttt_results_source`. It preserves the original source asset and may annotate only real-robot evaluation on the paper's shared experimental frame; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and render each source asset entirely inside its available container at desktop and mobile widths with no internal or page-level scrollbar. Preserve aspect ratio and source pixels using `max-width: 100%` and `height: auto`; when a multi-image set would make labels or relationships illegible, stack its images vertically or use a permitted panel or crop rather than squeezing or scrolling. Preserve the original caption, exact locator, attribution, license, equivalent text explanation, and legible relationships. If no permitted crop or reflow keeps the source legible, reconsider the `YES` decision instead of adding overflow. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/robott/figure-7.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/robott/figure-7.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/robott/figure-7.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/robott/figure-7.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/robott/figure-7.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/robott/figure-7.png", label: "Complete original context" }
  locator["Detail remains located within Figure 7, PDF page 7, rttt_results_source"]
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

source = plt.imread(Path("apps/web/public/paper-assets/robott/figure-7.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("real-robot evaluation on the paper's shared experimental frame")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 7, PDF page 7, `rttt_results_source`. It preserves the original source asset and may annotate only real-robot evaluation on the paper's shared experimental frame; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and render each source asset entirely inside its available container at desktop and mobile widths with no internal or page-level scrollbar. Preserve aspect ratio and source pixels using `max-width: 100%` and `height: auto`; when a multi-image set would make labels or relationships illegible, stack its images vertically or use a permitted panel or crop rather than squeezing or scrolling. Preserve the original caption, exact locator, attribution, license, equivalent text explanation, and legible relationships. If no permitted crop or reflow keeps the source legible, reconsider the `YES` decision instead of adding overflow. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/robott/figure-7.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/robott/figure-7.png", label: "Original paper figure" }
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

source = plt.imread(Path("apps/web/public/paper-assets/robott/figure-7.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("real-robot evaluation on the paper's shared experimental frame")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `REWORK_REQUIRED`
- Selected treatment: `A`
- Selection rationale: Treatment A remains the evidence-correct choice, but its current intrinsic-width inspection treatment violates revision 12. Reimplementation must fit the complete source asset inside the container without internal or page scrolling while preserving aspect ratio, source pixels, provenance, and legibility; use a permitted crop or panel, or reconsider the visual, if responsive fitting is illegible.
- Delivery medium: `source asset`
- Visual ID and placement: `visual_robott_source_figure_7` — rendered immediately after `rttt_evidence_p1`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/robott.json`, `apps/web/public/paper-assets/robott/figure-7.png`
- Accessibility and fallback verification: `PENDING RESPONSIVE REWORK` — retain existing specific alt text, semantic fallback, exact locator, attribution, license, and modification metadata; verify that labels and relationships remain legible without horizontal interaction.
- Desktop and mobile verification: `PENDING RESPONSIVE REWORK` — prove at 1440 × 1000 and 390 × 844 that the complete visualization fits inside its container, preserves aspect ratio, keeps labels and relationships legible, and creates neither internal nor page-level scrollbars.
- Evidence deviations: `NONE`

## `rttt_evidence_p2`

- Location: `rttt_evidence`, paragraph 2
- Text anchor: "In the context-scaling study, average completion rises from 43.9% with 1K-timestep pretraining to 71.5%"
- Claims and sources: `rttt_main_result`, `rttt_scaling`, `rttt_perturbation`, `rttt_dagger`, `rttt_results_source`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — context-length ablation and outcome relation; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 8, PDF page 8, `rttt_results_source`
- License and reuse status: `PERMITTED` — The arXiv v1 record identifies CC BY 4.0, while the PDF also carries an NVIDIA copyright notice; use the arXiv-licensed asset and preserve both the attribution and this recorded notice conflict.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Evaluation evidence.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 8, PDF page 8, `rttt_results_source`. It preserves the original source asset and may annotate only context-length ablation and outcome relation; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and render each source asset entirely inside its available container at desktop and mobile widths with no internal or page-level scrollbar. Preserve aspect ratio and source pixels using `max-width: 100%` and `height: auto`; when a multi-image set would make labels or relationships illegible, stack its images vertically or use a permitted panel or crop rather than squeezing or scrolling. Preserve the original caption, exact locator, attribution, license, equivalent text explanation, and legible relationships. If no permitted crop or reflow keeps the source legible, reconsider the `YES` decision instead of adding overflow. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/robott/figure-8.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/robott/figure-8.png", label: "Original paper figure" }
  focus["Reading focus: context-length ablation and outcome relation"]
  locator["Source locator: Figure 8, PDF page 8, rttt_results_source"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/robott/figure-8.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("context-length ablation and outcome relation")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 8, PDF page 8, `rttt_results_source`. It preserves the original source asset and may annotate only context-length ablation and outcome relation; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and render each source asset entirely inside its available container at desktop and mobile widths with no internal or page-level scrollbar. Preserve aspect ratio and source pixels using `max-width: 100%` and `height: auto`; when a multi-image set would make labels or relationships illegible, stack its images vertically or use a permitted panel or crop rather than squeezing or scrolling. Preserve the original caption, exact locator, attribution, license, equivalent text explanation, and legible relationships. If no permitted crop or reflow keeps the source legible, reconsider the `YES` decision instead of adding overflow. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/robott/figure-8.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/robott/figure-8.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/robott/figure-8.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/robott/figure-8.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/robott/figure-8.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/robott/figure-8.png", label: "Complete original context" }
  locator["Detail remains located within Figure 8, PDF page 8, rttt_results_source"]
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

source = plt.imread(Path("apps/web/public/paper-assets/robott/figure-8.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("context-length ablation and outcome relation")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 8, PDF page 8, `rttt_results_source`. It preserves the original source asset and may annotate only context-length ablation and outcome relation; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and render each source asset entirely inside its available container at desktop and mobile widths with no internal or page-level scrollbar. Preserve aspect ratio and source pixels using `max-width: 100%` and `height: auto`; when a multi-image set would make labels or relationships illegible, stack its images vertically or use a permitted panel or crop rather than squeezing or scrolling. Preserve the original caption, exact locator, attribution, license, equivalent text explanation, and legible relationships. If no permitted crop or reflow keeps the source legible, reconsider the `YES` decision instead of adding overflow. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/robott/figure-8.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/robott/figure-8.png", label: "Original paper figure" }
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

source = plt.imread(Path("apps/web/public/paper-assets/robott/figure-8.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("context-length ablation and outcome relation")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `REWORK_REQUIRED`
- Selected treatment: `A`
- Selection rationale: Treatment A remains the evidence-correct choice, but its current intrinsic-width inspection treatment violates revision 12. Reimplementation must fit the complete source asset inside the container without internal or page scrolling while preserving aspect ratio, source pixels, provenance, and legibility; use a permitted crop or panel, or reconsider the visual, if responsive fitting is illegible.
- Delivery medium: `source asset`
- Visual ID and placement: `visual_robott_source_figure_8` — rendered immediately after `rttt_evidence_p2`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/robott.json`, `apps/web/public/paper-assets/robott/figure-8.png`
- Accessibility and fallback verification: `PENDING RESPONSIVE REWORK` — retain existing specific alt text, semantic fallback, exact locator, attribution, license, and modification metadata; verify that labels and relationships remain legible without horizontal interaction.
- Desktop and mobile verification: `PENDING RESPONSIVE REWORK` — prove at 1440 × 1000 and 390 × 844 that the complete visualization fits inside its container, preserves aspect ratio, keeps labels and relationships legible, and creates neither internal nor page-level scrollbars.
- Evidence deviations: `NONE`

## `rttt_evidence_p3`

- Location: `rttt_evidence`, paragraph 3
- Text anchor: "RoboTTT recovers from roof and tire perturbations in 15 of 20 and 18 of"
- Claims and sources: `rttt_main_result`, `rttt_scaling`, `rttt_perturbation`, `rttt_dagger`, `rttt_results_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: Perturbation recovery counts are comparable within condition, but only tire recovery includes the crucial GDN tie and DAgger's 33% effect belongs to a separate correction study. Combining them would imply one causal comparison; splitting roof, tire, and DAgger into tracks would create repeated metric panels. Prose keeps the shared 18/20 tire result adjacent to the limitation on fast-weight attribution.
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

## `rttt_limitations_p1`

- Location: `rttt_limitations`, paragraph 1
- Text anchor: "The authors note that longer-context training costs more, the TTT objective is not designed"
- Claims and sources: `rttt_latency_limit`, `rttt_generality`, `rttt_limits_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: The authors note that longer-context training costs more, the TTT objective is not designed specifically for robotics, and the policy still fails in deployment. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
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

## `rttt_limitations_p2`

- Location: `rttt_limitations`, paragraph 2
- Text anchor: "Trial counts are 20 per task, or 10 for the longest settings, without reported"
- Claims and sources: `rttt_latency_limit`, `rttt_generality`, `rttt_limits_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: Trial counts are 20 per task, or 10 for the longest settings, without reported confidence intervals. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
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

## `rttt_review_p1`

- Location: `rttt_review`, paragraph 1
- Text anchor: "The mechanism is well matched to the problem: recurrent fast weights provide a fixed-size"
- Claims and sources: `rttt_scaling`, `rttt_component_ablation`, `rttt_memory_interpretation`, `rttt_latency_limit`, `rttt_generality`, `rttt_results_source`, `rttt_limits_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: The mechanism is well matched to the problem: recurrent fast weights provide a fixed-size state, while the scaling curve and component ablations connect longer training context and nonlinear fast models to better task completion on the evaluated setup. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
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

## `rttt_review_p2`

- Location: `rttt_review`, paragraph 2
- Text anchor: "The evidence is not yet a broad demonstration of robot-foundation-model scaling. A second backbone,"
- Claims and sources: `rttt_scaling`, `rttt_component_ablation`, `rttt_memory_interpretation`, `rttt_latency_limit`, `rttt_generality`, `rttt_results_source`, `rttt_limits_source`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: The evidence is not yet a broad demonstration of robot-foundation-model scaling. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
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
