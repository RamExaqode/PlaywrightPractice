import {test, expect} from '@playwright/test';

test('Frame handling', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');
    
    //Rotal frames
    const allFrames=await page.frames();
    console.log("Number of frames: ", allFrames.length);

    //Approach 1: Using URL or Name
    //await page.frame('name1');
    //const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
   // await frame1.fill("[name='mytext1']",'Hello Ram');

    //Approach 2: Using Frame locator

    const inputBox=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
    inputBox.fill("Hello Marshivane");

    await page.waitForTimeout(5000);

})