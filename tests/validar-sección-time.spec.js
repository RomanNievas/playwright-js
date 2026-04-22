const { test } = require('@playwright/test');
const TimePage = require('../pages/TimePage');

test('validar sección Time', async ({ page }) => {
  const timePage = new TimePage(page);

  // 1. Ir al login
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // 2. Loguearse
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // 3. Ir a Time
  await page.getByRole('link', { name: 'Time' }).click();

  // 4. Validaciones
  await timePage.validateTimePageLoaded();
  await timePage.validateMainElements();
});
