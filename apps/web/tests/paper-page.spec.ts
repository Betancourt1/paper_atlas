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
      name: "TRACE compares adjacent trajectory states",
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
}) => {
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
  }
});

test("unknown paper uses the explicit empty state", async ({ page }) => {
  await page.goto("/papers/paper_missing");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Paper not found");
});
