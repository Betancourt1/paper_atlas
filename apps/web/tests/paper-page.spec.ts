import { expect, test } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const screenshotDirectory = fileURLToPath(
  new URL("../../../artifacts/qa/current/", import.meta.url),
);

test("reviewed digest entry opens as a source-backed explainer @visual", async ({
  page,
}, testInfo) => {
  await page.goto("/papers");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Research digest",
  );
  await expect(page.getByRole("listitem")).toHaveCount(8);
  await expect(page.getByText("Reviewed", { exact: true })).toHaveCount(8);

  await page
    .getByRole("link", {
      name: "TRACE: Turn-level Reward Assignment via Credit Estimation for Long-Horizon Agents",
    })
    .click();

  await expect(page).toHaveURL(/\/papers\/paper_trace$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "TRACE: Turn-level Reward Assignment via Credit Estimation for Long-Horizon Agents",
  );
  await expect(
    page.getByText("Reviewed draft · awaiting publication approval"),
  ).toBeVisible();
  await expect(page.getByText("Published", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Central claim", { exact: true })).toBeVisible();
  await expect(
    page.getByText(/TRACE adds local credit to long tool-use trajectories/),
  ).toBeVisible();

  const readingGuide = page.getByRole("navigation", {
    name: "Choose your reading depth",
  });
  await expect(readingGuide.getByRole("link")).toHaveCount(4);
  await expect(readingGuide.getByRole("link", { name: "5 minutes" })).toBeVisible();
  await expect(readingGuide.getByRole("link", { name: "Original paper" })).toHaveAttribute(
    "href",
    "https://arxiv.org/abs/2607.13988",
  );

  await expect(
    page.getByRole("heading", {
      name: "How does TRACE turn one tool interaction into credit?",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Adjacent prefix values produce local credit",
    }),
  ).toBeVisible();
  await expect(
    page.getByText("What this illustration does not establish").first(),
  ).toBeVisible();
  await expect(page.getByText("Not established", { exact: true }).first()).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Sources and exact locators" }),
  ).toBeVisible();
  await expect(page.getByText("Sections 3.1–3.3, Equations 4–12, Algorithm 1").first()).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);

  if (testInfo.project.name === "mobile-chromium") {
    const menu = page.locator(".mobile-navigation summary");
    const menuContainer = page.locator(".mobile-navigation");
    await menu.focus();
    await page.keyboard.press("Enter");
    await expect(menuContainer).toHaveAttribute("open", "");
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeVisible();
    await page.keyboard.press("Enter");
    await expect(menuContainer).not.toHaveAttribute("open", "");
    await page.evaluate(() =>
      (document.activeElement as HTMLElement | null)?.blur(),
    );
  }

  mkdirSync(screenshotDirectory, { recursive: true });
  await page.screenshot({
    path: `${screenshotDirectory}/reviewed-explainer-${testInfo.project.name}.png`,
    fullPage: true,
  });
});

test("every digest paper exposes explanation, caveats, and provenance", async ({
  page,
}, testInfo) => {
  await page.goto("/papers");
  const paperLinks = await page.locator(".paper-list__content h2 a").evaluateAll((links) =>
    links.map((link) => (link as HTMLAnchorElement).getAttribute("href")),
  );

  expect(paperLinks).toHaveLength(8);

  for (const paperLink of paperLinks) {
    expect(paperLink).not.toBeNull();
    await page.goto(paperLink!);
    await expect(page.getByText("Central claim", { exact: true })).toBeVisible();
    await expect(page.getByText("Limitations", { exact: true }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Claim ledger" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Sources and exact locators" }),
    ).toBeVisible();
    await expect(page.getByText("Published", { exact: true })).toHaveCount(0);

    const figures = page.locator("figure.explainer-visual");
    const figureCount = await figures.count();
    expect(figureCount).toBeGreaterThanOrEqual(3);
    const visualTypes = await figures.evaluateAll((elements) =>
      elements.map((element) => element.getAttribute("data-visual-type")),
    );
    expect(new Set(visualTypes).size).toBeGreaterThanOrEqual(3);
    expect(
      await figures.evaluateAll((elements) =>
        elements.every((element) => {
          const paragraph = element.closest(".explainer-paragraph");
          return Boolean(paragraph?.id && element.getAttribute("aria-labelledby"));
        }),
      ),
    ).toBe(true);
    await expect(page.locator(".explainer-visual__items, .explainer-plot")).toHaveCount(0);
    await expect(
      page.getByText("What this illustration does not establish"),
    ).toHaveCount(figureCount);
    await expect(
      page.getByLabel("Evidence for this illustration"),
    ).toHaveCount(figureCount);

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);

    if (testInfo.project.name === "mobile-chromium") {
      expect(await page.evaluate(() => window.innerWidth)).toBe(390);
    }

    if (paperLink === "/papers/paper_attention_is_all_you_need") {
      await expect(page.locator("#attn_why_p1 .path-topology section")).toHaveCount(3);
      await expect(
        page.locator("#attn_why_p1").getByText("1 direct within-layer edge", { exact: true }),
      ).toBeVisible();
      await expect(
        page.locator("#attn_mechanism_p1 .architecture-layers").getByText("Step 1", {
          exact: true,
        }),
      ).toBeVisible();
      await expect(
        page.locator("#attn_mechanism_p1 .architecture-layers").getByText("Layer 1", {
          exact: true,
        }),
      ).toHaveCount(0);
    }

    if (paperLink === "/papers/paper_computational_propaganda") {
      const mechanism = page.locator("#propaganda_mechanism_p3");
      await expect(
        mechanism.getByRole("heading", { name: "Conditional inclusion model" }),
      ).toBeVisible();
      await expect(
        mechanism.getByRole("heading", { name: "Controlled model-influence experiment" }),
      ).toBeVisible();
      await expect(mechanism.getByText("Not joined by evidence", { exact: true })).toBeVisible();
      await expect(
        page
          .locator("#propaganda_evidence_p1")
          .getByText("181,857 pages · 200 WARC files", { exact: true }),
      ).toBeVisible();
      for (const poisonRate of ["0.001% tested", "0.01% tested", "0.1% poison"]) {
        await expect(
          page.locator("#propaganda_evidence_p3").getByText(poisonRate, { exact: false }).first(),
        ).toBeVisible();
      }
    }

    if (paperLink === "/papers/paper_inkling") {
      const provenance = page.locator("#ink_review_p2");
      for (const identity of [
        "fe653ffb5f4b9f54f011491f60cd8d6b9885d667484880d4566d76827f22a7e9",
        "cb28c6a6c8c47c68f55f2c636481bf35a1b9f5a349e5f00148c583fafbc138fc",
        "c62535263733dbeabb838ff881850928a878bc5c539ce1401a59a237bbf5c2e7",
        "91b051f1ec836e6d56596c624c3775b495d797b1",
        "93a182fb0376affeaeecfa4658c37a0fe9e5fa9e",
      ]) {
        await expect(provenance.getByText(identity, { exact: false }).first()).toBeVisible();
      }
      expect(
        await page.locator(".explainer-visual__evidence").evaluateAll((elements) =>
          elements.every(
            (element) =>
              element.getBoundingClientRect().right <= window.innerWidth &&
              element.scrollWidth <= element.clientWidth + 1,
          ),
        ),
      ).toBe(true);
    }

    if (
      paperLink === "/papers/paper_partition_prompt_aggregate" ||
      paperLink === "/papers/paper_robott"
    ) {
      const paragraphId =
        paperLink === "/papers/paper_partition_prompt_aggregate"
          ? "#ppa_evidence_p2"
          : "#rttt_evidence_p1";
      const detailWidths = await page
        .locator(`${paragraphId} .result-constellation li > div`)
        .evaluateAll((elements) =>
          elements.map((element) => element.getBoundingClientRect().width),
        );
      expect(Math.min(...detailWidths)).toBeGreaterThan(150);
    }

    if (paperLink === "/papers/paper_trace") {
      await expect(page.locator("#trace_why_p1 .credit-trajectory > li")).toHaveCount(5);
      await expect(
        page.locator("#trace_why_p1 .credit-trajectory__annotations section"),
      ).toHaveCount(10);
      const mechanism = page.locator("#trace_mechanism_p3 .partition-tree");
      await expect(mechanism.getByText("One-step credit", { exact: true })).toBeVisible();
      await expect(mechanism.getByText("Propagated credit", { exact: true })).toBeVisible();
      await expect(
        mechanism.getByText("Receives: Propagated credit + GRPO outcome advantage", {
          exact: true,
        }),
      ).toBeVisible();
      await expect(page.locator("#trace_example_p2 .credit-trajectory > li")).toHaveCount(4);
      await expect(
        page.locator("#trace_example_p2 .credit-trajectory__annotations section"),
      ).toHaveCount(8);
    }
  }
});

test("unknown paper uses the explicit empty state", async ({ page }) => {
  await page.goto("/papers/paper_missing");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Paper not found");
});
