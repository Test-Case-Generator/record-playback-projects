import testData from '../../test-data.json';
const { test, expect } = require('../../../fixtures/walker_fixture.js');
const { heal } = require('../../../fixtures/inline_healer.js');

test('Test One @sanity', async ({ page }) => {
  // Initial navigation
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  await heal(page, 'grey jacket link', 'click', null,
    () => page.getByRole('link', { name: 'Grey jacket £55.00', exact: true }));
  await heal(page, 'grey jacket link', 'click', null,
    () => page.getByRole('link', { name: 'Grey jacket £55.00', exact: true }));

  await heal(page, 'add button', 'click', null,
    () => page.locator('#add'));
  await heal(page, 'add button', 'click', null,
    () => page.locator('#add'));

  await heal(page, 'my cart check out', 'click', null,
    () => page.locator('div').filter({ hasText: /^My Cart \(1\) Check Out$/ }).first());

  await heal(page, 'minicart', 'click', null,
    () => page.locator('#minicart'));

  await heal(page, 'check out link', 'click', null,
    () => page.getByRole('link', { name: 'Check Out', exact: true }));

  await heal(page, 'checkout button', 'click', null,
    () => page.locator('#checkout'));
  await heal(page, 'checkout button', 'click', null,
    () => page.locator('#checkout'));

  // Focus the email input (input#email)

});