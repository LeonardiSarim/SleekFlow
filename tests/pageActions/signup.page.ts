import { Page } from '@playwright/test';
import { SignupPageHelper } from '../pageHelpers/signup.helper';

export class SignupPage {
  private readonly helper: SignupPageHelper;

  constructor(page: Page) {
    this.helper = new SignupPageHelper(page);
  }

  async fillEmail(email: string): Promise<void> {
    await this.helper.emailInput.fill(email);
  }

  async acceptTerms(): Promise<void> {
    await this.helper.termsLabel.click({ position: { x: 10, y: 10 } });
  }

  async submitEmail(): Promise<void> {
    await this.helper.signUpButton.click();
  }

  async fillPassword(password: string): Promise<void> {
    await this.helper.showPasswordSwitch.click();
    await this.helper.passwordInput.fill(password);
  }

  async submitPassword(): Promise<void> {
    await this.helper.signUpButton.click();
  }
}