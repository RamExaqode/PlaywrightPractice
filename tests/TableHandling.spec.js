import {test, expect} from '@playwright/test';

test('Web table handling', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const table=await page.locator("//table[@id='productTable']");

    //1. Extract total number of columns
    const columns=await table.locator('thead tr th')
    console.log("Total number of columns: ", await columns.count());
    //assertions
    expect (await columns.count()).toBe(4); 


     //2. Extract total number of rows
     const rows=await table.locator('tbody tr')
     console.log("Total number of rows: ", await rows.count());
         expect (await rows.count()).toBe(5); 

     //3. Select checkbox product 4 from the table
     
    const matchdeRow=rows.filter({
        has: page.locator('td'),
        hasText: 'product 4'
        
    })
    matchdeRow.locator('input').check();

    await page.waitForTimeout(5000);

})