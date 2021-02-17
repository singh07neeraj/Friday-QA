/*global expectWdio*/
import navView from '../../../page_objects/NavigationView';
import header from '../../../page_objects/Header';
import integratedHeader from '../../../page_objects/IntegratedHeader';
import myAccountView from '../../../page_objects/MyAccountView';
import { users } from '../../../common/users';
import tags from 'mocha-tags';

tags('desktkop', 'mobile').describe('Smoke suite - Contact', () => {
  let personalDetails;

  before(() => {
    header.open();
    integratedHeader.loginUser(users.transactions.login, users.transactions.password);
  });

  beforeEach(() => {
    integratedHeader.openMyAccountContainer();
    navView.goToMyAccountView();
    personalDetails = myAccountView.goToPersonalDetails();
    personalDetails.goToContactTab();
    if (browser.getUrl().includes('it')) {
      personalDetails.goToContactLink();
    }
  });

  afterEach(() => {
    header.closeMyAccountContainer();
  });

  it('should send contact form successfully', () => {
    personalDetails.fillInContactForm();
    personalDetails.submitContactForm();

    expectWdio(personalDetails.contactSuccessMessageText).toBeDisplayed();
  });

  it('should display all validation errors if user sends the empty form', () => {
    personalDetails.submitContactForm();
    expectWdio(personalDetails.contactEmailValidationError).toBeDisplayed();
    expectWdio(personalDetails.contactStreet1ValidationError).toBeDisplayed();
    expectWdio(personalDetails.contactCityValidationError).toBeDisplayed();
    expectWdio(personalDetails.contactPostcodeValidationError).toBeDisplayed();
    expectWdio(personalDetails.contactMobileValidationError).toBeDisplayed();
  });

  it('should display email validation error only', () => {
    personalDetails.contactPlaceEmptyField(personalDetails.contactEmailInput);
    expectWdio(personalDetails.contactEmailValidationError).toBeDisplayed();
  });

  it('should display street1 validation error only', () => {
    personalDetails.contactPlaceEmptyField(personalDetails.contactStreet1Input);
    expectWdio(personalDetails.contactStreet1ValidationError).toBeDisplayed();
  });

  it('should display city validation error only', () => {
    personalDetails.contactPlaceEmptyField(personalDetails.contactCityInput);
    expectWdio(personalDetails.contactCityValidationError).toBeDisplayed();
  });

  it('should display postcode validation error only', () => {
    personalDetails.contactPlaceEmptyField(personalDetails.contactPostcodeInput);
    expectWdio(personalDetails.contactPostcodeValidationError).toBeDisplayed();
  });

  it('should display mobile validation error only', () => {
    personalDetails.contactPlaceEmptyField(personalDetails.contactMobileInput);
    expectWdio(personalDetails.contactMobileValidationError).toBeDisplayed();
  });
});
