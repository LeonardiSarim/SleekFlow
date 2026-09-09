import { Locator, Page } from '@playwright/test';

export class LoginPageHelper {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly continueButton: Locator;
  readonly signInButton: Locator;
  readonly signupLink: Locator;
  readonly invalidCredentialsMessage: Locator;

  constructor(page: Page) {
    this.emailInput = page.getByRole('textbox', { name: 'Email or username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.signupLink = page.getByRole('link', { name: 'Sign up' });
    this.invalidCredentialsMessage = page.getByText('Wrong username or password');
  }
}
