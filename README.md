# SleekFlow
1. Setup Playwright Project: npm init playwright@latest
 - Install all dependencies and browsers too

2. Resolve any conflict that may happen in any json file

3. Run test:
    - npx playwright test tests/sleekflowsignup.spec.ts --headed
    - npx playwright test tests/sleekflowlogin.spec.ts --headed 

4. It will only run in Chromium for now as I disabled the other browser

5. I also try to implement POM concept

6. Playwright.yml file is there to connect to CI/CD pipeline

Note:
- For the signup test, i introduce the hook to cleanup the test data, but since the site is production site, then it will be impossibel to do that. Maybe only delete from API endpoint will do. 
- The project setup is not by AI. I install playwright and generate test by myself using Playwright functionality. I use AI to help me implement POM concept, review the test and fix any unresolve issues