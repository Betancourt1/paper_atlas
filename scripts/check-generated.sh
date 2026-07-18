#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
scratch="$(mktemp -d)"
trap 'rm -rf "$scratch"' EXIT

TS_OUTPUT="$scratch/paper-summary.ts" \
PY_OUTPUT="$scratch/paper_summary.py" \
  bash "$project_root/scripts/generate-schema.sh"

cmp "$scratch/paper-summary.ts" \
  "$project_root/packages/content-schema/src/generated/paper-summary.ts"
cmp "$scratch/paper_summary.py" \
  "$project_root/apps/api/src/paper_atlas_api/generated/paper_summary.py"
