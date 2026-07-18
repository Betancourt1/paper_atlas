# 08 — Roadmap y criterios de aceptación

## M0 — Contratos y esqueleto

Entregables:

- monorepo;
- `AGENTS.md` jerárquicos;
- `design.md`;
- ADR-001 arquitectura;
- Docker Compose;
- CI base;
- schemas iniciales;
- fixtures de papers.

Aceptación:

- `make bootstrap`, `make dev`, `make check` funcionan desde clone limpio;
- un schema se genera para TypeScript y Python;
- observabilidad local visible.

## M1 — Ingesta y parsing

Entregables:

- upload presigned y URL ingestion;
- validación/SSRF/dedupe;
- Temporal workflow;
- Docling/GROBID;
- visor de bloques y bounding boxes;
- `PaperDocument v1`.

Aceptación:

- corpus de al menos 25 papers heterogéneos;
- metadata y secciones evaluadas;
- errores por página visibles;
- retries y cancelación.

## M2 — Índice público tipo Papers with Code

Entregables:

- paper list/search;
- paper detail de metadata;
- tasks, methods, datasets, benchmarks;
- code links;
- lineage básico;
- SEO, sitemap y OG.

Aceptación:

- navegación cruzada completa;
- búsqueda híbrida;
- carga pública rápida;
- URLs estables.

## M3 — Evidence graph y explicación estática

Entregables:

- agents iniciales;
- claim ledger;
- outline pedagógico;
- `ExplainerDocument`;
- renderer de bloques;
- modos 5/20/deep;
- editor y review.

Aceptación:

- toda afirmación sustantiva tiene source refs;
- revisión abre el fragmento correcto;
- cifras críticas verificadas;
- publicación sólo tras aprobación.

## M4 — Registro de artefactos

Entregables:

- `ArchitectureStepper`;
- `ResultExplorer`;
- `EvidenceMatrix`;
- schema y renderer;
- fallbacks;
- Playwright y visual regression.

Aceptación:

- controles cambian estado real;
- valor inicial reproduce evidencia;
- funciona teclado/móvil/reduced motion;
- no console errors.

## M5 — Crítica, calidad y traducción

Entregables:

- skeptical reviewer;
- entailment/contradiction;
- consistency de ecuaciones;
- traducción con terminología;
- dashboards de eval/costo;
- corpus dorado ampliado.

Aceptación:

- cero cifras no sustentadas en corpus dorado;
- cobertura de citas definida y monitorizada;
- comparación antes/después de cambios de prompts.

## M6 — Artefactos custom en sandbox

Entregables:

- workspace aislado;
- allowlist de dependencias;
- manifest;
- build/test/screenshot/SBOM;
- promoción al registro.

Aceptación:

- sin red ni secrets;
- time/memory limits;
- no publicación sin revisión;
- rollback de componente.

## M7 — Mantenimiento continuo

Entregables:

- watchers de revisión y links;
- impact analysis;
- regeneración por bloques;
- tareas Codex de mantenimiento;
- runbooks y SLOs.

Aceptación:

- revisión nueva crea candidato, no sobrescribe;
- links rotos generan issue;
- drift de parser y prompts se detecta en evals.

## Orden de implementación de slices

1. `Paper` + API + UI de fixture.
2. Ingesta URL + run status.
3. Parsing de un paper dorado.
4. Visor fuente con anclas.
5. Claim ledger manual.
6. Explainer AST manual y renderer.
7. Generación de claims.
8. Escritura desde claims aprobadas.
9. Revisión y publicación.
10. Primer artefacto.
11. Búsqueda y taxonomía.
12. Mantenimiento.

## Presupuestos de calidad iniciales

- 100% de bloques factual/numéricos con source refs;
- >=98% de coverage de claims sustantivas después de revisión;
- 0 errores de schema;
- 0 errores de consola en rutas críticas;
- 0 violaciones axe críticas;
- LCP público objetivo <=2.5 s en perfil acordado;
- bundle interactivo por paper cargado bajo demanda;
- todos los artefactos con fallback;
- ningún publish sin human approval.

