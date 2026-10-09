import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
export class ProductDetailPage extends BasePage {
  readonly productNameTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.productNameTitle = page.locator('h1[data-test="product-name"]');
  }

  async getProductNameText(): Promise<string> {
    return await this.productNameTitle.innerText();
  }
}
