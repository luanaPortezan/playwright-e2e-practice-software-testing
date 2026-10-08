import { Page } from '@playwright/test';
import { ProductListComponent } from '../components/ProductListComponent';

export class HomePage {
  readonly page: Page;
  readonly productList: ProductListComponent;

  constructor(page: Page) {
    this.page = page;
    this.productList = new ProductListComponent(page);
  }

  // Métodos de ação (o que o usuário pode fazer nesta página)
  async visit() {
    await this.page.goto('/'); // Como a baseURL no playwright.config.ts, basta passar a barra '/'
  }

  // Método para voltar à página anterior
  async goBack() { 
  await this.page.goBack();
} 

}