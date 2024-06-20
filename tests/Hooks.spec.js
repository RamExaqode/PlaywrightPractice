import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Navigate to the website
    await page.goto("https://demoblaze.com/");
    
    // Log in
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill("rammarshivane");
    await page.locator('#loginpassword').fill("ram@1234");
    await page.locator("//button[@onclick='logIn()']").click();
});

test.afterEach(async ({ page }) => {
    // Log out
    await page.locator('#logout2').click();
    await page.waitForTimeout(5000);
});

test('Verify Username and Add Product to Cart', async ({ page }) => {
    // Verify the username
    await page.waitForSelector("#nameofuser");
    const userNameElement = page.locator("#nameofuser");
    const userNameText = await userNameElement.textContent();
    const userName = userNameText.replace('Welcome ', '').trim();
    console.log("Username is:", userName);
    expect(userName).toBe("rammarshivane");

    // Add Product to cart
    await page.locator("//a[contains(text(),'Samsung galaxy s6')]").click();
    await page.locator("//a[@class='btn btn-success btn-lg' and contains (text(),'Add to cart')]").click();

    // Handle the alert dialog
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    });

    await page.waitForTimeout(5000); // Add appropriate wait if necessary
});


/*
test('Home page test', async ({page})=>{

    //Login
    await page.goto("https://demoblaze.com/");
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill("rammarshivane");
    await page.locator('#loginpassword').fill("ram@1234");
    await page.locator("//button[@onclick='logIn()']").click();

    //Home page
    // Wait for the element to be available in the DOM
   await page.waitForSelector("#nameofuser");

    const userNameElement = page.locator("#nameofuser");

    // Get the text content of the username element
    const userNameText = await userNameElement.textContent();

    // Extract the actual username from the text content
    const userName = userNameText.replace('Welcome ', '').trim();

    // Print the username to the console
    console.log("Username is:", userName);

    //Logout
    await page.locator('#logout2').click();

    await page.waitForTimeout(5000);

    //Add Product to Cart

    //Login
    await page.goto("https://demoblaze.com/");
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill("rammarshivane");
    await page.locator('#loginpassword').fill("ram@1234");
    await page.locator("//button[@onclick='logIn()']").click();

    //Add Product to cart
    await page.locator("//a[contains(text(),'Samsung galaxy s6')]").click();
    await page.locator("//a[@class='btn btn-success btn-lg' and contains (text(),'Add to cart') ]").click();
    await page.waitForTimeout(5000);


    page.on('dialog', async dialog =>{
        expect (dialog.message()).toContain('Product added');
        await dialog.accept();
        await page.waitForTimeout(3000);

    })



     //Logout
     await page.locator('#logout2').click();

     await page.waitForTimeout(5000);
        
}); */
  