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
  const groups = groupItems(visual.items, "Reported results");

  return (
    <div className="dot-plot" role="img" aria-label={visual.alt_text}>
      {groups.map((group) => {
        const numericItems = getNumericItems(group.items);
        const notes = group.items.filter((item) => item.value === undefined);
        const { minValue, maxValue } =
          numericItems.length === 0
            ? { minValue: 0, maxValue: 1 }
            : getPlotDomain(numericItems);
        const range = maxValue - minValue;
        return (
          <section className="dot-plot__panel" key={group.label}>
            <h4>{group.label}</h4>
            {numericItems.length === 0 ? null : (
              <div className="dot-plot__axis" aria-hidden="true">
                <span>{formatValue(minValue)}</span>
                <span>{formatValue(maxValue)}</span>
              </div>
            )}
            {numericItems.map((item) => {
              const start = ((item.value - minValue) / range) * 100;
              const end = (((item.value_end ?? item.value) - minValue) / range) * 100;
              return (
                <div className="dot-plot__row" key={item.label}>
                  <p>{item.label}<RoleBadge role={item.role} /></p>
                  <div className="dot-plot__track" aria-hidden="true">
                    {item.value_end === undefined ? null : (
                      <span
                        className="dot-plot__range"
                        style={{ insetInlineStart: `${start}%`, width: `${end - start}%` }}
                      />
                    )}
                    <span className="dot-plot__point" style={{ insetInlineStart: `${start}%` }} />
                  </div>
                  <strong>{formatItemValue(item)}</strong>
                  <p>{item.detail}</p>
                </div>
              );
            })}
            {notes.map((item) => (
            <div className="dot-plot__note" key={item.label}>
                <strong>{item.label}<RoleBadge role={item.role} /></strong>
                <p>{item.detail}</p>
              </div>
            ))}
          </section>
        );
      })}
    </div>
  );
}

function ResultConstellation({ visual }: { visual: Visual }) {
  return (
    <div className="result-groups" aria-label={visual.alt_text}>
      {groupItems(visual.items, "Reported results").map((group) => (
        <section key={group.label}>
          <h4>{group.label}</h4>
          <ol className="result-constellation">
            {group.items.map((item, index) => (
              <li key={`${item.label}-${index}`}>
                <span className="result-constellation__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p>{item.label}<RoleBadge role={item.role} /></p>
                  <p>{item.detail}</p>
                </div>
                {item.value === undefined && item.value_label === undefined ? null : (
                  <strong>{formatItemValue(item)}</strong>
                )}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

function EvidenceMatrix({ visual }: { visual: Visual }) {
  const hasValues = visual.items.some(
    (item) => item.value !== undefined || item.value_label !== undefined,
  );
  return (
    <div className="evidence-matrix">
      <table aria-label={visual.alt_text}>
        <thead>
          <tr>
            <th scope="col">Evidence surface</th>
            {hasValues ? <th scope="col">Reported value</th> : null}
            <th scope="col">What it supports—and where it stops</th>
          </tr>
        </thead>
        <tbody>
          {visual.items.map((item, index) => (
            <tr key={`${item.label}-${index}`}>
              <th scope="row">{item.label}<RoleBadge role={item.role} /></th>
              {hasValues ? (
                <td className="evidence-matrix__value">
                  {item.value === undefined && item.value_label === undefined
                    ? "—"
                    : formatItemValue(item)}
                </td>
              ) : null}
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
          <p>{item.group ?? formatRole(item.role) ?? "Method"}</p>
          <h4>{item.label}<RoleBadge role={item.role} /></h4>
          {item.value === undefined && item.value_label === undefined ? null : (
            <strong>{formatItemValue(item)}</strong>
          )}
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
            {item.group === undefined ? null : <span className="visual-item__group">{item.group}</span>}
            <p>{item.label}<RoleBadge role={item.role} /></p>
            {item.value === undefined && item.value_label === undefined ? null : (
              <strong>{formatItemValue(item)}</strong>
            )}
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
              <p>{item.label}<RoleBadge role={item.role} /></p>
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
  const labelByNodeId = new Map(
    visual.items.flatMap((item) =>
      item.node_id === undefined ? [] : [[item.node_id, item.label] as const],
    ),
  );
  return (
    <div className="partition-tree" role="img" aria-label={visual.alt_text}>
      {groupItems(visual.items, "Structure").map((level, levelIndex) => (
        <section className="partition-tree__level" key={level.label}>
          <h4>{level.label}</h4>
          <ol>
            {level.items.map((item, index) => {
              const inputs = item.input_ids?.map((id) => labelByNodeId.get(id) ?? id);
              return (
                <li key={`${item.label}-${index}`}>
                  {levelIndex === 0 ? null : <span aria-hidden="true">↓</span>}
                  <p>{item.label}<RoleBadge role={item.role} /></p>
                  {item.value === undefined && item.value_label === undefined ? null : (
                    <strong>{formatItemValue(item)}</strong>
                  )}
                  {inputs === undefined ? null : (
                    <p className="partition-tree__inputs">Receives: {inputs.join(" + ")}</p>
                  )}
                  <p>{item.detail}</p>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
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
            <p>{item.label}<RoleBadge role={item.role} /></p>
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
      {groupItems(visual.items, "Comparison").map((group) => (
        <section className="parallel-view__panel" key={group.label}>
          <h4>{group.label}</h4>
          <div>
            {group.items.map((item, index) => (
              <article
                className={item.role === "AGGREGATE" ? "parallel-view__aggregate" : undefined}
                key={`${item.label}-${index}`}
              >
                <span>{formatRole(item.role) ?? `Lane ${index + 1}`}</span>
                <h5>{item.label}</h5>
                {item.value === undefined && item.value_label === undefined ? null : (
                  <strong>{formatItemValue(item)}</strong>
                )}
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
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
            <p>{item.label}<RoleBadge role={item.role} /></p>
            <p>{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function getNumericItems(
  items: readonly VisualItem[],
): (VisualItem & { value: number })[] {
  return items.filter(
    (item): item is VisualItem & { value: number } => item.value !== undefined,
  );
}

function formatValue(value: number): string {
  return Number.isInteger(value) ? value.toString() : value.toFixed(1);
}

function formatItemValue(item: VisualItem): string {
  if (item.value_label !== undefined) {
    return item.value_label;
  }
  if (item.value === undefined) {
    return "";
  }
  if (item.value_end !== undefined) {
    return `${formatValue(item.value)}–${formatValue(item.value_end)}`;
  }
  return formatValue(item.value);
}

function formatRole(role: VisualItem["role"]): string | undefined {
  if (role === undefined) {
    return undefined;
  }
  return role.charAt(0) + role.slice(1).toLowerCase();
}

function RoleBadge({ role }: { role: VisualItem["role"] }) {
  const label = formatRole(role);
  return label === undefined ? null : <span className="visual-item__role">{label}</span>;
}

function groupItems<T extends VisualItem>(items: readonly T[], fallback: string) {
  const groups = new Map<string, T[]>();
  for (const item of items) {
    const label = item.group ?? fallback;
    groups.set(label, [...(groups.get(label) ?? []), item]);
  }
  return [...groups].map(([label, groupedItems]) => ({ label, items: groupedItems }));
}

function getPlotDomain(items: readonly (VisualItem & { value: number })[]) {
  const lowerBounds = items.flatMap((item) =>
    item.domain_min === undefined ? [] : [item.domain_min],
  );
  const upperBounds = items.flatMap((item) =>
    item.domain_max === undefined ? [] : [item.domain_max],
  );
  if (lowerBounds.length > 0 && upperBounds.length > 0) {
    return {
      minValue: Math.min(...lowerBounds),
      maxValue: Math.max(...upperBounds),
    };
  }

  const values = items.flatMap((item) => [item.value, item.value_end ?? item.value]);
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const dataRange = dataMax - dataMin;
  const padding = dataRange === 0 ? Math.max(Math.abs(dataMin) * 0.02, 0.5) : dataRange * 0.12;
  return { minValue: dataMin - padding, maxValue: dataMax + padding };
}
