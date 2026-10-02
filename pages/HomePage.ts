import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCards = page.locator('li').filter ({ 
      has: page.locator('[data-test^="product-"]')
    });
  }

  // Métodos de ação (o que o usuário pode fazer nesta página)
  async visitar() {
    await this.page.goto('/'); // Como a baseURL no playwright.config.ts, basta passar a barra '/'
  }

  async clicarPrimeiroProduto() {
  await this.productCards.first().click();
  }
}