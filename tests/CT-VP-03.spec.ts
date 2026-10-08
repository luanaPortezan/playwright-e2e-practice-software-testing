import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("CT-VP-03: Validate return to overview using the back button", async ({
  page,
}) => {
  const homePage = new HomePage(page);
  await homePage.visit();

  await homePage.productList.clickFirstProduct();
  await expect(page).toHaveURL(/#\/product\/\d+$/); // Precondição: URL da página de detalhes do produto

  await homePage.goBack();
  await expect(page).toHaveURL(/#\/$/); // URL da página inicial - Regex para validar o padrão da URL
  await expect(homePage.productList.productCards.first()).toBeVisible(); // Garante que a lista de produtos ainda está visível após voltar
});
