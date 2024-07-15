const { test, expect } = require('@playwright/test');

// Custom annotation for severity
test('critical test', { severity: 'critical' }, async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});

test('minor test', { severity: 'minor' }, async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});
