import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test.describe("CT-VP-01: Product grid display on the home page", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.visit();
    await expect(homePage.productList.productCards.first()).toBeVisible();
  });

  test("Validate product card shows name", async () => {
    for (const card of await homePage.productList.getAllProducts()) {
      await expect(homePage.productList.productName(card)).toBeVisible(); // Nome do produto
    }
  });

  test("Validate product card shows price", async () => {
    for (const card of await homePage.productList.getAllProducts()) {
      await expect(homePage.productList.productPrice(card)).toBeVisible(); // Preço do produto
    }
  });

  test("Validate product card shows image", async () => {
    test.fail(
      true,
      "Known bug: Missing product image - Mapped to Issue #1 - https://github.com/luanaPortezan/playwright-e2e-practice-software-testing/issues/1",
    );
    for (const card of await homePage.productList.getAllProducts()) {
      await expect(homePage.productList.productImage(card)).toBeVisible(); // Imagem do produto - Mapeado na Issue #1
    }
  });
});
