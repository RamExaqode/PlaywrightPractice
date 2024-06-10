
import {test, expect} from '@playwright/test';

test('Drag and drop action using mouse', async ({page})=>{

await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");

const Rome= page.locator("//div[@id='box6' and contains(text(),'Rome')]");

const Itly= page.locator("#box106");

//Approach 1:
await Rome.hover();
await page.mouse.down();

await Itly.hover();
await page.mouse.up();
console.log("Successfully draged Rome to Itly");


//Approach 2:

const Washington= page.locator("#box3");

const USA= page.locator("#box103");
await Washington.dragTo(USA);

console.log("Successfully draged Washington to USA");






await page.waitForTimeout(5000);
})