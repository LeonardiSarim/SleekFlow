import { Locator, Page } from '@playwright/test';

export class LandingPageHelper {
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.loginLink = page.getByRole('link', { name: 'Log In' });
  }
}
