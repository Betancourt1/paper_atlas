# 06 — Diseño de API

## 1. Convenciones

- prefijo `/v1`;
- JSON:API-like, sin adoptar toda la especificación;
- IDs opacos;
- timestamps UTC ISO 8601;
- `Idempotency-Key` obligatorio en creates;
- `202 Accepted` para pipelines asíncronos;
- Problem Details para errores;
- paginación cursor-based;
- ETags en recursos públicos;
- audit event por write;
- API keys hasheadas y scopes.

## 2. Ingesta por URL

```http
POST /v1/papers
Idempotency-Key: 0d2...
Content-Type: application/json
```

```json
{
  "source": {
    "type": "url",
    "url": "https://arxiv.org/abs/..."
  },
  "output_languages": ["es", "en"],
  "audience": "TECHNICAL_GENERALIST",
  "publication_policy": "REVIEW_REQUIRED",
  "requested_artifacts": "AUTO"
}
```

Respuesta:

```json
{
  "paper_id": "paper_...",
  "run_id": "run_...",
  "status": "RECEIVED",
  "status_url": "/v1/runs/run_..."
}
```

## 3. Ingesta por PDF

```text
POST /v1/uploads/presign
PUT  <presigned URL>
POST /v1/papers/from-upload
```

También puede existir multipart para clientes sencillos, pero el flujo presigned evita hacer pasar archivos grandes por el API principal.

## 4. Runs

```text
GET  /v1/runs/{run_id}
GET  /v1/runs/{run_id}/events       # SSE
POST /v1/runs/{run_id}/cancel
POST /v1/runs/{run_id}/retry
```

Respuesta resumida:

```json
{
  "id": "run_...",
  "status": "VERIFYING",
  "current_stage": "numeric_consistency",
  "progress": 0.74,
  "stages": [],
  "cost": {"currency": "USD", "amount": "1.82"},
  "warnings": []
}
```

## 5. Papers

```text
GET  /v1/papers/{paper_id}
GET  /v1/papers/{paper_id}/versions
GET  /v1/papers/{paper_id}/document
GET  /v1/papers/{paper_id}/claims
GET  /v1/papers/{paper_id}/entities
GET  /v1/papers/{paper_id}/artifacts
POST /v1/papers/{paper_id}/regenerate
POST /v1/papers/{paper_id}/refresh-source
```

La regeneración recibe scope explícito:

```json
{
  "scope": {
    "type": "BLOCKS",
    "ids": ["block_17", "block_19"]
  },
  "reason": "Reviewer requested a clearer explanation",
  "preserve_approved_claims": true
}
```

## 6. Revisión

```text
POST /v1/claims/{claim_id}/approve
POST /v1/claims/{claim_id}/reject
PATCH /v1/claims/{claim_id}
POST /v1/explainers/{id}/request-changes
POST /v1/explainers/{id}/approve
POST /v1/explainers/{id}/publish
```

Publicar requiere precondiciones:

```http
If-Match: "explainer-version-etag"
```

## 7. Search y taxonomía

```text
GET /v1/search?q=&type=&task=&method=&dataset=&year=&has_code=
GET /v1/tasks
GET /v1/tasks/{slug}
GET /v1/methods
GET /v1/methods/{slug}
GET /v1/datasets
GET /v1/benchmarks
GET /v1/authors/{id}
GET /v1/collections/{slug}
```

## 8. Artefactos

```text
POST /v1/papers/{paper_id}/artifact-plans
POST /v1/artifacts/{artifact_id}/render
POST /v1/artifacts/{artifact_id}/verify
POST /v1/artifacts/{artifact_id}/promote
GET  /v1/artifacts/{artifact_id}/qa
```

`promote` está restringido a artefactos custom y requiere revisión humana.

## 9. Webhooks

Eventos:

```text
paper.run.started
paper.run.stage_completed
paper.run.failed
paper.review_required
paper.published
paper.source_revision_detected
artifact.verification_failed
```

Cada webhook incluye ID, timestamp, version y firma HMAC. Entrega con retries y registro de intentos.

## 10. Auth y scopes

```text
papers:read
papers:write
runs:read
runs:cancel
review:read
review:write
publish:write
artifacts:promote
admin:taxonomy
```

API pública de lectura puede ser anónima con rate limits. Ingesta y writes requieren identidad.

