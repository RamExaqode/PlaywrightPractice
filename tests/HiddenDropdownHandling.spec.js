import { test, expect } from '@playwright/test';

test.beforeEach(async ({ context }) => {
    // Clear cookies and permissions before each test
    await context.clearCookies();
    await context.clearPermissions();
  });
  
test('Hidden dropdown handling', async ({ page }) => {
    await page.waitForTimeout(5000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
    //Page.GetByAltText() to locate an element, usually image, by its text alternative.
    const logo=page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //Page.GetByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

    await page.waitForTimeout(5000);
    await page.getByRole('button', {type: 'submit'}).click();
    await page.waitForTimeout(5000);
    //Click on PIM option
    await page.locator("//a[normalize-space()='PIM']").click();

    await page.waitForTimeout(5000);
    //Click on the drpdown
    await page.locator("///*[@id='app']/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[1]").click();
    await page.waitForTimeout(5000);
    //waiting for options to be visible
    await page.waitForTimeout(3000);
    const options=await page.$$("//div[@role='listbox']//span")
    for(let option of options)
 {
    const jobTitle=await option.textContent();
    console.log(jobTitle);
    if(jobTitle.includes('QA Engineer'))
    {
        await option.click();
        break;
    }
    await page.waitForTimeout(5000);  


 }   
});