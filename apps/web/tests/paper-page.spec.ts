import { expect, test } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const screenshotDirectory = fileURLToPath(
  new URL("../../../artifacts/qa/current/", import.meta.url),
);

test("digest entry opens as a traceable paper @visual", async ({ page }, testInfo) => {
  await page.goto("/papers");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Research digest",
  );
  await expect(page.getByRole("listitem")).toHaveCount(8);
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
    page.getByText(/TRACE assigns dense rewards at tool-call boundaries/),
  ).toBeVisible();
  await expect(page.getByText("arXiv:2607.13988")).toBeVisible();
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
    path: `${screenshotDirectory}/digest-paper-${testInfo.project.name}.png`,
    fullPage: true,
  });
});

test("unknown paper uses the explicit empty state", async ({ page }) => {
  await page.goto("/papers/paper_missing");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Paper not found");
});
