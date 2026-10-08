import { Page, Locator } from "@playwright/test";

export class HeaderComponent {
  readonly homeLink: Locator;
  readonly handToolsLink: Locator;
  readonly powerToolsLink: Locator;
  readonly contactLink: Locator;

  constructor(page: Page) {
    this.homeLink = page.locator('[data-test="nav-home"]');
    this.handToolsLink = page.locator('[data-test="nav-hand-tools"]');
    this.powerToolsLink = page.locator('[data-test="nav-power-tools"]');
    this.contactLink = page.locator('[data-test="nav-contact"]');
  }

  async openHome() {
    await this.homeLink.click();
  }

  async openHandTools() {
    await this.handToolsLink.click();
  }

  async openPowerTools() {
    await this.powerToolsLink.click();
  }

  async openContact() {
    await this.contactLink.click();
  }
}
