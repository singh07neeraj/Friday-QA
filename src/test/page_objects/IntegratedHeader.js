/*global expectWdio*/
import Page from './Page';
import balanceAndBonuses from './BalanceAndBonuses';
import { disableOnboarding } from '../utils/executeCode';

export class IntegratedHeader extends Page {
  constructor() {
    super();
  }

  get loginButton() {
    return $('button.action-login__button');
  }
  get usernameInputField() {
    return $('input[name="username"]');
  }
  get passwordInputField() {
    return $('input[name="password"]');
  }
  get submitButton() {
    return $('.c-login-form__submit-button,[name="login-submit-button"]');
  }
  get balanceButtonFullyLoaded() {
    return $('span.cp-ma-myaccount-dropdown-button__balance');
  }
  get exclusiveOfferCloseButton() {
    return $('div[role="presentation"] button');
  }

  //TODO: unify this
  loginUser(user, password) {
    console.log('User id : ', user);
    console.log('Password : ', password);
    browser.setCookies({ name: 'cdb', value: '' });
    browser.refresh();
    browser.execute(disableOnboarding);
    if (['aws-dev-es', 'aws-dev-it', 'dev', 'dev-es', 'dev-it'].indexOf(process.env.ENV) === -1) {
      this.loginButton.waitForDisplayed(120000);
      this.loginButton.click();
      this.usernameInputField.waitForDisplayed();
      this.usernameInputField.clearValue;
      this.usernameInputField.setValue(user);
      this.passwordInputField.clearValue;
      this.passwordInputField.setValue(password);
      this.submitButton.click();
      this.loginButton.waitForDisplayed({ reverse: true });
      expectWdio(this.balanceButtonFullyLoaded).toBeDisplayed({
        wait: 30000,
        message: 'My Account balance is not loaded',
      });
      browser.pause(2000);
      this.closeExclusiveOffer();
    }
  }

  closeExclusiveOffer() {
    if (this.exclusiveOfferCloseButton.isDisplayed()) {
      this.exclusiveOfferCloseButton.click();
    }
    this.exclusiveOfferCloseButton.waitForDisplayed({ reverse: true });
  }

  openMyAccountContainer() {
    this.balanceButtonFullyLoaded.waitForDisplayed();
    this.balanceButtonFullyLoaded.isDisplayed();

    if (!this.balanceButtonFullyLoaded.isClickable()) {
      this.closeExclusiveOffer();
    }

    this.balanceButtonFullyLoaded.click();
    this.container.waitForExist();
    balanceAndBonuses.mainBalanceComponent.waitForDisplayed();
    balanceAndBonuses.bonusesButton.waitForDisplayed();
  }
}

const integratedHeader = new IntegratedHeader();
export default integratedHeader;
