import { test, expect } from '@playwright/test';
import { time } from 'console';
  
test('Keyboard Actions', async ({page})=>{

    await page.goto("https://gotranscript.com/text-compare");
    
    const textArea1=await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill("Welcome RAM");
    const textArea2= await page.locator("//textarea[@placeholder='Paste another version of the text here.']");
    
    //ctrl+A
    await page.keyboard.press('Control+A');

    //ctrl+c
    await page.keyboard.press('Control+C');

    //Tab
    await page.keyboard.press('Tab');


    //ctrl+v
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);
    
});
