const { test, expect } = require('@playwright/test');

import { CartPage } from "../Pages/CartPage";
import { HomePage } from "../Pages/HomePage";
import { LoginPage } from "../Pages/LoginPage";

test('Calling objects from Page class', async({page})=>{

//Login
const login=new LoginPage(page);
await login.gotoLoginPage();
await login.login('rammarshivane', 'ram@1234');
await page.waitForTimeout(4000);



//Home Page
const home=new HomePage(page);

await home.addProductToCart("Nexus 6");
//await home.addProductToCart("Sony xperia z5");

await page.waitForTimeout(4000);
await home.gotoCart();

//Cart
const cart= new CartPage(page);
//const status=await cart.checkProductInCart("Nexus 6");
//expect (status).toBeTruthy();

await page.waitForTimeout(4000);




})