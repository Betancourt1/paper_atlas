import type { SourceRef, Visual } from "@paper-atlas/content-schema";

import { ExplainerSvg } from "./explainer-svg";

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
  PARTITION_TREE: "Dependency diagram",
  TIMELINE: "Timeline",
  DOT_PLOT: "Result plot",
  PARALLEL_VIEW: "Relational view",
  OPERATION_DIAGRAM: "Operation diagram",
};

export function ExplainerVisual({ visual, sourcesById }: ExplainerVisualProps) {
  const titleId = `${visual.id}-title`;
  const descriptionId = `${visual.id}-description`;
  return (
    <figure
      className="explainer-visual"
      data-visual-id={visual.id}
      data-visual-type={visual.type}
      data-delivery-medium={visual.delivery_medium}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div className="explainer-visual__heading">
        <p>{visualLabels[visual.type]}</p>
        <h3 id={titleId}>{visual.title}</h3>
        <p>{visual.question}</p>
      </div>

      <ExplainerSvg visual={visual} />

      <figcaption id={descriptionId}>
        <p>{visual.interpretation}</p>
        <div className="explainer-visual__limits">
          <p>What this illustration does not establish</p>
          <ul>{visual.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
        </div>
        <div className="explainer-visual__evidence" aria-label="Evidence for this illustration">
          <p>Evidence</p>
          <p>{visual.claim_ids.map((claimId) => <a href={`#claim-${claimId}`} key={claimId}>Claim {claimId}</a>)}</p>
          <p>{visual.source_refs.map((sourceId) => {
            const source = sourcesById.get(sourceId);
            return source ? <a href={`#${source.id}`} key={source.id}>{source.locator}</a> : null;
          })}</p>
        </div>
        <p className="visually-hidden">Equivalent text: {visual.fallback}</p>
      </figcaption>
    </figure>
  );
}
