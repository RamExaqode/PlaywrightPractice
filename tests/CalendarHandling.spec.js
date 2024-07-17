import { test, expect } from '@playwright/test';

test.skip('Date picker', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //Approach1: Direct fill the date if datepicker allows
 // await page.fill('#datepicker', '06/09/2025');

  const year = "2020";
  const month = "June";
  const date = "12";

  await page.click('#datepicker'); // opens calendar

  while (true) {
    const currentYear = await page.locator('.ui-datepicker-year').textContent(); // it retrieves the text inside the element
    const currentMonth = await page.locator('.ui-datepicker-month').textContent();

    if (currentYear == year && currentMonth == month) {
      break;
    }

   /// await page.locator("[title='Next']").click(); //clicks on the next icon
    await page.locator("[title='Prev']").click(); //clicks on the next icon

  }

  // Select the date using loop

 const dates=await page.$$("a.ui-state-default")  //used to select multiple elements that match a given selector. 
                                                         //This method returns an array of elements
  
  for (const dt of dates){
    if(await dt.textContent()==date){  //it will not click on date without await
        dt.click();
        break;
    }
    
  }
  

  //Date selection withput loop
 // await page.click("//a[@class='ui-state-default'][text()='${date}']");  //not working

  await page.waitForTimeout(5000);

});
