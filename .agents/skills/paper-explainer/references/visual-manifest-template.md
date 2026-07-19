# Visual manifest contract

Create one manifest per explainer at
`docs/visual-manifests/VISUAL_MANIFEST_{PAPER_NAME}.md`, where `PAPER_NAME` is
the uppercase stable paper slug. The manifest is an editorial artifact and is
versioned with the explainer.

## Required header

Record the paper ID, exact paper version, explainer fixture, evidence sources,
manifest revision, engineer status, implementer status, and the paragraph-ID
derivation rule. Paragraph IDs must be stable and map one-to-one to rendered
prose paragraphs.

## Required paragraph record

Repeat this structure for every prose paragraph, including prose-only decisions:

```markdown
## `{paragraph_id}`

- Location: `{block_id}`, paragraph {number}
- Text anchor: "{short excerpt}"
- Claims and sources: `{claim_ids and source references}`
- Visual needed: `YES | NO`
- Decision rationale: {why a visual reduces reconstruction or why prose wins}
- Explanatory job: {process, architecture, comparison, uncertainty, etc.}

### Treatment A — {distinct concept}

- Teaching purpose:
- Encoding and reading order:
- Evidence and limitations:
- Recommended web medium: `SVG | CSS | JavaScript | HTML | source asset`
- Mobile, accessibility, and motion behavior:

#### TikZ
```tex
% Complete minimal, compilable example
```

#### Mermaid
```mermaid
%% Complete minimal diagram
```

#### Python
```python
# Complete minimal example that writes the proposed visual asset
```

### Treatment B — {distinct concept}

{Repeat all Treatment A fields and all three code examples.}

### Treatment C — {distinct concept}

{Repeat all Treatment A fields and all three code examples.}

### Implementation record

- Status: `PENDING | NOT_NEEDED | IMPLEMENTED | REWORK_REQUIRED`
- Selected treatment: `A | B | C | NONE`
- Selection rationale:
- Delivery medium: `SVG | CSS | JavaScript | HTML | generated asset | NONE`
- Visual ID and placement:
- Shared paragraph scope: `NONE` or the complete list of paragraph IDs served
- Changed files:
- Accessibility and fallback verification:
- Desktop and mobile verification:
- Evidence deviations: `NONE` or an explicit blocker returned to the engineer
```

The three treatments must be meaningfully different explanatory approaches,
not palette, orientation, or decoration variants. The three code forms are
reproducible specifications for each treatment; the implementer may translate
the selected treatment into CSS, JavaScript, or SVG when that is the clearest
web delivery.

A treatment is not acceptable when the same topology and wording could be used
for an unrelated paragraph by substituting labels. Use content-specific marks,
relationships, and data with concise complete labels; never put ellipsized
source prose into a visual. A single implemented visual may cover adjacent YES
paragraphs only when each record names the shared paragraph scope and points to
the same visual ID.

## QA report

`VISUAL_QA` writes a separate report at
`docs/visual-manifests/qa/VISUAL_QA_{PAPER_NAME}.md`. It must contain the input
revision and, for every paragraph ID, an engineer score, implementer score,
evidence for each score, and actionable findings. It ends with separate
aggregate scores for `data_visualization_engineer` and `visual_implementer`.
The QA report never changes the manifest or implementation.
