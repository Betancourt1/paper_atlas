# 07 — Skills para Codex y para el pipeline editorial

## 1. Skills externas: usar, no reescribir

Instalarlas en scope de proyecto y fijar commit o versión para evitar drift silencioso.

### OpenAI `build-web-apps / frontend-app-builder`

Uso: concept design, sistema visual, implementación fiel y QA en navegador.

Se recomienda instalar el plugin oficial `build-web-apps` desde el marketplace/plugin repository de OpenAI, no copiar el texto de la skill al repo.

### Vercel `react-best-practices`

Uso: revisión de performance React/Next.js, waterfalls, bundle, server/client boundaries y re-rendering.

```bash
npx skills add vercel-labs/agent-skills \
  --skill react-best-practices \
  --agent codex \
  --yes
```

### Vercel `web-design-guidelines`

Uso: auditoría de HTML, CSS, accesibilidad, formularios, foco, movimiento, tipografía, navegación y responsive.

```bash
npx skills add vercel-labs/agent-skills \
  --skill web-design-guidelines \
  --agent codex \
  --yes
```

### shadcn `shadcn`

Uso: composición correcta de componentes, tokens semánticos, formularios y accesibilidad en la consola editorial.

```bash
npx skills add \
  https://github.com/shadcn-ui/ui/tree/main/skills/shadcn \
  --agent codex \
  --yes
```

### Anthropic `frontend-design`

Uso: exploración de dirección visual y rechazo de interfaces genéricas. No debe dominar la implementación ni autorizar copiar el branding de Anthropic.

```bash
npx skills add \
  https://github.com/anthropics/skills/tree/main/skills/frontend-design \
  --agent codex \
  --yes
```

### Precedencia

1. `design.md` y requisitos del proyecto.
2. OpenAI `frontend-app-builder` para flujo completo y visual QA.
3. Anthropic `frontend-design` sólo durante concepting.
4. shadcn para composición de componentes existentes.
5. Vercel `web-design-guidelines` como audit gate.
6. Vercel `react-best-practices` como performance gate.

No se recomienda instalar una skill genérica de CSS/HTML de autor desconocido sólo para llenar una categoría. Las skills oficiales anteriores cubren diseño, semántica, CSS, accesibilidad y React con menor riesgo de instrucciones deficientes.

## 2. Skills de dominio que sí debe contener el proyecto

Estas no sustituyen skills de frontend; codifican el estándar editorial y científico propio.

### `paper-explainer-writing`

Entrada:

- claims aprobadas;
- audiencia;
- idioma;
- outline;
- terminología.

Salida:

- bloques de AST;
- claim IDs usados;
- dudas no resueltas.

Reglas:

- una sección responde una pregunta;
- no hype;
- voz directa;
- explicar mecanismo antes de resultados;
- separar observado, interpretación e inferencia;
- incluir limitaciones junto a la afirmación relevante;
- no inventar analogías;
- glosario consistente.

### `evidence-ledger`

Reglas:

- claims atómicas;
- una o más `SourceRef`;
- cifras descompuestas;
- distinción entre texto, tabla, figura y ecuación;
- rechazo de fuentes vagas como “el paper dice”.

### `visual-artifact-spec`

Reglas:

- pregunta pedagógica explícita;
- preferir registro;
- datos con source refs;
- estado por defecto reproducible;
- limitaciones;
- fallback estático;
- accesibilidad;
- test plan.

### `taxonomy-curation`

Reglas:

- diferenciar `introduces`, `uses`, `extends` y `evaluates_on`;
- no tratar todo sustantivo como método;
- resolver aliases;
- evidencia y confianza;
- evitar duplicados.

### `skeptical-review`

Checklist:

- qué evidencia falsaría el claim;
- baseline y comparabilidad;
- tamaño y composición de muestra;
- leakage;
- múltiples comparaciones;
- intervalos;
- costo;
- evaluación propia vs independiente;
- generalización;
- causalidad;
- contradicción con literatura citada.

### `publication-release`

Gates:

- AST válido;
- claims aprobadas;
- coverage threshold;
- links;
- licencias;
- artefactos verificados;
- screenshots;
- accesibilidad;
- historial de cambios;
- rollback.

## 3. Anatomía de cada skill interna

```text
skills/<name>/
├── SKILL.md
├── references/
│   ├── rubric.md
│   ├── examples-good.md
│   └── examples-bad.md
├── schemas/
├── scripts/
└── tests/
```

El cuerpo principal debe ser corto. Detalles, ejemplos y rubrics se cargan progresivamente.

## 4. Versionado y evals

Cada cambio de skill:

- incrementa versión;
- ejecuta corpus dorado;
- compara coverage, factualidad, claridad, costo y longitud;
- guarda outputs;
- requiere revisión cuando empeora un eje crítico.

