# 01 — Especificación de producto

## 1. Tesis

Paper Atlas convierte literatura científica en dos representaciones coordinadas:

- una **representación documental rigurosa**, útil para búsqueda, comparación y trazabilidad;
- una **representación pedagógica interactiva**, útil para comprender el problema, el mecanismo, la evidencia y las limitaciones.

La referencia de producto es una combinación deliberada:

- **Papers with Code:** densidad informativa, taxonomía, código, benchmarks, métricas y linaje;
- **Anthropic Research:** narrativa editorial, preguntas concretas, explicación progresiva, figuras como argumentos y limitaciones integradas;
- **Distill:** interacción científica que permite manipular mecanismos y no sólo decorar el texto.

## 2. Usuarios

### Lector técnico

Quiere saber en 5–20 minutos si el paper merece lectura completa, qué propone, qué evidencia lo sostiene y dónde podría fallar.

### Investigador o estudiante

Quiere navegar a fórmulas, figuras, tablas, referencias, repositorios y trabajos relacionados sin perder trazabilidad.

### Editor científico

Quiere corregir afirmaciones, cambiar taxonomías, revisar artefactos y aprobar una versión publicable.

### Integrador/API consumer

Quiere enviar papers, consultar estados y recuperar contenido estructurado para otros productos.

### Maintainer

Quiere que Codex implemente, pruebe y mantenga el sistema sin degradar arquitectura, diseño ni calidad editorial.

## 3. Dos direcciones de producto

### A. Plataforma pública

Superficies mínimas:

- portada y feed de papers recientes;
- búsqueda global;
- página de paper;
- páginas de tarea, método, dataset, benchmark y autor;
- colecciones editoriales;
- grafo de linaje y trabajos relacionados;
- páginas de artefactos y resultados;
- changelog de revisiones del paper y de la explicación.

### B. Fábrica de contenido

Superficies mínimas:

- formulario URL/PDF;
- cola de procesamiento;
- visor del documento fuente con anclas;
- ledger de afirmaciones y evidencia;
- editor por bloques;
- preview responsivo;
- revisión de taxonomía;
- revisión de artefactos;
- comparación entre versiones;
- aprobación y publicación.

## 4. Flujo principal

1. El usuario envía una URL o PDF.
2. El sistema valida, descarga, hashea y deduplica.
3. Los parsers producen `PaperDocument`.
4. Un enriquecedor resuelve metadata, autores, referencias, repositorios y entidades científicas.
5. Un analista construye un grafo de afirmaciones, evidencia, resultados, supuestos y limitaciones.
6. Un editor pedagógico elige de tres a cinco preguntas que organizan la explicación.
7. Un planificador visual selecciona artefactos del registro.
8. Se genera `ExplainerDocument` en forma de AST tipado.
9. Verificadores contrastan afirmaciones, cifras, tablas, ecuaciones y enlaces.
10. Un crítico separado redacta objeciones y detecta sobreafirmaciones.
11. Un humano revisa y publica.
12. Los watchers detectan nuevas versiones, repositorios rotos y cambios relevantes.

## 5. Modos de lectura

Una página no debe producir cuatro resúmenes distintos, sino cuatro profundidades sobre el mismo documento:

- **5 minutos:** tesis, por qué importa, mecanismo central, resultado principal y limitación decisiva.
- **20 minutos:** contexto, ejemplo paso a paso, evidencia, comparación y crítica.
- **Profundidad técnica:** fórmulas, protocolo experimental, ablaciones, artefactos y apéndices relevantes.
- **Original:** navegación al PDF, fuente LaTeX o publicación.

## 6. Anatomía de una página de paper

1. Metadata: autores, fecha, versión, venue, licencia y enlaces.
2. Título y afirmación central en una frase.
3. Lectura estimada y selector de profundidad.
4. Índice de preguntas.
5. “Por qué existe este paper”.
6. “Qué cambia respecto a lo anterior”.
7. Mecanismo central interactivo.
8. Ejemplo recorrido paso a paso.
9. Resultados y benchmarks.
10. Ablaciones y sensibilidad.
11. Qué demuestra y qué no demuestra.
12. Crítica metodológica.
13. Código, datos, modelos y reproducción.
14. Métodos, tareas, datasets y trabajos relacionados.
15. Referencias y registro de procedencia.
16. Historial de versiones.

## 7. Alcance del MVP

### Incluido

- arXiv y PDF directo;
- PDF digital de una o dos columnas;
- explicación en español e inglés;
- indexación de metadata, secciones, figuras, tablas, ecuaciones y referencias;
- artefactos interactivos basados en datos presentes en el paper;
- revisión humana obligatoria;
- API y webhooks;
- búsqueda híbrida lexical/semántica;
- página pública optimizada para lectura y SEO.

### Excluido inicialmente

- ejecución automática del repositorio de cada paper;
- extracción confiable de datos desde gráficas raster complejas;
- reproducción completa de experimentos;
- publicación autónoma;
- comentarios públicos y redes sociales;
- marketplace de artefactos comunitarios;
- cobertura universal de publishers con paywall.

## 8. Métricas de éxito

### Producto

- tiempo medio desde ingesta hasta `review_required`;
- porcentaje de papers que se parsean sin intervención;
- tiempo de revisión humana;
- lectores que pasan de 5 a 20 minutos;
- clics hacia paper, código y evidencia;
- retorno semanal y papers guardados.

### Contenido

- cobertura de citas por afirmación;
- exactitud numérica;
- precisión de taxonomía;
- tasa de objeciones editoriales;
- comprensión humana antes/después;
- porcentaje de artefactos que modifican estado real y explican un mecanismo verificable.

### Plataforma

- errores de procesamiento por etapa;
- costo por paper;
- duración por etapa;
- páginas con Core Web Vitals dentro de presupuesto;
- fallos de accesibilidad y regresiones visuales.

