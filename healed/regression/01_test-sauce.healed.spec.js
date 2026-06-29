import testData from '../../test-data.json';
const { test, expect } = require('../../fixtures/walker_fixture.js');
const { heal } = require('../../fixtures/inline_healer.js');

test('TestSauce @regression', async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloadjued');

  await heal(page, 'noir jacket link', 'visible', null,
    () => page.locator('#product-29'));
  await heal(page, 'noir jacket link', 'click', null,
    () => page.locator('#product-29'));

  await page.waitForLoadState('domcontentloaded');

  await heal(page, 'color select', 'visible', null,
    () => page.locator('#product-select-option-1'));
  await heal(page, 'color select', 'click', null,
    () => page.locator('#product-select-option-1'));
  await heal(page, 'color select', 'selectOption', { label: testData.productSelectOption1 },
    () => page.locator('#product-select-option-1'));

  await heal(page, 'add to cart button', 'visible', null,
    () => page.locator('#add'));
  await heal(page, 'add to cart button', 'click', null,
    () => page.locator('#add'));
});