import { test, expect } from '@playwright/test';

test.describe('@Sanity Tests', () => {
    test('Test1', async ({ page }) => {
        console.log("This is test 1");
        // Your test logic
    });

    test('Test2', async ({ page }) => {
        console.log("This is test 2");
        // Your test logic
    });

    test('Test3', async ({ page }) => {
        console.log("This is test 3");
        // Your test logic
    });
});

test.describe('@Regression Tests', () => {
    test('Test4', async ({ page }) => {
        console.log("This is test 4");
        // Your test logic
    });

    test('Test5', async ({ page }) => {
        console.log("This is test 5");
        // Your test logic
    });
});

// npx playwright test Tags.spec.js --grep="@Sanity" => this command executes only tests associated with the Sanity tag

//      