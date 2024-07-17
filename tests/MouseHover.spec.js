import { test, expect } from '@playwright/test';

test.skip('Date picker', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');



  const desktop= await page.locator("//a[@class='nav-link dropdown-toggle'][contains(text(),'Desktops')]");
  const Mac= await page.locator("//a[@class='nav-link'][contains(text(),'Mac (1)')]");

  //Mouse hover
  desktop.hover();
  Mac.hover();

await page.waitForTimeout(5000);
})
