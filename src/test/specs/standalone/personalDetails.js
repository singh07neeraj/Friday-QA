/*global expectWdio*/
import navView from '../../page_objects/NavigationView';
import header from '../../page_objects/Header';
import integratedHeader from '../../page_objects/IntegratedHeader';
import personalDetails from '../../page_objects/PersonalDetailsView';
import { users } from '../../common/users';
import tags from 'mocha-tags';

tags('desktkop', 'mobile').describe('Standalone - Personal Details', () => {
  before(() => {
    header.open();
    integratedHeader.loginUser(users.transactions.login, users.transactions.password);
    navView.openStandalonePage('personaldetails');
    navView.standaloneWrapper.waitForExist();
  });

  it('should display all validation errors if user sends the empty form', () => {
    personalDetails.submitContactForm();
    expectWdio(personalDetails.contactEmailValidationError).toBeDisplayed();
    expectWdio(personalDetails.contactStreet1ValidationError).toBeDisplayed();
    expectWdio(personalDetails.contactCityValidationError).toBeDisplayed();
    expectWdio(personalDetails.contactPostcodeValidationError).toBeDisplayed();
    expectWdio(personalDetails.contactMobileValidationError).toBeDisplayed();
  });

  it('should send contact form successfully', () => {
    personalDetails.fillInContactForm();
    personalDetails.submitContactForm();

    expectWdio(personalDetails.contactSuccessMessageText).toBeDisplayed();
  });

  it('should switch off the toggle when I unselect the last marketing option', () => {
    personalDetails.selectMarketingToggle();

    personalDetails.deselectMarketingEmail();
    expect(personalDetails.isMarketingEmailSelected()).to.equal(false);
    expect(personalDetails.isMarketingSmsSelected()).to.equal(true);
    expect(personalDetails.isMarketingPhoneSelected()).to.equal(true);
    expect(personalDetails.isMarkertingToggleSelected()).to.equal(true);

    personalDetails.deselectMarketingSms();
    expect(personalDetails.isMarketingEmailSelected()).to.equal(false);
    expect(personalDetails.isMarketingSmsSelected()).to.equal(false);
    expect(personalDetails.isMarketingPhoneSelected()).to.equal(true);
    expect(personalDetails.isMarkertingToggleSelected()).to.equal(true);

    personalDetails.deselectMarketingPhone();
    expect(personalDetails.isMarketingEmailSelected()).to.equal(false);
    expect(personalDetails.isMarketingSmsSelected()).to.equal(false);
    expect(personalDetails.isMarketingPhoneSelected()).to.equal(false);
    expect(personalDetails.isMarkertingToggleSelected()).to.equal(false);
  });

  it('should switch off all marketing options', () => {
    expect(personalDetails.isMarketingEmailSelected()).to.equal(false);
    expect(personalDetails.isMarketingSmsSelected()).to.equal(false);
    expect(personalDetails.isMarketingPhoneSelected()).to.equal(false);
    expect(personalDetails.isMarkertingToggleSelected()).to.equal(false);
  });

  it('should switch on all marketing options', () => {
    personalDetails.selectMarketingToggle();
    expect(personalDetails.isMarketingEmailSelected()).to.equal(true);
    expect(personalDetails.isMarketingSmsSelected()).to.equal(true);
    expect(personalDetails.isMarketingPhoneSelected()).to.equal(true);
    expect(personalDetails.isMarkertingToggleSelected()).to.equal(true);
  });
});
