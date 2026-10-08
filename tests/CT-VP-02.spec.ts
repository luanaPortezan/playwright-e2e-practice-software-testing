import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("CT-VP-02: Validate redirection to product details", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.visit();

  const firstCard = homePage.productList.productCards.first(); // Isola o primeiro cartão da lista para inspecionar o seu interior
  const expectedName = await homePage.productList
    .productName(firstCard)
    .innerText(); // Nome do produto

  await homePage.productList.clickFirstProduct(); // Clica no primeiro produto da lista
  await expect(page).toHaveURL(/#\/product\/\d+$/); // URL da página de detalhes do produto - Regex para validar o padrão da URL
  await expect(page.locator('h1[data-test="product-name"]')).toHaveText(
    expectedName,
  );
});
