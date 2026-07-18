# 03 — Modelo de contenido y procedencia

## 1. Razón para un AST tipado

MDX libre mezcla contenido, código y presentación. Eso dificulta:

- validar procedencia;
- migrar componentes;
- traducir;
- comparar versiones;
- impedir código no confiable;
- garantizar accesibilidad;
- renderizar en clientes futuros.

El contenido canónico debe ser JSON validado por un schema y renderizado por componentes conocidos.

## 2. Entidades principales

- `Paper`
- `PaperVersion`
- `SourceAsset`
- `Author`
- `Organization`
- `Venue`
- `Section`
- `Figure`
- `Table`
- `Equation`
- `Reference`
- `CitationContext`
- `Claim`
- `EvidenceSpan`
- `Method`
- `Task`
- `Dataset`
- `Benchmark`
- `Metric`
- `ReportedResult`
- `Repository`
- `ModelArtifact`
- `Explainer`
- `ExplainerVersion`
- `InteractiveArtifact`
- `GenerationRun`
- `EditorialReview`
- `Publication`

## 3. `SourceRef`

Toda afirmación o dato usa una o más referencias precisas:

```json
{
  "paper_version_id": "pv_...",
  "source_asset_id": "asset_pdf_...",
  "page": 11,
  "section_path": ["4", "4.2"],
  "block_id": "blk_01HV...",
  "char_start": 184,
  "char_end": 397,
  "bbox": [0.13, 0.22, 0.88, 0.41],
  "figure_id": null,
  "table_id": "table_3",
  "quote_hash": "sha256:..."
}
```

Los offsets ayudan a detectar drift entre revisiones. `quote_hash` prueba qué texto sustentó la afirmación sin tener que publicar el pasaje completo.

## 4. Ledger de afirmaciones

```json
{
  "id": "claim_...",
  "text": "TRACE mejora el crédito intermedio sin un crítico aprendido.",
  "claim_type": "AUTHORS_INTERPRETATION",
  "importance": "CORE",
  "confidence": 0.87,
  "source_refs": ["src_1", "src_2"],
  "verifications": [
    {
      "check": "ENTAILMENT",
      "status": "PASS",
      "model": "...",
      "run_id": "run_..."
    }
  ],
  "editor_status": "APPROVED"
}
```

## 5. `ExplainerDocument`

```json
{
  "schema_version": "1.0.0",
  "paper_id": "paper_...",
  "paper_version_id": "pv_...",
  "language": "es",
  "audience": "TECHNICAL_GENERALIST",
  "title": "...",
  "central_claim": {
    "text": "...",
    "claim_id": "claim_..."
  },
  "reading_paths": {
    "FIVE_MIN": ["block_1", "block_3", "block_7"],
    "TWENTY_MIN": ["block_1", "block_2", "block_3", "block_5", "block_7"],
    "DEEP": ["*"]
  },
  "blocks": [],
  "glossary": [],
  "revision_notes": []
}
```

## 6. Unión discriminada de bloques

```text
PaperHero
TLDR
WhyItExists
QuestionSection
Prose
ClaimBlock
SourceFigure
SourceTable
Equation
MethodStepper
ArchitectureStepper
PipelineFlow
ResultExplorer
AblationExplorer
EvidenceMatrix
BenchmarkScatter
MethodComparison
RepositoryPanel
DatasetPanel
Caveat
NotEstablished
CriticalReview
Glossary
Checkpoint
References
VersionHistory
```

Todos los bloques incluyen:

- `id` estable;
- `type`;
- `source_refs`;
- `reading_depths`;
- `provenance`;
- `accessibility`;
- `editorial_status`.

## 7. Artefactos

Un artefacto es configuración y datos, no JSX generado:

```json
{
  "type": "AblationExplorer",
  "registry_version": "1.4.0",
  "question": "¿Qué componente explica la mayor parte de la mejora?",
  "data": {
    "rows": [
      {"label": "Full", "score": 42.6, "source_ref": "src_table_2_row_1"},
      {"label": "No dense reward", "score": 19.4, "source_ref": "src_table_2_row_4"}
    ]
  },
  "controls": ["metric", "model"],
  "default_state": {"metric": "accuracy", "model": "30B"},
  "limitations": ["Las filas reproducen resultados reportados; no reejecutan el experimento."],
  "fallback": {"type": "table"}
}
```

## 8. Taxonomía

Relaciones explícitas:

```text
Paper --addresses--> Task
Paper --introduces|uses|extends--> Method
Paper --evaluates_on--> Dataset
Paper --reports--> ReportedResult
ReportedResult --for--> Benchmark
ReportedResult --uses--> Metric
Paper --implements_as--> Repository
Paper --precedes|extends|replicates|criticizes--> Paper
```

Cada relación automática tiene:

- evidencia;
- confianza;
- estado de revisión;
- método de resolución;
- historial.

## 9. Ciclo editorial

Estados de documento:

```text
DRAFT_GENERATED
DRAFT_VERIFIED
REVIEW_REQUIRED
CHANGES_REQUESTED
APPROVED
PUBLISHED
SUPERSEDED
RETRACTED
```

Estados del paper:

```text
RECEIVED
ACQUIRING
PARSED
ENRICHED
DRAFTING
VERIFYING
REVIEW_REQUIRED
PUBLISHED
FAILED_RETRYABLE
FAILED_TERMINAL
```

