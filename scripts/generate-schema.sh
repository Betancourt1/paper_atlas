#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
export UV_CACHE_DIR="${UV_CACHE_DIR:-$project_root/.uv-cache}"

generate_schema() {
  local schema="$1"
  local ts_output="$2"
  local py_output="$3"
  local banner_source="$4"

  mkdir -p "$(dirname "$ts_output")" "$(dirname "$py_output")"

  pnpm --dir "$project_root/packages/content-schema" exec json2ts \
    --input "$schema" \
    --output "$ts_output" \
    --bannerComment "/* Generated from $banner_source. Do not edit directly. */"

  uv run --project "$project_root" datamodel-codegen \
    --input "$schema" \
    --input-file-type jsonschema \
    --output "$py_output" \
    --output-model-type pydantic_v2.BaseModel \
    --target-python-version 3.12 \
    --use-standard-collections \
    --use-union-operator \
    --use-annotated \
    --extra-fields forbid \
    --formatters black isort \
    --disable-timestamp
}

generate_schema \
  "$project_root/packages/content-schema/schema/paper-summary.schema.json" \
  "${TS_OUTPUT:-$project_root/packages/content-schema/src/generated/paper-summary.ts}" \
  "${PY_OUTPUT:-$project_root/apps/api/src/paper_atlas_api/generated/paper_summary.py}" \
  "paper-summary.schema.json"

generate_schema \
  "$project_root/packages/content-schema/schema/explainer-document.schema.json" \
  "${EXPLAINER_TS_OUTPUT:-$project_root/packages/content-schema/src/generated/explainer-document.ts}" \
  "${EXPLAINER_PY_OUTPUT:-$project_root/apps/api/src/paper_atlas_api/generated/explainer_document.py}" \
  "explainer-document.schema.json"
