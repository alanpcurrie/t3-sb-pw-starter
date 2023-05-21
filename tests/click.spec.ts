import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('heading', { name: 'Create T3 App' }).click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'First Steps → Just the basics - Everything you need to know to set up your database and authentication.' }).click();
  await page.getByRole('link', { name: 'Documentation → Learn more about Create T3 App, the libraries it uses, and how to deploy it.' }).click();
  await page.goto('http://localhost:3000/');
});