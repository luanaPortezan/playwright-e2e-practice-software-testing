import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('CT-VP-02: Validate redirection to product details', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.visit();
  
  const firstCard = homePage.productCards.first(); // Isola o primeiro cartão da lista para inspecionar o seu interior
  const expectedName = await firstCard.locator('[data-test="product-name"]').innerText(); // Nome do produto

  await homePage.clickFirstProduct(); // Clica no primeiro produto da lista
  await expect(page).toHaveURL(/.*#\/product\/1/); //URL do primeiro produto 
  await expect(page.locator('h1[data-test="product-name"]')).toHaveText(expectedName);

});