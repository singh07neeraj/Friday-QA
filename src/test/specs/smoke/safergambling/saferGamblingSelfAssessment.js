import header from '../../../page_objects/Header';
import integratedHeader from '../../../page_objects/IntegratedHeader';
import { users } from '../../../common/users';
import saferGambling from '../../../page_objects/SaferGamblingView';
import tags from 'mocha-tags';
import navView from '../../../page_objects/NavigationView';
tags('desktkop', 'mobile').describe('Smoke suite - Safer Gambling Self Assessment', () => {
  before(() => {
    header.open();
    integratedHeader.loginUser(users.transactions.login, users.transactions.password);
  });

  beforeEach(() => {
    integratedHeader.openMyAccountContainer();
    saferGambling.openSaferGamblingHomePage();
  });

  afterEach(() => {
    header.closeMyAccountContainer();
  });

  it('should display Self Assessment landing page', () => {
    const parentWindow = browser.getWindowHandle();
    saferGambling.selfAssessmentTile.click();
    navView.switchToWindowHandle();
    const currentUrl = browser.getUrl();
    expect(currentUrl).contains('williamhill.gamtest.se/account/en-UK');
    browser.closeWindow();
    browser.switchToWindow(parentWindow);
  });
  if (!process.env.ENV.endsWith('liv')) {
    it('should compete Self Assessment task', () => {
      const parentWindow = browser.getWindowHandle();
      saferGambling.selfAssessmentTile.click();
      navView.switchToWindowHandle();
      saferGambling.selfAssessmentStart();
      expect(saferGambling.feedBackText.getText()).contains('Your test result');
      const currentUrl = browser.getUrl();
      expect(currentUrl).contains('williamhill.gamtest.se/account/en-UK');
      browser.closeWindow();
      browser.switchToWindow(parentWindow);
    });
  }
});
