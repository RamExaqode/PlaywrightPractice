import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByRole('link', { name: 'Dependents' }).click();
  await page.getByRole('link', { name: 'Job' }).click();
  await page.getByRole('link', { name: 'Qualifications' }).click();
});