# Paper Atlas — blueprint de producto, contenido y agentes

**Nombre de trabajo:** Paper Atlas  
**Objetivo:** recibir un paper por URL o PDF, indexarlo como objeto científico estructurado y publicar una explicación web interactiva, verificable y versionada.

Este paquete no describe un simple “resumidor de PDFs”. Define dos productos que comparten plataforma:

1. **Índice científico público:** papers, métodos, tareas, datasets, benchmarks, resultados, repositorios, linaje y búsqueda.
2. **Fábrica editorial asistida por agentes:** ingesta, extracción, análisis, redacción, generación de artefactos, verificación, revisión humana, publicación y mantenimiento.

## Decisiones no negociables

- El LLM no genera una aplicación React arbitraria por paper.
- El contenido canónico es un AST tipado y versionado, no MDX libre.
- Toda afirmación sustantiva conserva referencias exactas al documento fuente.
- Los artefactos interactivos normales se construyen desde un registro de componentes aprobados.
- El código visual nuevo se ejecuta en sandbox, se prueba y requiere revisión antes de entrar al registro.
- Ninguna primera generación se publica automáticamente.
- El workflow exterior es determinista; los agentes trabajan dentro de etapas con contratos estructurados.
- Un paper y su explicación nunca se sobrescriben: se crean versiones.
- El texto del PDF se trata como entrada no confiable y nunca como instrucciones para los agentes.

## Lectura recomendada

1. `01-product-spec.md`
2. `architecture.md`
3. `content-model.md`
4. `agent-harness.md`
5. `design.md`
6. `api.md`
7. `codex-harness.md`
8. `skills.md`
9. `roadmap.md`
10. `CODEX_BOOTSTRAP_PROMPT.md`

## Stack elegido

- **Monorepo:** pnpm + Turborepo
- **Web:** Next.js App Router + TypeScript + Tailwind CSS + shadcn/ui para chrome y consola editorial
- **API:** FastAPI + Pydantic + SQLAlchemy 2 + Alembic
- **Workers:** Python + Temporal SDK + OpenAI Agents SDK
- **Parsing:** Docling como parser principal; GROBID como extractor académico complementario
- **Base de datos:** PostgreSQL + pgvector
- **Objetos:** S3/R2 en producción; MinIO en local
- **QA web:** Playwright + axe + pruebas de regresión visual
- **Observabilidad:** OpenTelemetry, Sentry y trazas del Agents SDK con captura sensible desactivada

## Primer corte de alcance

El MVP no debe intentar cubrir todo Papers with Code. Debe resolver bien:

- URL de arXiv o PDF subido.
- Metadata, secciones, figuras, tablas, ecuaciones y referencias.
- Una página pública de paper.
- Una explicación editorial con referencias de origen.
- Tres tipos de artefacto: `ArchitectureStepper`, `ResultExplorer` y `EvidenceMatrix`.
- Flujo de revisión humana.
- API asíncrona y estado de procesamiento.
- Búsqueda por título, autor, tarea, método y texto semántico.

