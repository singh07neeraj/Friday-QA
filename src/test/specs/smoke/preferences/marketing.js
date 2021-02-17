import navView from '../../../page_objects/NavigationView';
import integratedHeader from '../../../page_objects/IntegratedHeader';
import header from '../../../page_objects/Header';
import myAccountView from '../../../page_objects/MyAccountView';
import { users } from '../../../common/users';
import tags from 'mocha-tags';

tags('desktkop', 'mobile').describe('Smoke suite - Marketing - Consent', () => {
  let personalDetails;

  before(() => {
    header.open();
    integratedHeader.loginUser(users.transactions.login, users.transactions.password);
  });

  beforeEach(() => {
    integratedHeader.openMyAccountContainer();
    navView.goToMyAccountView();
    personalDetails = myAccountView.goToPersonalDetails();
    personalDetails.goToMarketingTab();

    if (personalDetails.isMarkertingToggleSelected()) {
      personalDetails.deselectMarketingToggle();
    } else {
      personalDetails.selectMarketingToggle();
      personalDetails.deselectMarketingToggle();
    }
  });

  afterEach(() => {
    header.closeMyAccountContainer();
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

  it('should select only the email marketing option', () => {
    personalDetails.selectMarketingEmail();
    expect(personalDetails.isMarketingEmailSelected()).to.equal(true);
    expect(personalDetails.isMarketingSmsSelected()).to.equal(false);
    expect(personalDetails.isMarketingPhoneSelected()).to.equal(false);
    expect(personalDetails.isMarkertingToggleSelected()).to.equal(true);
  });

  it('should select only the sms marketing option', () => {
    personalDetails.selectMarketingSms();
    expect(personalDetails.isMarketingEmailSelected()).to.equal(false);
    expect(personalDetails.isMarketingSmsSelected()).to.equal(true);
    expect(personalDetails.isMarketingPhoneSelected()).to.equal(false);
    expect(personalDetails.isMarkertingToggleSelected()).to.equal(true);
  });

  it('should select only the phone marketing option', () => {
    personalDetails.selectMarketingPhone();
    expect(personalDetails.isMarketingEmailSelected()).to.equal(false);
    expect(personalDetails.isMarketingSmsSelected()).to.equal(false);
    expect(personalDetails.isMarketingPhoneSelected()).to.equal(true);
    expect(personalDetails.isMarkertingToggleSelected()).to.equal(true);
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
});
