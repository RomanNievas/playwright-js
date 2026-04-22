const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class TimePage extends BasePage {
  constructor(page) {
    super(page);

    this.pageTitle = page.getByRole('heading', { name: 'Time', exact: true });

    this.employeeNameLabel = page.getByText('Employee Name', { exact: true });
    this.employeeNameInput = page.getByPlaceholder('Type for hints...');

    this.viewButton = page.getByRole('button', { name: 'View' });

    this.pendingSection = page.getByText('Timesheets Pending Action');

    this.recordsText = page.getByText('Records Found');
  }

  async validateTimePageLoaded() {
    await expect(this.page).toHaveURL(/time/);
    await expect(this.pageTitle).toHaveText('Time');
  }

  async validateMainElements() {
    await expect(this.employeeNameLabel).toBeVisible();
    await expect(this.employeeNameInput).toBeVisible();
    await expect(this.viewButton).toBeVisible();
    await expect(this.pendingSection).toBeVisible();
  }

  async searchEmployee(name) {
    await this.employeeNameInput.fill(name);
    await this.viewButton.click();
  }

  async validateResults() {
    await expect(this.recordsText).toBeVisible();
  }
}

module.exports = TimePage;
