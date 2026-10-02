import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('CT-VP-02: Validar o redirecionamento para os detalhes do produto', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.visitar();
  
  const primeiroCartao = homePage.productCards.first(); // Isola o primeiro cartão da lista para inspecionar o seu interior
  const nomeEsperado = await primeiroCartao.locator('[data-test="product-name"]').innerText(); // Nome do produto

  await homePage.clicarPrimeiroProduto(); // Clica no primeiro produto da lista
  await expect(page).toHaveURL(/.*#\/product\/1/); //URL do primeiro produto 
  await expect(page.locator('h1[data-test="product-name"]')).toHaveText(nomeEsperado);

});