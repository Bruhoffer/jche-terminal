import { test, expect } from "@playwright/test";

const routes = ["/overview", "/trade-history", "/disclosures", "/asset-pipeline"] as const;

for (const route of routes) {
  test.describe(`layout responsiveness for ${route}`, () => {
    test("mobile: shows mobile shell and hides desktop sidebar", async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 780 });
      await page.goto(route);

      // Mobile top bar with name and menu button
      await expect(page.getByText("Justin Cheong").first()).toBeVisible();
      await expect(
        page.getByRole("button", { name: /open navigation/i }),
      ).toBeVisible();

      // Desktop sidebar label should not be visible in mobile layout
      await expect(page.getByText("Market Watch")).not.toBeVisible();
    });

    test("desktop: shows desktop sidebar and hides mobile menu", async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 });
      await page.goto(route);

      await expect(page.getByText("Market Watch")).toBeVisible();
      await expect(page.getByRole("button", { name: /menu/i })).toHaveCount(0);
    });
  });
}

test("trade history uses cards on mobile and table on desktop", async ({ page }) => {
  // Mobile: expect cards, no table
  await page.setViewportSize({ width: 360, height: 780 });
  await page.goto("/trade-history");

  await expect(page.getByRole("table")).toHaveCount(0);
  const cardCount = await page.getByRole("article").count();
  expect(cardCount).toBeGreaterThan(0);

  // Desktop: expect table
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/trade-history");

  await expect(page.getByRole("table")).toHaveCount(1);
});

const pagesToCheck = ["/overview", "/trade-history", "/asset-pipeline"] as const;

for (const route of pagesToCheck) {
  test(`no horizontal overflow on ${route} main content (mobile)`, async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 780 });
    await page.goto(route);

    const hasScroll = await page.evaluate(() => {
      const main = document.querySelector("main");
      if (!main) return false;
      return main.scrollWidth > main.clientWidth + 1; // small tolerance
    });

    expect(hasScroll).toBe(false);
  });
}

test("overview 'Execute Trade | Email Justin' CTA uses mailto link", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/overview");

  const cta = page.getByRole("link", {
    name: /execute trade \| email justin/i,
  });

  await expect(cta).toHaveAttribute(
    "href",
    "mailto:justin.cheong@u.nus.edu?subject=Execute%20Trade%20on%20%24JCHE",
  );
});

