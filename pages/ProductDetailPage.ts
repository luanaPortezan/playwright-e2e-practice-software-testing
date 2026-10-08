import { Page, Locator } from "@playwright/test";
import { HeaderComponent } from "../components/HeaderComponent";

export class ProductDetailPage {
  readonly page: Page;
  readonly header: HeaderComponent;
  readonly productNameTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderComponent(page);

    this.productNameTitle = page.locator('h1[data-test="product-name"]');
  }

  async getProductNameText(): Promise<string> {
    return await this.productNameTitle.innerText();
  }
}
