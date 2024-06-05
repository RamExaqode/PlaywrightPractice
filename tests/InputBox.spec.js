import { test, expect } from '@playwright/test';

test('Input box handling', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

await expect(page.locator("//input[@id='name']")).toBeVisible();
await expect(page.locator("//input[@id='name']")).toBeEmpty();
await expect(page.locator("//input[@id='name']")).toBeEditable();
await expect(page.locator("//input[@id='name']")).toBeVisible();

await page.locator("//input[@id='name']").fill('Ram');
await page.waitForTimeout(5000); //Pauses the code for 5 seconds




})
