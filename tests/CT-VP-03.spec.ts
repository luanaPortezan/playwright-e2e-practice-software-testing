import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('CT-VP-03: Validate return to overview using the back button', async ({ page }) => {
  const homePage = new HomePage(page);
    await homePage.visit();
    await homePage.clickFirstProduct();
    await page.goBack();
    await expect(page).toHaveURL('https://v1.practicesoftwaretesting.com/#/'); // URL da página inicial
  await expect(homePage.productCards.first()).toBeVisible(); // Garante que a lista de produtos ainda está visível após voltar
});