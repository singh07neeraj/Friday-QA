/*global expectWdio*/
import header from '../../../page_objects/Header';
import integratedHeader from '../../../page_objects/IntegratedHeader';
import { users } from '../../../common/users';
import saferGambling from '../../../page_objects/SaferGamblingView';
import tags from 'mocha-tags';
import navView from '../../../page_objects/NavigationView';
tags('desktkop', 'mobile').describe('Smoke suite - Safer Gambling Safer Gambling Deposit Limits', () => {
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

  it('should display Deposit Limits landing page', () => {
    saferGambling.depositLimitsTile.click();
    expectWdio(saferGambling.depositLimitsLandingPage).toBeDisplayed();
  });

  it('should redirect to  "How does that work?" landing page', () => {
    const parentWindow = browser.getWindowHandle();
    saferGambling.depositLimitsTile.click();
    saferGambling.howDoesThatWorkButton.waitForDisplayed();
    saferGambling.howDoesThatWorkButton.click();
    navView.switchToWindowHandle();
    const currentUrl = browser.getUrl();
    expect(currentUrl).contains('app/answers/detail/a_id/6755');
    browser.closeWindow();
    browser.switchToWindow(parentWindow);
  });

  it('should set Deposit Limits', () => {
    saferGambling.depositLimitsTile.click();
    saferGambling.setDepositLimit();
    expectWdio(saferGambling.depositLimitsMessage).toBeDisplayed();
  });

  it('should Cancel Deposit Limits', () => {
    if (saferGambling.cancelDepositLimitButton.isDisplayed()) {
      saferGambling.depositLimitsTile.click();
      saferGambling.cancelDepositLimits();
      expectWdio(saferGambling.cancelDepositLimitButton).toBeDisplayed(false);
    }
  });

  it('should redirect to  "Contact customer services" landing page', () => {
    const parentWindow = browser.getWindowHandle();
    saferGambling.depositLimitsTile.click();
    saferGambling.contactCustomerServicesButton.waitForDisplayed();
    saferGambling.contactCustomerServicesButton.click();
    navView.switchToWindowHandle();
    const currentUrl = browser.getUrl();
    expect(currentUrl).contains('app/ask');
    browser.closeWindow();
    browser.switchToWindow(parentWindow);
  });
});
