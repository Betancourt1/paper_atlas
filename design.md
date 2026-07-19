# design.md — Sistema visual y de interacción

## 1. Tesis visual

**Un índice científico preciso que se abre como un ensayo editorial interactivo.**

La interfaz combina la jerarquía utilitaria de Papers with Code con la lectura cálida, espaciosa y basada en evidencia de Anthropic Research. No debe parecer un dashboard SaaS ni un clon de Anthropic.

## 2. Principios

1. **Narrativa primero; evidencia inmediatamente después.**
2. **Densidad donde se compara; espacio donde se comprende.**
3. **Una escena visual por mecanismo.**
4. **Interacción para exponer causalidad, sensibilidad o comparación; nunca como ornamento.**
5. **La procedencia debe ser visible sin interrumpir la lectura.**
6. **Los estados epistemológicos tienen tratamiento semántico estable.**
7. **El paper sigue siendo la autoridad; la explicación es una interpretación trazable.**

## 3. Personalidad

- editorial;
- científica;
- sobria;
- cálida sin nostalgia artificial;
- precisa sin parecer documentación empresarial;
- ligeramente material: papel, tinta, reglas finas, diagramas de laboratorio;
- sin futurismo genérico.

## 4. Paleta

```css
:root {
  --canvas: #f6f4ee;
  --surface: #fffdf8;
  --surface-subtle: #efede6;
  --ink: #171714;
  --ink-muted: #66645e;
  --line: #d9d5cb;
  --line-strong: #aaa69d;

  --accent: #2f5ea8;       /* mecanismo / acción */
  --evidence: #4f6b4a;     /* observado / respaldado */
  --warning: #a44e36;      /* limitación / contradicción */
  --hypothesis: #a47722;   /* inferencia / hipótesis */
  --code: #252522;

  --focus: #2459b3;
}
```

Reglas:

- El color no separa secciones decorativamente; codifica función.
- No se copia el naranja corporativo de Anthropic.
- No hay gradientes púrpura, neón, glassmorphism ni fondos espaciales.
- El modo oscuro es secundario; debe mantener semántica y contraste, no invertir colores sin criterio.

## 5. Tipografía

- **UI, navegación y encabezados:** `Source Sans 3` o `Instrument Sans`.
- **Lectura larga:** `Source Serif 4`.
- **Código, variables, prompts y trazas:** `IBM Plex Mono`.

Reglas:

- máximo tres familias;
- ancho de párrafo entre 62 y 76 caracteres;
- cuerpo base de 18 px en desktop y 17 px en móvil;
- line-height de 1.62–1.72 para prosa;
- encabezados sin tracking negativo agresivo;
- números tabulares en resultados;
- símbolos matemáticos con KaTeX y fallbacks compatibles.

Escala sugerida:

```text
Display       clamp(2.8rem, 6vw, 5.8rem)
H1 paper      clamp(2.2rem, 4vw, 4.4rem)
H2 question   clamp(1.75rem, 2.5vw, 2.6rem)
H3            1.35rem
Body          1.125rem
UI            0.9375rem
Caption       0.8125rem
Mono detail   0.875rem
```

## 6. Layout

- Grid de 12 columnas.
- Contenedor máximo: 1280 px.
- Prosa: 720–760 px.
- Figura ancha: 1080–1160 px.
- Rail contextual: 240–280 px.
- Gutter desktop: 32 px; tablet: 24 px; móvil: 18 px.
- Escala espacial: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Radios: 4, 8 y 12 px. Nunca radio 24 px por defecto.
- Sombras casi inexistentes; se prefieren bordes, contraste de superficie y espacio.

## 7. Estructura global

### Header

- marca;
- búsqueda;
- navegación: Papers, Tasks, Methods, Benchmarks, Collections;
- acción discreta “Add paper”;
- cuenta.

No contiene métricas, badges decorativos ni múltiples CTAs.

### Página de índice

Papers with Code inspira:

- tablas y listas comparables;
- filtros persistentes;
- tareas, métodos, datasets y métricas como entidades navegables;
- código, modelos y resultados visibles;
- linaje y referencias cruzadas.

La portada no debe ser una cuadrícula de tarjetas idénticas. Usará una mezcla de:

- lista editorial principal;
- tiras por tarea;
- tablas de benchmark;
- colecciones curadas;
- un bloque de “papers que cambiaron de posición” o “revisiones nuevas”.

### Página de paper

La cabecera usa tres zonas:

1. metadata pequeña y accionable;
2. título y tesis central;
3. acciones: PDF, code, save, cite y version history.

Debajo aparece el selector:

```text
5 min | 20 min | Deep dive | Original
```

La explicación usa una columna de prosa y un rail sticky que muestra:

- índice de preguntas;
- leyenda epistemológica;
- progreso de lectura;
- referencias activas de la escena visible.

## 8. Componentes editoriales

### `QuestionSection`

Título formulado como pregunta investigable. Debajo puede mostrar la denominación original de la sección del paper.

### `ClaimBlock`

Incluye:

- afirmación;
- estado epistemológico;
- confianza del pipeline;
- enlaces a evidencia;
- historial de correcciones.

### `SourceAnchor`

Chip textual discreto, no pill decorativo. Ejemplo: `§4.2 · p. 11 · Table 3`.

### `CaveatBlock`

Borde izquierdo rust, título explícito y texto normal. No usa un icono de alerta enorme.

### `MethodCard`

Permitida porque la entidad es navegable y comparable. Debe contener definición, paper de origen, año y relaciones; no marketing.

### `RepositoryPanel`

Muestra repositorio, licencia, última verificación, lenguaje, instrucciones mínimas y estado de reproducibilidad. No inventa “reproducible” sólo porque exista código.

### `BenchmarkTable`

Sticky headers, métricas con dirección explícita, intervalos cuando existan, fuente por fila y selección de baseline.

## 9. Estados epistemológicos

Estos estados aparecen en color, etiqueta y texto accesible:

- **OBSERVED:** medición o resultado directamente reportado.
- **AUTHORS_INTERPRETATION:** explicación de los autores.
- **EXPLAINER_INFERENCE:** inferencia añadida por Paper Atlas.
- **NOT_ESTABLISHED:** conclusión plausible que la evidencia no demuestra.
- **DISPUTED:** evidencia o literatura relevante en conflicto.

Nunca se comunica un estado únicamente mediante color.

## 10. Artefactos interactivos

Todos los artefactos obedecen esta anatomía:

1. pregunta que responde;
2. controles mínimos;
3. estado/resultado visible;
4. interpretación corta;
5. fuentes;
6. limitaciones de la simulación;
7. texto alternativo completo.

Registro inicial:

- `ArchitectureStepper`
- `PipelineFlow`
- `ResultExplorer`
- `AblationExplorer`
- `EvidenceMatrix`
- `MethodComparison`
- `BenchmarkScatter`
- `RetrievalTimeline`
- `TokenTrace`
- `EquationPlayground`

Reglas:

- Un artefacto manipula valores extraídos o una simulación marcada como tal.
- No se dibuja una red neuronal genérica si no corresponde al método.
- Los valores por defecto reproducen una figura, tabla o ejemplo identificable.
- Cada estado relevante tiene prueba Playwright.
- Debe funcionar con teclado.
- Debe ofrecer una representación estática equivalente.

## 11. Movimiento

- 120–220 ms para cambios de UI;
- 240–450 ms para transiciones explicativas;
- easing sobrio;
- sin scroll hijacking;
- sin parallax por defecto;
- animar sólo cambio de estado, causalidad, secuencia o foco;
- respetar `prefers-reduced-motion`.

## 12. Responsive

En móvil:

- el rail pasa a drawer o índice inline;
- tablas pueden cambiar a filas apiladas, pero conservan comparabilidad;
- las figuras caben completas sin scroll interno ni overflow de página; usan
  viewBox responsivo, escalado proporcional o una variante móvil con reflow o
  paneles semánticos, sin reducir etiquetas y relaciones hasta ser ilegibles;
- controles táctiles de al menos 44 × 44 px;
- no se ocultan fuentes ni caveats.

## 13. Accesibilidad

- WCAG 2.2 AA como base;
- skip links;
- foco visible;
- landmarks semánticos;
- encabezados jerárquicos;
- SVG con título/desc cuando corresponde;
- charts con tabla o descripción equivalente;
- artefactos operables sin pointer;
- pruebas axe en CI;
- lectura correcta con zoom a 200%;
- idioma y dirección declarados por documento.

## 14. Anti-patrones prohibidos

- bento grid por defecto;
- mosaico de cards para toda la información;
- hero con estadísticas inventadas;
- glassmorphism;
- gradientes púrpura/azul genéricos;
- Inter en todo el producto;
- iconos ornamentales;
- pills para cada sustantivo;
- diagramas “AI” de nodos luminosos;
- animaciones que no cambian comprensión;
- texto generado dentro de imágenes;
- esconder limitaciones en un acordeón cerrado;
- usar color como única marca de certeza;
- copiar exactamente el branding de Anthropic.

## 15. QA visual obligatorio

Cada PR visual debe incluir:

- screenshot desktop de página índice;
- screenshot desktop de página paper;
- screenshot móvil;
- estado interactivo principal;
- comparación con baseline visual;
- auditoría de texto agregado/eliminado;
- prueba de teclado y reduced motion;
- lista explícita de desviaciones.
