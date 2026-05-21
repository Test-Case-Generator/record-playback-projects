import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('0805-013 @regression', async ({ page }) => {
  // 1. Go to the initial page (use first meaningful URL from TRACE)
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('link', { name: 'Grey jacket £55.00', exact: true })).toBeEnabled();
  await page.getByRole('link', { name: 'Grey jacket £55.00', exact: true }).click();

  await page.waitForLoadState('domcontentloaded');

  await expect(page.locator('#product-select-option-0')).toBeEnabled();
  await page.locator('#product-select-option-0').click();

  await expect(page.locator('#add')).toBeEnabled();
  await page.locator('#add').click();

  await expect(page.getByRole('link', { name: 'Check Out', exact: true })).toBeEnabled();
  await page.getByRole('link', { name: 'Check Out', exact: true }).click();

  await page.waitForLoadState('domcontentloaded');

  await expect(page.locator('input[name="updates[]"][type="text"]')).toBeEditable();
  await page.locator('input[name="updates[]"][type="text"]').fill(testData.cart);

  await expect(page.locator('#checkout')).toBeEnabled();
  await page.locator('#checkout').click();
});