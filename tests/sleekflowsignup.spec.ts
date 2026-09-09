import { test, expect } from '@playwright/test';
import { LandingPage } from './pageActions/landing.page';
import { LoginPage } from './pageActions/login.page';
import { SignupPage } from './pageActions/signup.page';

// Declare a variable at the file level so both the test and afterEach can read it
let dynamicEmail = '';

// This test after each hook will is just example on how to clean up the user created during the test. 
// It is not actually works since this is live production site. 
test.afterEach(async ({ page }) => {
  if (dynamicEmail) {
    console.log(`Cleaning up user: ${dynamicEmail}`);
    
    await page.goto('https://sleekflow.io');
    
    //const userRow = page.locator(`tr:has-text("${dynamicEmail}")`);
    //await userRow.getByRole('button', { name: 'Delete' }).click();
    //await page.getByRole('button', { name: 'Confirm' }).click();
  }
});

test('Test SleekFlow Signup', async ({ page }) => {
  const uniqueId = Date.now();
  dynamicEmail = `sarim.leonardi+${uniqueId}@outlook.com`;
  const landingPage = new LandingPage(page);
  const loginPage = new LoginPage(page);
  const signupPage = new SignupPage(page);

  await landingPage.open();
  await landingPage.openLogin();
  await loginPage.openSignup();
  await signupPage.fillEmail(dynamicEmail);
  await signupPage.acceptTerms();
  await signupPage.submitEmail();
  await signupPage.fillPassword('Test@123');
  await signupPage.submitPassword();
  await expect(page).toHaveURL((url) => {
    return url.origin === 'https://app.sleekflow.io'
      && url.pathname === '/en/'
      && url.searchParams.get('error') === 'access_denied'
      && url.searchParams.get('error_description') === `You need to first verify the email: ${dynamicEmail}`;
  });
});