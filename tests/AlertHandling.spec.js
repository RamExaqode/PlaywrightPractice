import { chromium, test, expect } from '@playwright/test';
import exp from 'constants';
import { skip } from 'node:test';


test('Alert Handling', async ({page}) => {
   
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling alert handling
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box');
        await page.waitForTimeout(3000);
        await dialog.accept();

    })
    await page.click("//button[@onclick='myFunctionAlert()']");

await page.waitForTimeout(5000);

});

test('Confirmation Dialogbox Ok or Cancel Handling', async ({page}) => {
   
    //await page.goto('https://testautomationpractice.blogspot.com/');

    // Refresh the page
    await page.reload();

    // Enabling alert handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await page.waitForTimeout(3000);
        await dialog.accept(); // Accept the confirmation dialog
        // If you want to test the cancel functionality, uncomment the following line and comment the above line
        // await dialog.dismiss(); 
    });

    // Triggering the confirmation dialog
    await page.click("//button[@onclick='myFunctionConfirm()']");

    // Verify the text after accepting the dialog
    await expect(page.locator('#demo')).toHaveText('You pressed OK!');
    
    await page.waitForTimeout(5000);
});

test('Prompt alert Handling', async ({page}) => {
   
    //await page.goto('https://testautomationpractice.blogspot.com/');

    // Refresh the page
    await page.reload();
    
    // Enabling alert handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue('Harry Potter'))
        await page.waitForTimeout(3000);
        await dialog.accept('Ram Marshivane'); // Accept the confirmation dialog
        // If you want to test the cancel functionality, uncomment the following line and comment the above line
        // await dialog.dismiss(); 
    });

    // Triggering the confirmation dialog
    await page.click("//button[@onclick='myFunctionPrompt()']");

    // Verify the text after accepting the dialog
    await expect(page.locator('#demo')).toHaveText('Hello Ram Marshivane! How are you today?');
    
    await page.waitForTimeout(5000);
});