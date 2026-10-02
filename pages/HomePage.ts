import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // elementos no DOM
    this.productCards = page.locator('[data-test^="product-"]'); 
  }

  // 3. Métodos de ação (o que o usuário pode fazer nesta página)
  async visitar() {
    // Como a baseURL no playwright.config.ts, basta passar a barra '/'
    await this.page.goto('/'); 
  }
}