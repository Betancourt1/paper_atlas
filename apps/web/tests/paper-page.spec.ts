import { expect, test } from "@playwright/test";

const expectedVisuals: Record<string, Array<[string, string]>> = {
  "/papers/paper_attention_is_all_you_need": [],
  "/papers/paper_computational_propaganda": [["propaganda_visual_halflife_tree", "propaganda_example_p2"]],
  "/papers/paper_inkling": [["visual_inkling_sparse_routing_field", "ink_mechanism_p1"]],
  "/papers/paper_llm_evaluators_languages": [],
  "/papers/paper_partition_prompt_aggregate": [["visual_ppa_weighted_reconstruction_graph", "ppa_mechanism_p2"]],
  "/papers/paper_robott": [],
  "/papers/paper_searchos_v1": [],
  "/papers/paper_trace": [["trace_visual_credit_dependency_dag", "trace_mechanism_p3"]],
};

const expectedSourceAssets: Record<string, Array<[string, string]>> = {
  "/papers/paper_attention_is_all_you_need": [
    ["visual_attention_query_key_field", "attn_mechanism_p2"],
    ["visual_attention_decoder_dependencies", "attn_mechanism_p3"],
  ],
  "/papers/paper_computational_propaganda": [
    ["propaganda_visual_source_figure_3", "propaganda_example_p1"],
  ],
  "/papers/paper_llm_evaluators_languages": [
    ["language_visual_source_figure_1", "language_change_p1"],
    ["language_visual_source_figure_3", "language_change_p2"],
    ["language_visual_ranking_acceptance_graph", "language_mechanism_p2"],
    ["language_visual_source_figures_5_7_mechanism", "language_mechanism_p3"],
  ],
  "/papers/paper_robott": [
    ["visual_robott_source_figure_2_mechanism", "rttt_mechanism_p2"],
    ["visual_robott_source_figures_2_4_mechanism", "rttt_mechanism_p3"],
    ["visual_robott_source_figure_7", "rttt_evidence_p1"],
    ["visual_robott_source_figure_8", "rttt_evidence_p2"],
  ],
  "/papers/paper_searchos_v1": [
    ["visual_searchos_source_figure_2", "sos_mechanism_p2"],
    ["visual_searchos_source_figures_2_5", "sos_mechanism_p3"],
  ],
  "/papers/paper_trace": [
    ["trace_visual_source_figure_1_change", "trace_change_p1"],
    ["trace_visual_source_figures_3_4", "trace_evidence_p3"],
  ],
};

test("reviewed digest entry remains a source-backed explainer @visual", async ({ page }) => {
  await page.goto("/papers/paper_trace");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "TRACE: Turn-level Reward Assignment via Credit Estimation for Long-Horizon Agents",
  );
  await expect(page.getByText("Reviewed draft · awaiting publication approval")).toBeVisible();
  await expect(page.getByText("Published", { exact: true })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Claim ledger" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Sources and exact locators" })).toBeVisible();
});

test("custom SVG visuals render only at approved revision-7 paragraphs @visual", async ({ page }) => {
  for (const [paperPath, expected] of Object.entries(expectedVisuals)) {
    await page.goto(paperPath);
    const figures = page.locator('figure.explainer-visual[data-delivery-medium="SVG"]');
    await expect(figures).toHaveCount(expected.length);

    for (const [visualId, paragraphId] of expected) {
      const figure = page.locator(`#${paragraphId} > figure[data-visual-id="${visualId}"]`);
      await expect(figure).toHaveCount(1);
      await expect(figure).toHaveAttribute("data-delivery-medium", "SVG");
      const svg = figure.locator(`svg[role="img"][data-visual-id="${visualId}"]`);
      await expect(svg).toHaveCount(1);
      expect(await svg.locator("title").textContent()).not.toBe("");
      expect(await svg.locator("desc").textContent()).not.toBe("");
      const computedStyles = await svg.evaluate((element) => {
          const node = getComputedStyle(
            element.querySelector(
              ".v-node:not(.v-node--accent):not(.v-node--boundary)",
            )!,
          );
          const accentNode = element.querySelector(".v-node--accent");
          const boundaryNode = element.querySelector(".v-node--boundary");
          const edge = getComputedStyle(
            element.querySelector(
              ".v-edge:not(.v-edge--soft):not(.v-edge--reject):not(.v-edge--feedback)",
            )!,
          );
          const softEdge = element.querySelector(".v-edge--soft");
          const text = getComputedStyle(element.querySelector(".v-text")!);
          return {
            nodeFill: node.fill,
            nodeStroke: node.stroke,
            accentNode: accentNode
              ? {
                  fill: getComputedStyle(accentNode).fill,
                  stroke: getComputedStyle(accentNode).stroke,
                }
              : null,
            boundaryNode: boundaryNode
              ? {
                  fill: getComputedStyle(boundaryNode).fill,
                  stroke: getComputedStyle(boundaryNode).stroke,
                }
              : null,
            edgeStroke: edge.stroke,
            edgeMarker: edge.markerEnd,
            softEdgeStroke: softEdge ? getComputedStyle(softEdge).stroke : null,
            textFill: text.fill,
            textSize: text.fontSize,
          };
        });
      expect(computedStyles).toMatchObject({
        nodeFill: "rgb(255, 253, 248)",
        nodeStroke: "rgb(170, 166, 157)",
        edgeStroke: "rgb(23, 23, 20)",
        textFill: "rgb(23, 23, 20)",
        textSize: "11px",
      });
      expect(computedStyles.edgeMarker).toContain(`#${visualId}-arrow`);
      if (computedStyles.accentNode !== null) {
        expect(computedStyles.accentNode).toEqual({
          fill: "rgb(237, 243, 235)",
          stroke: "rgb(79, 107, 74)",
        });
      }
      if (computedStyles.boundaryNode !== null) {
        expect(computedStyles.boundaryNode).toEqual({
          fill: "rgb(247, 233, 228)",
          stroke: "rgb(164, 78, 54)",
        });
      }
      if (computedStyles.softEdgeStroke !== null) {
        expect(computedStyles.softEdgeStroke).toBe("rgb(170, 166, 157)");
      }
      if (visualId === "visual_attention_query_key_field") {
        await expect(svg.locator('[data-attention-query="q_i"]')).toHaveCount(1);
        await expect(svg.locator('[data-attention-output="z_i"]')).toHaveCount(1);
        await expect(svg.locator(".v-attention-score")).toHaveCount(3);
        await expect(svg.locator(".v-key-value-pair")).toHaveCount(3);
        await expect(svg.locator(".v-weighted-value")).toHaveCount(3);
        await expect(svg.locator("[data-head-output]")).toHaveCount(8);
        await expect(svg.locator(".v-head-fan")).toHaveCount(8);
        await expect(svg.locator(".v-head-projection")).toHaveCount(2);
        await expect(svg.getByText("Concat · 8 heads", { exact: true })).toBeVisible();
        await expect(svg.getByText("Wₒ", { exact: true })).toBeVisible();
        await expect(svg.getByText("multi-head output", { exact: true })).toBeVisible();
      }
      if (visualId === "propaganda_visual_halflife_tree") {
        const labelFitsNode = await svg
          .locator('[data-geometry-node="comment-signature"]')
          .evaluate((group) => {
            const node = group.querySelector("rect")!.getBBox();
            const label = group.querySelector("text")!.getBBox();
            return (
              label.x >= node.x + 4 &&
              label.x + label.width <= node.x + node.width - 4 &&
              label.y >= node.y &&
              label.y + label.height <= node.y + node.height
            );
          });
        expect(labelFitsNode).toBe(true);
        await expect(svg.getByText("3.4% signature pages", { exact: true })).toBeVisible();
      }
      if (visualId === "visual_inkling_sparse_routing_field") {
        await expect(svg.locator(".v-expert")).toHaveCount(0);
        await expect(svg.getByText("6 selected", { exact: true })).toBeVisible();
        await expect(svg.getByText("250 inactive", { exact: true })).toBeVisible();
      }
      if (visualId === "visual_ppa_weighted_reconstruction_graph") {
        await expect(svg.locator('[data-hierarchy-depth="1"] .v-weighted-child')).toHaveCount(2);
        await expect(svg.locator('[data-hierarchy-depth="2"] .v-weighted-grandchild')).toHaveCount(4);
        await expect(svg.locator(".v-depth-aggregate")).toHaveCount(2);
        await expect(svg.locator('[data-invariance="root-d1-d2"]')).toContainText("q = D1 = D2");
      }
      if (visualId === "visual_robottt_fast_weight_architecture") {
        await expect(svg.locator('[data-fast-weight-state="next-timestep"]')).toHaveCount(1);
        await expect(svg.locator(".v-recurrent-state")).toHaveCount(1);
      }
      if (visualId === "visual_searchos_sensor_policy_dispatch") {
        await expect(svg.locator('[data-dispatch-state="ready-gap"]')).toHaveCount(1);
        await expect(svg.locator(".v-dispatch-edge")).toHaveCount(1);
        await expect(svg.getByText("correction", { exact: true })).toBeVisible();
      }
      const keyCaptionsInsideViewBox = await svg.evaluate((element) => {
        const svgElement = element as SVGSVGElement;
        const viewBox = svgElement.viewBox.baseVal;
        return [...svgElement.querySelectorAll<SVGGraphicsElement>("[data-geometry-caption] text")]
          .every((caption) => {
            const box = caption.getBBox();
            return (
              box.x >= viewBox.x &&
              box.y >= viewBox.y &&
              box.x + box.width <= viewBox.x + viewBox.width &&
              box.y + box.height <= viewBox.y + viewBox.height
            );
          });
      });
      expect(keyCaptionsInsideViewBox).toBe(true);
      await expect(figure.getByText("What this illustration does not establish")).toBeVisible();
      await expect(figure.getByLabel("Evidence for this illustration")).toBeVisible();
    }

    expect(
      await figures.evaluateAll((elements) =>
        elements.every((element) => {
          const paragraph = element.parentElement;
          const svg = element.querySelector("svg");
          return Boolean(
            paragraph?.classList.contains("explainer-paragraph") &&
            paragraph.id &&
            element.getAttribute("aria-labelledby") &&
            svg?.querySelector("title")?.textContent &&
            svg?.querySelector("desc")?.textContent &&
            svg.querySelectorAll("circle, line, path, rect").length > 0
          );
        }),
      ),
    ).toBe(true);

    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    if (page.viewportSize()?.width === 390) {
      expect(
        await figures.evaluateAll((elements) =>
          elements.every((figure) => {
            const scroller = figure.querySelector<HTMLElement>(".explainer-svg")!;
            const svg = scroller.querySelector("svg")!;
            return (
              scroller.scrollWidth > scroller.clientWidth &&
              svg.getBoundingClientRect().width >= 680 &&
              scroller.getBoundingClientRect().right <= window.innerWidth + 1 &&
              scroller.tabIndex === 0
            );
          }),
        ),
      ).toBe(true);
    }
  }
});

test("original paper figures render at every approved source-asset paragraph @visual", async ({ page }) => {
  for (const [paperPath, expected] of Object.entries(expectedSourceAssets)) {
    await page.goto(paperPath);
    const figures = page.locator('figure.explainer-visual[data-delivery-medium="source asset"]');
    await expect(figures).toHaveCount(expected.length);

    for (const [visualId, paragraphId] of expected) {
      const figure = page.locator(`#${paragraphId} > figure[data-visual-id="${visualId}"]`);
      await expect(figure).toHaveCount(1);
      await expect(figure.locator("svg")).toHaveCount(0);
      const images = figure.locator(".explainer-source-asset__images img");
      expect(await images.count()).toBeGreaterThanOrEqual(1);
      expect(await images.count()).toBeLessThanOrEqual(3);
      await expect(images.first()).toHaveAttribute("src", /\/paper-assets\//);
      for (const image of await images.all()) {
        await image.scrollIntoViewIfNeeded();
        await expect(image).not.toHaveAttribute("alt", "");
        await expect.poll(() => image.evaluate((element) => (
          (element as HTMLImageElement).naturalWidth
        ))).toBeGreaterThan(0);
      }
      await expect(figure.getByText("Original figure", { exact: true })).toBeVisible();
      await expect(figure.getByText("Attribution", { exact: true })).toBeVisible();
      await expect(figure.getByText("License", { exact: true })).toBeVisible();
      await expect(figure.getByText("Modifications", { exact: true })).toBeVisible();
      await expect(figure.locator(".explainer-source-asset__provenance a")).toHaveAttribute("href", /^https:\/\//);
      await expect(figure.getByText("What this illustration does not establish")).toBeVisible();
      await expect(figure.getByLabel("Evidence for this illustration")).toBeVisible();
    }

    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const viewports = figures.getByRole("region", { name: "Scrollable original paper figure" });
    await expect(viewports).toHaveCount(expected.length);
    await expect(
      figures.getByText("Scroll if needed or use arrow keys to inspect the original figure.", { exact: true }),
    ).toHaveCount(expected.length);
    expect(
      await viewports.evaluateAll((elements) =>
        elements.every((viewport) => {
          const scroller = viewport as HTMLElement;
          const images = [...scroller.querySelectorAll<HTMLImageElement>("img")];
          return (
            scroller.tabIndex === 0 &&
            scroller.getBoundingClientRect().right <= window.innerWidth + 1 &&
            images.every((image) => Math.abs(image.clientWidth - image.naturalWidth) <= 1)
          );
        }),
      ),
    ).toBe(true);

    const firstViewport = viewports.first();
    await firstViewport.focus();
    expect(
      await firstViewport.evaluate((element) => {
        const style = getComputedStyle(element);
        return style.outlineStyle !== "none" && Number.parseFloat(style.outlineWidth) >= 3;
      }),
    ).toBe(true);
    const scrollableIndex = await viewports.evaluateAll((elements) =>
      elements.findIndex((element) => element.scrollWidth > element.clientWidth),
    );
    if (scrollableIndex >= 0) {
      const scrollableViewport = viewports.nth(scrollableIndex);
      await scrollableViewport.focus();
      await page.keyboard.press("ArrowRight");
      await expect.poll(() => scrollableViewport.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
});

test("unknown paper uses the explicit empty state", async ({ page }) => {
  await page.goto("/papers/paper_missing");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Paper not found");
});
