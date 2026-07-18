import { expect, test } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const paperPath = "/papers/paper_attention_is_all_you_need";
const screenshotDirectory = fileURLToPath(
  new URL("../../../artifacts/qa/current/", import.meta.url),
);

test("paper fixture is readable and traceable @visual", async ({ page }, testInfo) => {
  await page.goto(paperPath);

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Attention Is All You Need",
  );
  await expect(
    page.getByText(
      "A sequence transduction architecture based entirely on attention, without recurrence or convolution.",
    ),
  ).toBeVisible();
  await expect(page.getByText("arXiv:1706.03762")).toBeVisible();
  await expect(page.getByText("PaperSummary v1")).toBeVisible();

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
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
    await page.keyboard.press("Enter");
    await expect(menuContainer).not.toHaveAttribute("open", "");
    await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
  }

  mkdirSync(screenshotDirectory, { recursive: true });
  await page.screenshot({
    path: `${screenshotDirectory}/paper-${testInfo.project.name}.png`,
    fullPage: true,
  });
});

test("unknown paper uses the explicit empty state", async ({ page }) => {
  await page.goto("/papers/paper_missing");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Paper not found");
});
