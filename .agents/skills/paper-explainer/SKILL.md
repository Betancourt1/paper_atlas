---
name: paper-explainer
description: Research, plan visuals for, write, revise, or review a source-backed Paper Atlas paper explainer. Use for requests involving adding or trying papers, summarizing a paper, explaining research, creating paper figures or animations, changing explainer content, or preparing a paper for publication. Do not use for code-only site maintenance that cannot affect scientific content or publication state.
---

# Paper Explainer

Build a paper explainer through explicit evidence, visual, writing, and review
handoffs. Never substitute indexed metadata for an explanation.

## Start correctly

1. Read `references/publication-contract.md` in full.
2. Identify the requested outcome: index-only, explainer draft, revision, or
   publication candidate.
3. Treat “add/try these papers” in an explainer context as a full explainer
   request unless the user explicitly asks for indexing only.
4. If the available milestone cannot deliver the requested outcome, state the
   gap before changing files. Do not silently reduce scope.

## Run the editorial lane

For a new or materially changed explainer, coordinate these project agents in
order:

1. `paper_researcher` establishes the paper version and evidence dossier.
2. `visual_editor` produces the visual plan from approved claims.
3. `explainer_writer` writes typed content from those two inputs.
4. `publication_reviewer` independently evaluates the complete candidate.

Do not ask the writer to research missing claims or the reviewer to repair the
draft. Return failed stages to their owner. For a narrow revision, rerun only
the affected upstream stages, but always rerun publication review.

## Preserve the site/editorial boundary

Use `site_maintainer` only after editorial artifacts are ready when code or UI
integration is needed. It may render approved content but may not rewrite it.
Use `site_reviewer` for user-visible integration and publication-label checks.

An index record may contain metadata and an abstract-derived description, but
must be labeled `Indexed` or `Explainer pending`. Only a human-approved release
candidate may be labeled `Published`.

## Finish with evidence

Report the paper version, completed stages, unresolved evidence gaps, review
verdict, and exact user-visible state. Do not claim completion based only on a
valid schema, passing build, or existing route.
