import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { CategoryPage } from "../pages/CategoryPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";

test.describe("CT-PD-01: Access Product Detail Page", () => {
  let homePage: HomePage;
  let categoryPage: CategoryPage;
  let productDetailPage: ProductDetailPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    categoryPage = new CategoryPage(page);
    productDetailPage = new ProductDetailPage(page);
  });

  test("Must access product details via Home Page grid", async () => {
    await homePage.visit();

    // Ponto de sincronização e captura estática
    const firstProductCard = homePage.productList.productCards.first();
    await expect(firstProductCard).toBeVisible();
    const expectedName = await homePage.productList
      .productName(firstProductCard)
      .innerText();

    await homePage.productList.clickFirstProduct();

    // Asserção com polling automático na nova página
    await expect(productDetailPage.productNameTitle).toHaveText(expectedName);
  });

  test("Must access product details via Category Page navigation", async () => {
    await homePage.visit();
    await homePage.header.openHandTools();

    // Sincronização na nova rota
    const firstProductCard = categoryPage.productList.productCards.first();
    await expect(firstProductCard).toBeVisible();

    const expectedName = await categoryPage.productList
      .productName(firstProductCard)
      .innerText();
    await categoryPage.productList.clickFirstProduct();

    // Asserção final na página de detalhes
    await expect(productDetailPage.productNameTitle).toHaveText(expectedName);
  });
});
