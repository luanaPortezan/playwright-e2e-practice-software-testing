import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('CT-VP-03: Validar retorno para a visão geral ao usar o botão voltar', async ({ page }) => {
  const homePage = new HomePage(page);
    await homePage.visitar();
    await homePage.clicarPrimeiroProduto();
    await page.goBack();
    await expect(page).toHaveURL('https://v1.practicesoftwaretesting.com/#/'); // URL da página inicial
  await expect(homePage.productCards.first()).toBeVisible(); // Garante que a lista de produtos ainda está visível após voltar
});