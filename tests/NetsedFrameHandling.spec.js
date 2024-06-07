import {test, expect} from '@playwright/test';

test('Frame handling', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');
    

})