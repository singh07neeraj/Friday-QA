import Page from './Page';
import { getRandomNumberFromRange, generateRandomString } from '../utils/randomGenerators';

export class PersonalDetailsView extends Page {
  get contactTab() {
    return $('div[data-test-handler=personalDetails\\.tabs\\.contact]');
  }

  get contactLink() {
    return $('.//span[text()=" clicca qui"]');
  }

  get contactEmailInput() {
    return $('.//input[@name="email" and @placeholder]');
  }

  get contactStreet1Input() {
    return $('input[name=street1]');
  }

  get contactStreet2Input() {
    return $('input[name=street2]');
  }

  get contactCityInput() {
    return $('input[name=city]');
  }

  get contactPostcodeInput() {
    return $('input[name=postcode]');
  }

  get provinciaField() {
    return $('div[class=css-1hgj34u]');
  }

  get getProvinciaList() {
    return $$('div[class=css-15ff9h]');
  }

  get contactMobileInput() {
    return $('input[name=mobile]');
  }

  get contactUpdateMyDetailsButton() {
    return $('button[data-test-handler="submitpersonalDetailsContactButton"]');
  }

  get contactEmailValidationError() {
    return $('div[data-test-handler=validation-error][data-field=email]');
  }

  get contactStreet1ValidationError() {
    return $('div[data-test-handler=validation-error][data-field=street1]');
  }

  get contactCityValidationError() {
    return $('div[data-test-handler=validation-error][data-field=city]');
  }

  get contactPostcodeValidationError() {
    return $('div[data-test-handler=validation-error][data-field=postcode]');
  }

  get contactMobileValidationError() {
    return $('div[data-test-handler=validation-error][data-field=mobile]');
  }

  get contactSuccessMessageText() {
    return $('span[class=cp-ma-cc__success-message-text]');
  }

  get martekingTab() {
    return $('div[data-test-handler=personalDetails\\.tabs\\.marketing]');
  }

  get marketingToggleLabel() {
    return $('label[data-test-handler=cp-ma-personal-details-marketing-switch-wrapper__switch]');
  }

  get marketingEmail() {
    return $('div[data-test-handler=cp-ma-personal-details-marketing-contact-method__email]');
  }

  get marketingSms() {
    return $('div[data-test-handler=cp-ma-personal-details-marketing-contact-method__sms]');
  }

  get marketingPhone() {
    return $('div[data-test-handler=cp-ma-personal-details-marketing-contact-method__telephone]');
  }

  goToContactTab() {
    this.contactTab.click();
  }

  goToContactLink() {
    this.contactLink.click();
  }

  goToMarketingTab() {
    this.martekingTab.waitForDisplayed();
    this.martekingTab.click();
    this.marketingToggleLabel.waitForDisplayed();
  }

  isMarkertingToggleSelected() {
    return this.checkedInputOf(this.marketingToggleLabel).isExisting();
  }

  selectMarketingToggle() {
    this.selectInput(this.isMarkertingToggleSelected(), this.marketingToggleLabel);
  }

  deselectMarketingToggle() {
    this.deselectInput(this.isMarkertingToggleSelected(), this.marketingToggleLabel);
  }

  isMarketingEmailSelected() {
    return this.checkedInputOf(this.marketingEmail).isExisting();
  }

  selectMarketingEmail() {
    this.selectInput(this.isMarketingEmailSelected(), this.marketingEmail);
  }

  deselectMarketingEmail() {
    this.deselectInput(this.isMarketingEmailSelected(), this.marketingEmail);
  }

  isMarketingSmsSelected() {
    return this.checkedInputOf(this.marketingSms).isExisting();
  }

  selectMarketingSms() {
    this.selectInput(this.isMarketingSmsSelected(), this.marketingSms);
  }

  deselectMarketingSms() {
    this.deselectInput(this.isMarketingSmsSelected(), this.marketingSms);
  }

  isMarketingPhoneSelected() {
    return this.checkedInputOf(this.marketingPhone).isExisting();
  }

  selectMarketingPhone() {
    this.selectInput(this.isMarketingPhoneSelected(), this.marketingPhone);
  }

  deselectMarketingPhone() {
    this.deselectInput(this.isMarketingPhoneSelected(), this.marketingPhone);
  }

  checkedInputOf(selector) {
    return selector.$('input:checked');
  }

  selectInput(checkerFunction, selector) {
    if (!checkerFunction) {
      selector.click();
    }
    browser.pause(1000);
  }

  deselectInput(checkerFunction, selector) {
    if (checkerFunction) {
      selector.click();
    }
    browser.pause(1000);
  }

  fillInContactForm() {
    this.contactEmailInput.setValue(`${generateRandomString(5)}@gmail.com`);
    this.contactStreet1Input.setValue(generateRandomString(5));
    this.contactStreet2Input.setValue(generateRandomString(5));
    this.contactCityInput.setValue(generateRandomString(5));
    this.contactPostcodeInput.setValue(getRandomNumberFromRange(10000, 90000));
    this.contactMobileInput.setValue(getRandomNumberFromRange(100000, 900000));
    if (browser.getUrl().includes('it')) {
      this.provinciaField.click();
      this.getProvinciaList[getRandomNumberFromRange(0, this.getProvinciaList.length - 1)].click();
    }
  }

  submitContactForm() {
    this.contactUpdateMyDetailsButton.scrollIntoView();
    this.contactUpdateMyDetailsButton.click();
  }

  contactPlaceEmptyField(element) {
    element.scrollIntoView();
    element.click();
    this.goToContactTab();
  }
}

const personalDetailsView = new PersonalDetailsView();
export default personalDetailsView;
