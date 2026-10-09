import { Page } from "@playwright/test";
import { HeaderComponent } from "../components/HeaderComponent";

export class BasePage {
  readonly page: Page;
  readonly header: HeaderComponent;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderComponent(page);
  }

  async goBack() {
    await this.page.goBack();
  }
}
