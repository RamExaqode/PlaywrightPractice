import { test, expect } from '@playwright/test';

test('Dropdown Handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // We can select the dropdown values in multiple ways
    await page.locator("#country").selectOption({ label: 'India' }); // label or visible text  
    // await page.locator("#country").selectOption('India'); // Visible text  
    // await page.locator("#country").selectOption({ value: 'india' });  // Visible text
    // await page.locator("#country").selectOption({ index: 1 });  // Visible text

    await page.waitForTimeout(2000);

    // Assertions
    // Check number options present in dropdown - Approach1
    const options = page.locator('#country option');
    await expect(options).toHaveCount(10);

    // Check the number of options present in the dropdown - Approach 2
    const options1 = await page.$$('#country option');             // $$ represents the array  
    console.log("Number of options: ", options1.length);

    // Check presence of value in dropdown - Approach 3 using loop
    const options2 = await page.$$('#country option');             // $$ represents the array  
    for (const option of options2) {
        console.log(await option.textContent());

    }
});
