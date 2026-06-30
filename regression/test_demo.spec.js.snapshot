import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('test_demo @regression', async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('domcontentloaded');
  const greyJacketProductLink = page.locator('#product-1');
  await expect(greyJacketProductLink).toBeVisible();
  await expect(greyJacketProductLink).toBeEnabled();
  await greyJacketProductLink.click();

  await page.waitForLoadState('domcontentloaded');

  const productOptionSelect = page.locator('#product-select-option-0');
  await expect(productOptionSelect).toBeVisible();
  await expect(productOptionSelect).toBeEnabled();
  await productOptionSelect.click();

  const addToCartButton = page.locator('#add');
  await expect(addToCartButton).toBeVisible();
  await expect(addToCartButton).toBeEnabled();
  await addToCartButton.click();

  const checkOutLink = page.getByRole('link', { name: 'Check Out 1', exact: true });
  await expect(checkOutLink).toBeVisible();
  await expect(checkOutLink).toBeEnabled();
  await checkOutLink.click();

  await page.waitForLoadState('domcontentloaded');

});