import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('Test 1  @sanity', async ({ page }) => {
  // Initial navigation
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('link', { name: 'Grey jacket £55.00', exact: true })).toBeEnabled();
  await page.getByRole('link', { name: 'Grey jacket £55.00', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Grey jacket £55.00', exact: true })).toBeEnabled();
  await page.getByRole('link', { name: 'Grey jacket £55.00', exact: true }).click();

  await expect(page.locator('#add')).toBeEnabled();
  await page.locator('#add').click();
  await expect(page.locator('#add')).toBeEnabled();
  await page.locator('#add').click();

  await expect(page.locator('div').filter({ hasText: /^My Cart \(1\) Check Out$/ }).first()).toBeEnabled();
  await page.locator('div').filter({ hasText: /^My Cart \(1\) Check Out$/ }).first().click();

  await expect(page.locator('#minicart')).toBeEnabled();
  await page.locator('#minicart').click();

  await expect(page.getByRole('link', { name: 'Check Out', exact: true })).toBeEnabled();
  await page.getByRole('link', { name: 'Check Out', exact: true }).click();

  await expect(page.locator('#checkout')).toBeEnabled();
  await page.locator('#checkout').click();
  await expect(page.locator('#checkout')).toBeEnabled();
  await page.locator('#checkout').click();

  // Focus the email input (input#email)

});
