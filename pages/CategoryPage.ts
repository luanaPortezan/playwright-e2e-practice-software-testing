import { Page } from "@playwright/test";
import { HeaderComponent } from "../components/HeaderComponent";
import { ProductListComponent } from "../components/ProductListComponent";

export class CategoryPage {
  readonly page: Page;
  readonly header: HeaderComponent;
  readonly productList: ProductListComponent;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderComponent(page);
    this.productList = new ProductListComponent(page);
  }

  async visit(categorySlug: string = "hand-tools") {
    await this.page.goto(`/#/category/${categorySlug}`);
  }
}
