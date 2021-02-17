import Page from './Page';

export class AccountSummaryView extends Page {
  get yearDropDown() {
    return $('div[data-test-handler=cp-ma-account-summary-reports_select]');
  }

  dropDownOption(index) {
    return $(`div[data-test-id=SelectCustom__dropdown-option--${index}]`);
  }

  get dropDownOptions() {
    return this.yearDropDown.$$('option');
  }

  get exportToPdfButton() {
    return $('div.cp-ma-account-summary-button-export button');
  }

  selectSummaryReportYear() {
    const optionsCount = this.dropDownOptions.length - 1;
    const index = Math.floor(Math.random() * optionsCount);
    this.yearDropDown.click();
    this.dropDownOption(index).click();
  }

  exportSummary() {
    this.yearDropDown.waitForDisplayed();
    this.exportToPdfButton.click();
  }
}

const accountSummaryView = new AccountSummaryView();
export default accountSummaryView;
