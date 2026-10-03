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

  // Métodos de verificação (o que podemos verificar nesta página: nome, preço e imagem do produto)
  productName(card: Locator): Locator {
    return card.locator('[data-test="product-name"]'); // Nome do produto
  }

  productPrice(card: Locator): Locator { 
    return card.locator('[data-test="product-price"]'); // Preço do produto
  }

  productImage(card: Locator): Locator { 
    return card.locator('img');  // Imagem do produto
  }

  // Métodos de interação (ações que podemos realizar nesta página)
  async firstProductName(): Promise<string> {
    return this.productName(this.productCards.first()).innerText();
  }

  // Método para clicar no primeiro produto da lista
  async clickFirstProduct() {
    await this.productName(this.productCards.first()).click();  } 

  // Método para voltar à página anterior
  async goBack() { 
  await this.page.goBack();
}

}