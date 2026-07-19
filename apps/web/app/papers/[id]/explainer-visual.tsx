import type { SourceRef, Visual } from "@paper-atlas/content-schema";

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
  if (visual.type === "RESULT_COMPARISON" || visual.type === "DOT_PLOT") {
    const numericItems = visual.items.filter(
      (item): item is typeof item & { value: number } => item.value !== undefined,
    );
    const maxValue = Math.max(...numericItems.map((item) => Math.abs(item.value)), 1);

    return (
      <div className="explainer-plot" role="img" aria-label={visual.alt_text}>
        {visual.items.map((item) => (
          <div className="explainer-plot__row" key={item.label}>
            <p>{item.label}</p>
            {item.value === undefined ? (
              <p className="explainer-plot__note">{item.detail}</p>
            ) : (
              <div className="explainer-plot__measure">
                <span style={{ width: `${(Math.abs(item.value) / maxValue) * 100}%` }} />
                <strong>{item.value}</strong>
              </div>
            )}
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ol className="explainer-visual__items" aria-label={visual.alt_text}>
      {visual.items.map((item) => (
        <li key={item.label}>
          <p className="explainer-visual__item-label">{item.label}</p>
          {item.value === undefined ? null : (
            <p className="explainer-visual__value">{item.value}</p>
          )}
          <p>{item.detail}</p>
        </li>
      ))}
    </ol>
  );
}
