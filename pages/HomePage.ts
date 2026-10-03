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
  async visit() {
    await this.page.goto('/'); // Como a baseURL no playwright.config.ts, basta passar a barra '/'
  }

  // Método para clicar no primeiro produto da lista
  async clickFirstProduct() {
    await this.productCards.first().locator('[data-test="product-name"]').click();  // Clica no primeiro produto da lista
  } 

  async goBack() { 
  await this.page.goBack(); // Volta para a página anterior - navegador
}

}