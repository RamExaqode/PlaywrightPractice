import { chromium, test, expect } from '@playwright/test';

test.skip('Dropdown Handling', async () => {
    const browser = await chromium.launch({
        args: ['--disable-http2']
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.redbus.in/');

    //From location
    await page.locator('#src').fill('Pune');

    // Wait for the options to appear
    await page.waitForSelector("//li[@class='sc-iwsKbI jTMXri']/div");

    // Select all options in the dropdown
    const fromCityOptions = await page.$$("li.sc-iwsKbI.jTMXri div");

    for (let option of fromCityOptions) {
        const value = await option.textContent();
        console.log(value);

        if (value.includes('Swargate Pune')) { 
            await option.click(); // Click the element, not the value
            break; // Exit loop after finding the correct option
        }
    }

    //Destination Location

    await page.locator('#dest').fill('Nanded');

    // Wait for the options to appear
    await page.waitForSelector("//li[@class='sc-iwsKbI jTMXri']/div");

    // Select all options in the dropdown
    const destityOptions = await page.$$("li.sc-iwsKbI.jTMXri div");

    for (let option1 of destityOptions) {
        const value2 = await option1.textContent();
        console.log(value2);

        if (value2.includes('Old Mondha')) { 
            await option1.click(); // Click the element, not the value
            break; // Exit loop after finding the correct option
        }
    }

    

    await page.waitForTimeout(5000);
});
