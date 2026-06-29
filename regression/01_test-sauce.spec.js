import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('TestSauce @regression', async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloadjued');

  const noirJacketLink = page.locator('#product-29');
  await expect(noirJacketLink).toBeVisible();
  await expect(noirJacketLink).toBeEnabled();
  await noirJacketLink.click();

  await page.waitForLoadState('domcontentloaded');

  const colorSelect = page.locator('#product-select-option-1');
  await expect(colorSelect).toBeVisible();
  await expect(colorSelect).toBeEnabled();
  await colorSelect.click();
  await colorSelect.selectOption({ label: testData.productSelectOption1 });

  const addToCartButton = page.locator('#add');
  await expect(addToCartButton).toBeVisible();
  await expect(addToCartButton).toBeEnabled();
  await addToCartButton.click();
});