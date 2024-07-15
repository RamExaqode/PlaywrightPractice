import { test, expect } from '@playwright/test';

test('Radio button handling', { severity: 'critical' }, async ({ page }) => {

//test('Radio button handling', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Corrected the XPath selectors
  await page.locator("//input[@id='male']").check();

  // Corrected assertions
  await expect(page.locator("//input[@id='male']")).toBeChecked();
  await expect(page.locator("//input[@id='female']")).not.toBeChecked();

  // Removed unnecessary timeout for brevity
  await page.waitForTimeout(2000);
});
