import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import type { SourceRef, Visual } from "@paper-atlas/content-schema";

import {
  ExplainerVisual,
  paperAssetUrl,
} from "../app/papers/[id]/explainer-visual";

const sourceRef: SourceRef = {
  id: "source_paper",
  source_kind: "PAPER",
  label: "Test paper",
  url: "https://example.com/paper",
  locator: "Figure 2, page 4",
};

const sourceVisual: Visual = {
  id: "visual_source_figure",
  after_block_id: "mechanism",
  after_paragraph_id: "mechanism_p1",
  delivery_medium: "source asset",
  type: "OPERATION_DIAGRAM",
  title: "Original mechanism figure",
  question: "How does the mechanism work?",
  items: [
    { label: "Input", detail: "Source input." },
    { label: "Output", detail: "Source output." },
  ],
  claim_ids: ["claim_core"],
  source_refs: [sourceRef.id],
  interpretation: "The original figure exposes the mechanism.",
  limitations: ["The figure does not establish external validity."],
  alt_text: "The original mechanism figure.",
  fallback: "A complete textual description of the mechanism.",
  source_asset: {
    images: [
      {
        path: "/paper-assets/test/figure-2-a.png",
        alt_text: "Original Figure 2, panel A.",
      },
      {
        path: "/paper-assets/test/figure-2-b.png",
        alt_text: "Original Figure 2, panel B.",
      },
    ],
    locator: "Figure 2, panels A-B, page 4",
    attribution: "Test Author et al., Test Paper.",
    license_label: "CC BY 4.0",
    license_url: "https://creativecommons.org/licenses/by/4.0/",
    modifications: "No content edits.",
  },
};

describe("ExplainerVisual source assets", () => {
  it("renders original images and visible provenance instead of a custom SVG", () => {
    const markup = renderToStaticMarkup(
      <ExplainerVisual visual={sourceVisual} sourcesById={new Map([[sourceRef.id, sourceRef]])} />,
    );

    expect(markup).toContain('data-delivery-medium="source asset"');
    expect(markup).toContain('data-image-count="2"');
    expect(markup).not.toContain("Scrollable original paper figure");
    expect(markup).not.toContain('role="region"');
    expect(markup).not.toContain('tabindex="0"');
    expect(markup).not.toContain("Scroll if needed");
    expect(markup).toContain('src="/paper-assets/test/figure-2-a.png"');
    expect(markup).toContain('alt="Original Figure 2, panel B."');
    expect(markup).toContain("Figure 2, panels A-B, page 4");
    expect(markup).toContain("Test Author et al., Test Paper.");
    expect(markup).toContain("CC BY 4.0");
    expect(markup).toContain("No content edits.");
    expect(markup).not.toContain("<svg");
  });

  it("prefixes local paper assets for GitHub Pages without duplicating slashes", () => {
    expect(paperAssetUrl("/paper-assets/test/figure.png", "/paper_atlas/"))
      .toBe("/paper_atlas/paper-assets/test/figure.png");
    expect(paperAssetUrl("/paper-assets/test/figure.png", ""))
      .toBe("/paper-assets/test/figure.png");
    expect(paperAssetUrl("/paper-assets/test/figure.png", "/"))
      .toBe("/paper-assets/test/figure.png");
  });
});
