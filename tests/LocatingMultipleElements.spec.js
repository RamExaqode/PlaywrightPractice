import { test, expect } from '@playwright/test';

test('Locate All The Liks on the WebPage', async ({ page }) => {

    await page.goto('https://demoblaze.com/');
    const Links=await page.$$('a');

    //console.log(Links);

    for(const link of Links)
    {
        const linkText=await link.textContent();
        console.log(linkText);
    }
    
    const products=await page.$$("//div[@id='tbodyid']//div//h4/a");

    for(const product of products)
        {
            const productName= await product.textContent();
            console.log(productName);
        }


})