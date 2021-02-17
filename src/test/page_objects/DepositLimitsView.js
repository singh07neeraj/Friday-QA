import Page from './Page';

export class DepositLimitsView extends Page {
  get depositLimitNotice() {
    return $('div.cp-ma-deposit-limits__noticeText');
  }

  get increaseDepositLink() {
    return $('.cp-ma-deposit-limits__limit-item-select__increase-link a');
  }

  get howDoesItWorkLink() {
    return $('.cp-ma-deposit-limits__noticeText a');
  }

  get dayLimitsButton() {
    return $('.cp-ma-deposit-limits__limit-item:nth-child(1) header');
  }

  get weekLimitsButton() {
    return $('.cp-ma-deposit-limits__limit-item:nth-child(2) header');
  }

  get monthLimitsButton() {
    return $('.cp-ma-deposit-limits__limit-item:nth-child(3) header');
  }

  get nativeSelect() {
    return $('[data-test-id="Portal"] > div > div');
  }

  get saveButton() {
    return $('.cp-ma-deposit-limits__footer button');
  }

  get successMessage() {
    return $('.cp-ma-cc__success-message-text');
  }

  get limitsItem() {
    return $('.cp-ma-deposit-limits__limit-item');
  }

  get weekLimitsChange() {
    return $('[data-test-id="SelectCustom__dropdown-option--2"]');
  }

  get weekLimitsDecreaseItaly() {
    return $('[data-test-id="SelectCustom__dropdown-option--1"]');
  }

  get otherAmountLimitItaly() {
    return $('[data-test-id="SelectCustom__dropdown-option--6"]');
  }

  get enterAmount() {
    return $('[data-test-id="Input.input"]');
  }

  get dropDown() {
    return $('[data-test-id="SelectCustom__value"]');
  }

  getDepositLimitsValue() {
    return this.dropDown.getText();
  }

  getAllDepositLimitsButtons() {
    return $$('.cp-ma-deposit-limits__limit-item header');
  }

  getAllDepositLimitsInitialValues() {
    return [this.dayLimitsButton.getText(), this.weekLimitsButton.getText(), this.monthLimitsButton.getText()];
  }

  getAllSelectOptions() {
    return this.nativeSelect.getText();
  }

  getIncreaseDepositLink(depositType) {
    depositType.click();
    return this.increaseDepositLink.getAttribute('href');
  }

  getHowItWorksLink() {
    return this.howDoesItWorkLink.getAttribute('href');
  }

  confirmDayLimits() {
    this.dayLimitsButton.click();
  }

  confirmLimitsChange() {
    this.limitsItem.click();
    this.weekLimitsChange.click();
  }

  confirmDecreaseWeekLimits() {
    this.weekLimitsDecreaseItaly.click();
  }

  confirmOtherAmountLimits() {
    this.limitsItem.click();
    this.otherAmountLimitItaly.click();
  }

  setAmountValue(value) {
    this.enterAmount.setValue(value);
  }

  openDropDown() {
    this.dropDown.click();
  }

  saveDepositLimits() {
    this.saveButton.click();
  }

  getDepositLimitValue() {
    return this.dayLimitsButton.getText();
  }

  getDepositLimitWeekValue() {
    return this.weekLimitsButton.getText();
  }

  getDepositLimitMonthValue() {
    return this.monthLimitsButton.getText();
  }

  isSuccessMessageVisible() {
    this.successMessage.waitForDisplayed();
    return this.successMessage.isDisplayed();
  }

  openDepositLimits() {
    this.limitsItem.click();
  }

  isSaveButtonEnabled() {
    return this.saveButton.isEnabled();
  }
}

const depositView = new DepositLimitsView();
export default depositView;
