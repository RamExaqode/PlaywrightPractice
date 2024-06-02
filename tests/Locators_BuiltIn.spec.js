import { test, expect } from '@playwright/test';

test('Built-in locators', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   
    //Page.GetByAltText() to locate an element, usually image, by its text alternative.
    const logo=page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //Page.GetByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

    await page.getByRole('button', {type: 'submit'}).click();
    
    expect(page.getByText('Dashboard'));
});
