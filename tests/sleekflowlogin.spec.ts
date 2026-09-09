import { test, expect } from '@playwright/test';
import { LandingPage } from './pageActions/landing.page';
import { LoginPage } from './pageActions/login.page';

test('logs in with valid credentials', async ({ page }) => {
  const landingPage = new LandingPage(page);
  const loginPage = new LoginPage(page);

  await landingPage.open();
  await landingPage.openLogin();
  await loginPage.continueWithEmail('sarim.leonardi@outlook.com');
  await loginPage.signInWithPassword('Test@123');
  await expect(page).toHaveURL(/https:\/\/app\.sleekflow\.io\/en\/register-company(?:\?.*)?$/);
});

test('shows an error for invalid email or password', async ({ page }) => {
  const landingPage = new LandingPage(page);
  const loginPage = new LoginPage(page);

  await landingPage.open();
  await landingPage.openLogin();
  await loginPage.continueWithEmail('unknown.user@example.com');
  await loginPage.signInWithPassword('WrongPassword@123');

  await expect(loginPage.invalidCredentialsMessage).toBeVisible();
});