const { test, expect } = require('@playwright/test');
const TimePage = require('../pages/TimePage');

test('buscar empleado en Time', async ({ page }) => {
  const timePage = new TimePage(page);

  // Login
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Ir a Time
  await page.getByRole('link', { name: 'Time' }).click();

  // Usar POM
  await timePage.validateTimePageLoaded();
  await timePage.searchEmployee('Test');

  // Validar Resultados
  await timePage.validateResults();
});
