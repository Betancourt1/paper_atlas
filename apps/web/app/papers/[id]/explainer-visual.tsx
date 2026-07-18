import type { Visual } from "@paper-atlas/content-schema";

type ExplainerVisualProps = {
  visual: Visual;
};

export function ExplainerVisual({ visual }: ExplainerVisualProps) {
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
        <p>Concept map</p>
        <h3 id={titleId}>{visual.title}</h3>
        <p>{visual.question}</p>
      </div>

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
        <p className="visually-hidden">Equivalent text: {visual.fallback}</p>
      </figcaption>
    </figure>
  );
}
