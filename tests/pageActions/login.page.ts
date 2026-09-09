import { Locator, Page } from '@playwright/test';
import { LoginPageHelper } from '../pageHelpers/login.helper';

export class LoginPage {
  private readonly helper: LoginPageHelper;

  constructor(private readonly page: Page) {
    this.helper = new LoginPageHelper(page);
  }

  get invalidCredentialsMessage(): Locator {
    return this.helper.invalidCredentialsMessage;
  }

  async continueWithEmail(email: string): Promise<void> {
    await this.helper.emailInput.fill(email);
    await this.helper.continueButton.click();
  }

  async signInWithPassword(password: string): Promise<void> {
    await this.helper.passwordInput.fill(password);
    await this.helper.signInButton.click();
  }

  async openSignup(): Promise<void> {
    await this.helper.signupLink.click();
  }
}