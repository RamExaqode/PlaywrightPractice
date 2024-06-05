import { test, expect } from '@playwright/test';

test('Checkbox handling', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  test.setTimeout(60000); // 60 seconds

  const sundayCheckbox = page.locator("//input[@id='sunday' and @type='checkbox']");

  //await sundayCheckbox.check();
  //await expect(sundayCheckbox).toBeChecked();

  await page.screenshot({ path: 'screenshots/sunday-checkbox.png' });


  const checkboxLocators = [
    "//input[@id='sunday' and @type='checkbox']",
    "//input[@id='monday' and @type='checkbox']",
    "//input[@id='tuesday' and @type='checkbox']",
    "//input[@id='wednesday' and @type='checkbox']",
    "//input[@id='friday' and @type='checkbox']"
  ];

  for (const locator of checkboxLocators) {
    await page.locator(locator).check();
  }
  await page.waitForTimeout(5000);

  for (const locator of checkboxLocators) {
    if (await page.locator(locator).isChecked()) {
      await page.locator(locator).uncheck();
    }
    await page.waitForTimeout(5000);

  }
});


