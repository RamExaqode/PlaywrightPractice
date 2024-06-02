import { test, expect } from '@playwright/test';

test('Home Page',async ({page})=>
    //execution will not go stpe by step in asynchroniously
{
    await page.goto('https://demoblaze.com/');
 //await - wait for the function till the page is loaded
 
 const pageTitle=await page.title();
 console.log("Title of the page is: ", pageTitle);
 await expect(page).toHaveTitle('STORE');

 const pageURl=page.url();
 console.log("Page URL is:", pageURl);
 await expect(page).toHaveURL("https://demoblaze.com/");

await page.close();


})