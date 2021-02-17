import Page from './Page';

export class SaferGamblingView extends Page {
  get saferGamblingButton() {
    return $('[data-test-handler="saferGambling"]');
  }
  get backButton() {
    return $('.cp-ma-header-button-back');
  }
  get selfAssessmentTile() {
    return $('[data-test-handler="SelfAssessmentTile"]');
  }
  get depositLimitsTile() {
    return $('[data-test-handler="DepositLimitsTile"]');
  }

  get depositLimitsLandingPage() {
    return $('.cp-ma-safer-gambling-deposit-limits__wrapper');
  }

  get gamingTimeReminderTile() {
    return $('[data-test-handler="GamingTimeReminderTile"]');
  }

  get gamingTimeReminderLandingPage() {
    return $('.cp-ma-safer-gambling-gaming-time-reminder__wrapper');
  }

  get timeOutTile() {
    return $('[data-test-handler="TimeOutTile"]');
  }
  get timeOutTileLandingPage() {
    return $('.cp-ma-safer-gambling-time-out');
  }
  get accountClosureTile() {
    return $('[data-test-handler="AccountClosureTile"]');
  }

  get accountClosureTileLandingPage() {
    return $('.cp-ma-safer-gambling-account-closure');
  }

  get selfExclusionTile() {
    return $('[data-test-handler="SelfExclusionTile"]');
  }

  get selfExclusionTileLandingPage() {
    return $('.cp-ma-safer-gambling-self-exclusion');
  }

  get saferGamblingLink() {
    return $('.cp-ma-safer-gambling__link');
  }

  get startTheToolButton() {
    return $('#sigt_startbutton');
  }

  get continueButton() {
    return $('[id="si-gt-button-next"]');
  }

  get genderButton() {
    return $('#yesno-btngroup button');
  }
  get ageText() {
    return $('#si-gt-age');
  }

  get gambledTimeButton() {
    return $('.si-gt-visit-frequence-selector');
  }
  get whatDoYouGambleMostOn() {
    return $('.si-gt-games-selector');
  }

  get feedBackText() {
    return $('.si-gt-ribbon-content');
  }
  get howDoesThatWorkButton() {
    return $('.cp-ma-safer-gambling-view-header__text a');
  }
  get dailyLimit() {
    return $('(//header[@data-test-id="Accordion.header"])[1]');
  }
  get weeklyLimit() {
    return $('(//header[@data-test-id="Accordion.header"])[2]');
  }
  get monthlyLimit() {
    return $('(//header[@data-test-id="Accordion.header"])[3]');
  }

  get limitDropDown() {
    return $('[data-test-id="SelectCustom__value"]');
  }

  get saveDepositLimitsButton() {
    return $('.cp-ma-safer-gambling-deposit-limits__button');
  }
  get depositLimitsMessage() {
    return $('.cp-ma-cc__success-message-text');
  }

  get cancelDepositLimitButton() {
    return $('.cp-ma-safer-gambling-cancel-pending-limit a');
  }

  get cancelDepositLimitConfirmationButton() {
    return $('.cp-ma-cc-confirmation-modal__confirmation-button');
  }

  get contactCustomerServicesButton() {
    return $('.cp-ma-safer-gambling-view-footer__content  a');
  }

  get gamingTimeReminderDropDown() {
    return $('.cp-ma-safer-gambling-accordion-select__wrapper header');
  }

  get selectTimeReminderDropDown() {
    return $('[data-test-id="SelectCustom__value"]');
  }

  get saveYourReminder() {
    return $('.cp-ma-safer-gambling-gaming-time-reminder__button-wrapper');
  }

  get timeReminderUpdateMessage() {
    return $('.cp-ma-cc__success-message-text');
  }
  get selectedTimeReminder() {
    return $('.cp-ma-safer-gambling-accordion-select__slot');
  }

  openSaferGamblingHomePage() {
    this.saferGamblingButton.waitForDisplayed();
    this.saferGamblingButton.click();
  }

  selfAssessmentStart() {
    const startButton = '#si-gt-answer-selector-PageID-5';
    this.startTheToolButton.waitForDisplayed();
    this.startTheToolButton.click();
    for (let i = 0; i < 16; i++) {
      const startButtonFinal = startButton.replace('PageID', i);
      $(startButtonFinal).waitForDisplayed();
      $(startButtonFinal).click();
      this.continueButton.waitForDisplayed();
      this.continueButton.click();
    }
    this.genderButton.waitForDisplayed();
    this.genderButton.click();
    this.continueButton.waitForDisplayed();
    this.continueButton.click();
    this.ageText.waitForDisplayed();
    this.ageText.setValue('40');
    this.continueButton.waitForDisplayed();
    this.continueButton.click();
    this.gambledTimeButton.waitForDisplayed();
    this.gambledTimeButton.click();
    this.continueButton.waitForDisplayed();
    this.continueButton.click();
    this.whatDoYouGambleMostOn.waitForDisplayed();
    this.whatDoYouGambleMostOn.click();
    this.continueButton.waitForDisplayed();
    this.continueButton.click();
    this.feedBackText.waitForDisplayed();
  }
  setDepositLimit() {
    this.howDoesThatWorkButton.waitForDisplayed();
    if (this.cancelDepositLimitButton.isDisplayed()) {
      this.cancelDepositLimits();
    }
    const selectAmount = '[data-test-id="SelectCustom__dropdown-option--ID"]';
    const randomLength = Math.floor(Math.random() * 10);
    browser.pause(5000);
    this.dailyLimit.waitForDisplayed(2000);
    this.dailyLimit.click();
    browser.pause(5000);
    this.limitDropDown.waitForDisplayed(2000);
    this.limitDropDown.click();
    browser.pause(5000);
    $(selectAmount.replace('ID', randomLength)).waitForDisplayed(2000);
    $(selectAmount.replace('ID', randomLength)).click();
    this.weeklyLimit.click();
    this.limitDropDown.waitForDisplayed();
    this.limitDropDown.click();
    $(selectAmount.replace('ID', randomLength)).waitForDisplayed(2000);
    $(selectAmount.replace('ID', randomLength)).click();
    this.monthlyLimit.click();
    this.limitDropDown.waitForDisplayed();
    this.limitDropDown.click();
    $(selectAmount.replace('ID', randomLength)).waitForDisplayed(2000);
    $(selectAmount.replace('ID', randomLength)).click();
    this.saveDepositLimitsButton.click();
    this.depositLimitsMessage.waitForDisplayed();
  }
  cancelDepositLimits() {
    this.cancelDepositLimitButton.waitForDisplayed();
    this.cancelDepositLimitButton.click();
    this.cancelDepositLimitConfirmationButton.waitForDisplayed();
    this.cancelDepositLimitConfirmationButton.click();
  }
  selectTimeOutDuration() {
    let selectTime = '';
    this.gamingTimeReminderDropDown.waitForDisplayed(5000);
    this.gamingTimeReminderDropDown.click();
    browser.pause(5000);
    this.selectTimeReminderDropDown.waitForDisplayed(5000);
    this.selectTimeReminderDropDown.click();
    const selectedTimeReminder = this.selectedTimeReminder.getText();
    selectTime = selectedTimeReminder.startsWith('1')
      ? '[data-test-id="SelectCustom__dropdown-option--0"]'
      : '[data-test-id="SelectCustom__dropdown-option--1"]';
    $(selectTime).waitForDisplayed(2000);
    $(selectTime).click();
    this.saveYourReminder.click();
    this.timeReminderUpdateMessage.waitForDisplayed();
  }
}

const saferGambling = new SaferGamblingView();
export default saferGambling;
