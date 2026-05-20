import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('t-one @regression', async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Sign in with Email', exact: true }).click();

  const emailInput = page.locator('input[name="email"][type="email"]');
  await expect(emailInput).toBeVisible();
  await emailInput.fill(testData.email);

  // Tab to password field
  await emailInput.press('Tab');

  const passwordInput = page.locator('input[name="password"][type="password"]');
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill(testData.password);

  await expect(page.locator('div').filter({ hasText: /^Email Password Remember me Forgot your password\? Sign in with Email or Sign in with Code$/ }).first()).toBeEnabled();
  await page.locator('div').filter({ hasText: /^Email Password Remember me Forgot your password\? Sign in with Email or Sign in with Code$/ }).first().click();

  await expect(page.locator('div').filter({ hasText: /^Remember me Forgot your password\?$/ }).first()).toBeEnabled();
  await page.locator('div').filter({ hasText: /^Remember me Forgot your password\?$/ }).first().click();

  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Sign in with Email', exact: true }).click();
});