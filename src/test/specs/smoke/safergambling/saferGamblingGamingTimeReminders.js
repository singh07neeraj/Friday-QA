/*global expectWdio*/
import header from '../../../page_objects/Header';
import integratedHeader from '../../../page_objects/IntegratedHeader';
import { users } from '../../../common/users';
import saferGambling from '../../../page_objects/SaferGamblingView';
import tags from 'mocha-tags';
import navView from '../../../page_objects/NavigationView';
tags('desktkop', 'mobile').describe('Smoke suite - Safer Gambling - Time Reminders', () => {
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

  it('should display Gaming Time Reminders landing page', () => {
    saferGambling.gamingTimeReminderTile.click();
    expectWdio(saferGambling.gamingTimeReminderLandingPage).toBeDisplayed();
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
  it('should set a "Gaming Time Reminders" ', () => {
    saferGambling.gamingTimeReminderTile.click();
    saferGambling.selectTimeOutDuration();
    expectWdio(saferGambling.timeReminderUpdateMessage).toBeDisplayed();
  });
});
