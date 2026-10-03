import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('CT-VP-01: Validate product grid display on the home page', async ({ page }) => {
  test.fail(true, 'Known bug: Missing product image - Mapped to Issue #1');

  const homePage = new HomePage(page);
  await homePage.visit();
  await expect(homePage.productCards.first()).toBeVisible();
  
  const productCount = await homePage.productCards.count();
  expect(productCount).toBeGreaterThan(0);

  const firstCard = homePage.productCards.first();
  await expect(firstCard.locator('[data-test="product-name"]')).toBeVisible(); // Nome do produto
  await expect(firstCard.locator('img')).toBeVisible(); // Imagem do produto - Mapeado na Issue #1
  await expect(page.locator('.text-muted').first()).toBeVisible(); // Preço do produto
});