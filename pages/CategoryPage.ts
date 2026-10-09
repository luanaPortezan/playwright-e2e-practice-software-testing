import { Page } from "@playwright/test";
import { ProductListComponent } from "../components/ProductListComponent";
import { BasePage } from "./BasePage";

export class CategoryPage extends BasePage {
  readonly productList: ProductListComponent;

  constructor(page: Page) {
    super(page);
    this.productList = new ProductListComponent(page);
  }

  async visit(categorySlug: string = "hand-tools") {
    await this.page.goto(`/#/category/${categorySlug}`);
  }
}
