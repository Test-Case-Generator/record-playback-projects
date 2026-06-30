import testData from '../../test-data.json';
const { test, expect } = require('../../fixtures/walker_fixture.js');
const { heal } = require('../../fixtures/inline_healer.js');

test('test_demo @regression', async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('domcontentloaded');
  await heal(page, 'grey jacket product link', 'visible', null,
    () => page.locator('#product-1'));
  await heal(page, 'grey jacket product link', 'click', null,
    () => page.locator('#product-1'));

  await page.waitForLoadState('domcontentloaded');

  await heal(page, 'product option select', 'visible', null,
    () => page.locator('#product-select-option-0'));
  await heal(page, 'product option select', 'click', null,
    () => page.locator('#product-select-option-0'));

  await heal(page, 'add to cart button', 'visible', null,
    () => page.locator('#add'));
  await heal(page, 'add to cart button', 'click', null,
    () => page.locator('#add'));

  await heal(page, 'check out link', 'visible', null,
    () => page.getByRole('link', { name: 'Check Out 1', exact: true }));
  await heal(page, 'check out link', 'click', null,
    () => page.getByRole('link', { name: 'Check Out 1', exact: true }));

  await page.waitForLoadState('domcontentloaded');

});