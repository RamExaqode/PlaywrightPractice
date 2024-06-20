import { test, expect } from '@playwright/test';
  
test('Home page test', async ({page})=>{

    //Login
    await page.goto("https://demoblaze.com/");
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill("rammarshivane");
    await page.locator('#loginpassword').fill("ram@1234");
    await page.locator("//button[@onclick='logIn()']").click();


    const logoutButton = page.locator('#logout');
    await expect(logoutButton).toBeVisible();
})