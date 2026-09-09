import { Locator, Page } from '@playwright/test';

export class SignupPageHelper {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signUpButton: Locator;
  readonly showPasswordSwitch: Locator;
  readonly termsLabel: Locator;

  constructor(page: Page) {
    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    this.showPasswordSwitch = page.getByRole('switch', { name: 'Show password' });
    this.termsLabel = page.locator("label:has-text('By checking this box')");
  }
}
