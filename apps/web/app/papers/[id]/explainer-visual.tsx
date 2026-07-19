import type { SourceRef, Visual, VisualItem } from "@paper-atlas/content-schema";

type ExplainerVisualProps = {
  visual: Visual;
  sourcesById: Map<string, SourceRef>;
};

const visualLabels: Record<Visual["type"], string> = {
  PIPELINE_FLOW: "Process diagram",
  ARCHITECTURE_STEPPER: "Architecture diagram",
  RESULT_COMPARISON: "Result comparison",
  EVIDENCE_MATRIX: "Evidence matrix",
  METHOD_COMPARISON: "Method comparison",
  CONTROL_LOOP: "Control-loop diagram",
  PARTITION_TREE: "Partition diagram",
  TIMELINE: "Timeline",
  DOT_PLOT: "Result plot",
  PARALLEL_VIEW: "Parallel view",
  OPERATION_DIAGRAM: "Operation diagram",
};

export function ExplainerVisual({ visual, sourcesById }: ExplainerVisualProps) {
  const titleId = `${visual.id}-title`;
  const descriptionId = `${visual.id}-description`;
  const visualClass = visual.type.toLowerCase().replaceAll("_", "-");

  return (
    <figure
      className={`explainer-visual explainer-visual--${visualClass}`}
      data-visual-type={visual.type}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div className="explainer-visual__heading">
        <p>{visualLabels[visual.type]}</p>
        <h3 id={titleId}>{visual.title}</h3>
        <p>{visual.question}</p>
      </div>

      <VisualBody visual={visual} />

      <figcaption id={descriptionId}>
        <p>{visual.interpretation}</p>
        <div className="explainer-visual__limits">
          <p>What this illustration does not establish</p>
          <ul>
            {visual.limitations.map((limitation) => (
              <li key={limitation}>{limitation}</li>
            ))}
          </ul>
        </div>
        <div className="explainer-visual__evidence" aria-label="Evidence for this illustration">
          <p>Evidence</p>
          <p>
            {visual.claim_ids.map((claimId) => (
              <a href={`#claim-${claimId}`} key={claimId}>
                Claim {claimId}
              </a>
            ))}
          </p>
          <p>
            {visual.source_refs.map((sourceId) => {
              const source = sourcesById.get(sourceId);
              return source ? (
                <a href={`#${source.id}`} key={source.id}>
                  {source.locator}
                </a>
              ) : null;
            })}
          </p>
        </div>
        <p className="visually-hidden">Equivalent text: {visual.fallback}</p>
      </figcaption>
    </figure>
  );
}

function VisualBody({ visual }: { visual: Visual }) {
  switch (visual.type) {
    case "DOT_PLOT":
      return <DotPlot visual={visual} />;
    case "RESULT_COMPARISON":
      return <ResultConstellation visual={visual} />;
    case "EVIDENCE_MATRIX":
      return <EvidenceMatrix visual={visual} />;
    case "METHOD_COMPARISON":
      return <MethodComparison visual={visual} />;
    case "CONTROL_LOOP":
      return <ControlLoop visual={visual} />;
    case "PARTITION_TREE":
      return <PartitionTree visual={visual} />;
    case "TIMELINE":
      return <Timeline visual={visual} />;
    case "PARALLEL_VIEW":
      return <ParallelView visual={visual} />;
    case "ARCHITECTURE_STEPPER":
      return <ArchitectureLayers visual={visual} />;
    case "PIPELINE_FLOW":
    case "OPERATION_DIAGRAM":
      return <OperationPath visual={visual} />;
  }
}

function DotPlot({ visual }: { visual: Visual }) {
  const numericItems = getNumericItems(visual.items);
  const values = numericItems.map(({ value }) => value);
  const minValue = Math.min(...values, 0);
  const maxValue = Math.max(...values, 1);
  const range = Math.max(maxValue - minValue, 1);

  return (
    <div className="dot-plot" role="img" aria-label={visual.alt_text}>
      <div className="dot-plot__axis" aria-hidden="true">
        <span>{formatValue(minValue)}</span>
        <span>{formatValue(maxValue)}</span>
      </div>
      {numericItems.map((item) => (
        <div className="dot-plot__row" key={item.label}>
          <p>{item.label}</p>
          <div className="dot-plot__track" aria-hidden="true">
            <span
              className="dot-plot__point"
              style={{ insetInlineStart: `${((item.value - minValue) / range) * 100}%` }}
            >
              {formatValue(item.value)}
            </span>
          </div>
          <p>{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

function ResultConstellation({ visual }: { visual: Visual }) {
  return (
    <ol className="result-constellation" aria-label={visual.alt_text}>
      {visual.items.map((item, index) => (
        <li key={`${item.label}-${index}`}>
          <span className="result-constellation__index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p>{item.label}</p>
            <p>{item.detail}</p>
          </div>
          {item.value === undefined ? null : <strong>{formatValue(item.value)}</strong>}
        </li>
      ))}
    </ol>
  );
}

function EvidenceMatrix({ visual }: { visual: Visual }) {
  return (
    <div className="evidence-matrix">
      <table aria-label={visual.alt_text}>
        <thead>
          <tr>
            <th scope="col">Evidence surface</th>
            <th scope="col">What it supports—and where it stops</th>
          </tr>
        </thead>
        <tbody>
          {visual.items.map((item, index) => (
            <tr key={`${item.label}-${index}`}>
              <th scope="row">{item.label}</th>
              <td>{item.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MethodComparison({ visual }: { visual: Visual }) {
  return (
    <div className="method-comparison" role="group" aria-label={visual.alt_text}>
      {visual.items.map((item, index) => (
        <section key={`${item.label}-${index}`}>
          <p>{index === 0 ? "Approach A" : `Approach ${String.fromCharCode(65 + index)}`}</p>
          <h4>{item.label}</h4>
          {item.value === undefined ? null : <strong>{formatValue(item.value)}</strong>}
          <p>{item.detail}</p>
        </section>
      ))}
    </div>
  );
}

function OperationPath({ visual }: { visual: Visual }) {
  return (
    <ol className="operation-path" aria-label={visual.alt_text}>
      {visual.items.map((item, index) => (
        <li key={`${item.label}-${index}`}>
          <span className="operation-path__marker" aria-hidden="true">
            {index + 1}
          </span>
          <div>
            <p>{item.label}</p>
            {item.value === undefined ? null : <strong>{formatValue(item.value)}</strong>}
            <p>{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ControlLoop({ visual }: { visual: Visual }) {
  return (
    <div className="control-loop" role="img" aria-label={visual.alt_text}>
      <ol>
        {visual.items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            <span aria-hidden="true">{index + 1}</span>
            <div>
              <p>{item.label}</p>
              <p>{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="control-loop__return" aria-hidden="true">
        ↶ updated state returns to the next cycle
      </p>
    </div>
  );
}

function PartitionTree({ visual }: { visual: Visual }) {
  const [root, ...branches] = visual.items;
  return (
    <div className="partition-tree" role="img" aria-label={visual.alt_text}>
      <div className="partition-tree__root">
        <span>Root</span>
        <p>{root?.label}</p>
        {root?.value === undefined ? null : <strong>{formatValue(root.value)}</strong>}
      </div>
      <div className="partition-tree__trunk" aria-hidden="true" />
      <ol>
        {branches.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            <span aria-hidden="true">branch {index + 1}</span>
            <p>{item.label}</p>
            {item.value === undefined ? null : <strong>{formatValue(item.value)}</strong>}
            <p>{item.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Timeline({ visual }: { visual: Visual }) {
  return (
    <ol className="visual-timeline" aria-label={visual.alt_text}>
      {visual.items.map((item, index) => (
        <li key={`${item.label}-${index}`}>
          <span className="visual-timeline__time" aria-hidden="true">
            T{index}
          </span>
          <div>
            <p>{item.label}</p>
            <p>{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ParallelView({ visual }: { visual: Visual }) {
  return (
    <div className="parallel-view" role="group" aria-label={visual.alt_text}>
      {visual.items.map((item, index) => (
        <section key={`${item.label}-${index}`}>
          <span aria-hidden="true">Lane {index + 1}</span>
          <h4>{item.label}</h4>
          {item.value === undefined ? null : <strong>{formatValue(item.value)}</strong>}
          <p>{item.detail}</p>
        </section>
      ))}
    </div>
  );
}

function ArchitectureLayers({ visual }: { visual: Visual }) {
  return (
    <ol className="architecture-layers" aria-label={visual.alt_text}>
      {visual.items.map((item, index) => (
        <li
          key={`${item.label}-${index}`}
          style={{ marginInline: `${Math.min(index, 3) * 3}%` }}
        >
          <span aria-hidden="true">Layer {index + 1}</span>
          <div>
            <p>{item.label}</p>
            <p>{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function getNumericItems(
  items: Visual["items"],
): (VisualItem & { value: number })[] {
  return items.filter(
    (item): item is VisualItem & { value: number } => item.value !== undefined,
  );
}

function formatValue(value: number): string {
  return Number.isInteger(value) ? value.toString() : value.toFixed(1);
}
