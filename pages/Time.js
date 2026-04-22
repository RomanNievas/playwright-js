const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class Time extends BasePage {
  constructor(page) {
    super(page);

    this.TimeTitle = page.locator('h6');
    this.Time
  }

  async validatePimPageLoaded() {
    await expect(this.page).toHaveURL(/pim/);
    await expect(this.pimTitle).toHaveText('PIM');
  }

  async validatePimMainElements() {
    await expect(this.employeeNameLabel).toBeVisible();
    await expect(this.employeeIdLabel).toBeVisible();
    await expect(this.searchButton).toBeVisible();
    await expect(this.resetButton).toBeVisible();
  }
}

module.exports = PimPage;