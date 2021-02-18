/*global expectWdio*/
import header from '../../../page_objects/Header';
import integratedHeader from '../../../page_objects/IntegratedHeader';
import { users } from '../../../common/users';
import saferGambling from '../../../page_objects/SaferGamblingView';
import tags from 'mocha-tags';
import navView from '../../../page_objects/NavigationView';
tags('desktkop', 'mobile').describe('Smoke suite - Safer Gambling', () => {
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

  it('should Open safer gambling landing page', () => {
    expectWdio(saferGambling.backButton).toBeDisplayed();
  });

  it('should display all links', () => {
    expect(navView.countAllMyaccountTabTiles()).to.equal(6);
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

  it('should display Deposit Limits landing page', () => {
    saferGambling.depositLimitsTile.click();
    expectWdio(saferGambling.depositLimitsLandingPage).toBeDisplayed();
  });

  it('should display Gaming Time Reminders landing page', () => {
    saferGambling.gamingTimeReminderTile.click();
    expectWdio(saferGambling.gamingTimeReminderLandingPage).toBeDisplayed();
  });
  it('should display Time Out landing page', () => {
    saferGambling.timeOutTile.click();
    expectWdio(saferGambling.timeOutTileLandingPage).toBeDisplayed();
  });

  it('should display Account Closure landing page', () => {
    saferGambling.accountClosureTile.scrollIntoView();
    saferGambling.accountClosureTile.click();
    expectWdio(saferGambling.accountClosureTileLandingPage).toBeDisplayed();
  });

  it('should display Self Exclusion landing page', () => {
    saferGambling.selfExclusionTile.click();
    expectWdio(saferGambling.selfExclusionTileLandingPage).toBeDisplayed();
  });

  it('should display "Find out more about what we are doing to support" landing page', () => {
    const parentWindow = browser.getWindowHandle();
    saferGambling.saferGamblingLink.click();
    navView.switchToWindowHandle();
    const currentUrl = browser.getUrl();
    expect(currentUrl).contains('app/answers/detail/a_id/2733');
    browser.closeWindow();
    browser.switchToWindow(parentWindow);
  });
});
