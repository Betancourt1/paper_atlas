#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
scratch="$(mktemp -d)"
trap 'rm -rf "$scratch"' EXIT

TS_OUTPUT="$scratch/paper-summary.ts" \
PY_OUTPUT="$scratch/paper_summary.py" \
EXPLAINER_TS_OUTPUT="$scratch/explainer-document.ts" \
EXPLAINER_PY_OUTPUT="$scratch/explainer_document.py" \
  bash "$project_root/scripts/generate-schema.sh"

cmp "$scratch/paper-summary.ts" \
  "$project_root/packages/content-schema/src/generated/paper-summary.ts"
cmp "$scratch/paper_summary.py" \
  "$project_root/apps/api/src/paper_atlas_api/generated/paper_summary.py"
cmp "$scratch/explainer-document.ts" \
  "$project_root/packages/content-schema/src/generated/explainer-document.ts"
cmp "$scratch/explainer_document.py" \
  "$project_root/apps/api/src/paper_atlas_api/generated/explainer_document.py"
