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
  const inspectionHintId = `${visual.id}-inspection-hint`;
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

      {visual.delivery_medium === "source asset" && visual.source_asset ? (
        <div className="explainer-source-asset">
          <p className="explainer-source-asset__hint" id={inspectionHintId}>
            Swipe or use arrow keys to inspect the original figure.
          </p>
          <div
            aria-describedby={inspectionHintId}
            aria-label="Scrollable original paper figure"
            className="explainer-source-asset__viewport"
            role="region"
            tabIndex={0}
          >
            <div
              className="explainer-source-asset__images"
              data-image-count={visual.source_asset.images.length}
            >
              {visual.source_asset.images.map((image) => (
                <img
                  src={paperAssetUrl(image.path)}
                  alt={image.alt_text}
                  decoding="async"
                  loading="lazy"
                  key={image.path}
                />
              ))}
            </div>
          </div>
          <dl className="explainer-source-asset__provenance">
            <div>
              <dt>Original figure</dt>
              <dd>{visual.source_asset.locator}</dd>
            </div>
            <div>
              <dt>Attribution</dt>
              <dd>{visual.source_asset.attribution}</dd>
            </div>
            <div>
              <dt>License</dt>
              <dd>
                <a href={visual.source_asset.license_url}>{visual.source_asset.license_label}</a>
              </dd>
            </div>
            <div>
              <dt>Modifications</dt>
              <dd>{visual.source_asset.modifications}</dd>
            </div>
          </dl>
        </div>
      ) : (
        <ExplainerSvg visual={visual} />
      )}

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

export function paperAssetUrl(path: string, basePath = process.env.PAGES_BASE_PATH): string {
  const trimmedBasePath = basePath?.replace(/^\/+|\/+$/g, "");
  return trimmedBasePath ? `/${trimmedBasePath}${path}` : path;
}
