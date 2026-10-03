import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('CT-VP-01: Validar exibição da grade de produtos na página inicial', async ({ page }) => {
  test.fail(true, 'Falha conhecida: Imagem ausente no cartão - Mapeado na Issue #1');

  const homePage = new HomePage(page);
    await homePage.visitar();
    await expect(homePage.productCards.first()).toBeVisible();
  
  const quantidade = await homePage.productCards.count();
  expect(quantidade).toBeGreaterThan(0);

  const primeiroCartao = homePage.productCards.first();
    await expect(primeiroCartao.locator('[data-test="product-name"]')).toBeVisible(); // Nome do produto
    await expect(primeiroCartao.locator('img')).toBeVisible(); // Imagem do produto - Mapeado na Issue #1
    await expect(page.locator('.text-muted').first()).toBeVisible(); // Preço do produto
});