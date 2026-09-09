import { Page } from '@playwright/test';
import { LandingPageHelper } from '../pageHelpers/landing.helper';

export class LandingPage {
  private readonly helper: LandingPageHelper;

  constructor(private readonly page: Page) {
    this.helper = new LandingPageHelper(page);
  }

  async open(): Promise<void> {
    await this.page.goto('https://sleekflow.io/');
  }

  async openLogin(): Promise<void> {
    await this.helper.loginLink.click();
  }
}