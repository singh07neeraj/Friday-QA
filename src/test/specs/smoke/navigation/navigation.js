/*global expectWdio*/
import header from '../../../page_objects/Header';
import navView from '../../../page_objects/NavigationView';
import depositView from '../../../page_objects/DepositLimitsView';
import balanceAndBonuses from '../../../page_objects/BalanceAndBonuses';
import integratedHeader from '../../../page_objects/IntegratedHeader';
import { users } from '../../../common/users';
import tags from 'mocha-tags';
import myAccountView from '../../../page_objects/MyAccountView';

tags('desktkop', 'mobile').describe('Smoke suite', () => {
  describe('Navigation within Landing Page ', () => {
    before(() => {
      header.open();
      integratedHeader.loginUser(users.transactions.login, users.transactions.password);
    });
    beforeEach(() => {
      integratedHeader.openMyAccountContainer();
    });

    afterEach(() => {
      header.closeMyAccountContainer();
    });
    it('should display Configuration Landing View ', () => {
      expectWdio(balanceAndBonuses.mainBalanceComponent).toBeDisplayed();
      expectWdio(balanceAndBonuses.bonusesButton).toBeDisplayed();
      expectWdio(navView.accountHistoryButton).toBeDisplayed();
      expectWdio(navView.withdrawButton).toBeDisplayed();
      if (!browser.getUrl().includes('com')) {
        expectWdio(navView.depositLimitsButton).toBeDisplayed();
      }
      expect(navView.countAllNavigationTiles()).to.equal(browser.getUrl().includes('gaming') ? 6 : 8);
    });

    it('should display Welcome message', () => {
      expect(navView.welcomeMessage.getText().length).is.greaterThan(0);
    });
    it('should reset MyAccount view after Close Button clicked', () => {
      navView.goToMyAccountView();
      myAccountView.goToPersonalDetails();
      header.closeMyAccountContainer();
      navView.container.waitForDisplayed({ reverse: true });
      depositView.depositLimitNotice.waitForDisplayed({ reverse: true });
      header.openMyAccount();
      expectWdio(navView.logoutButton).toBeEnabled();
    });
    it('should navigate back to previous view', () => {
      navView.accountHistoryButton.click();
      browser.pause(100);
      header.backButton.click();
      expectWdio(navView.logoutButton).toBeEnabled();
    });

    it('should reset MyAccount view after Balance Button clicked', () => {
      navView.goToMyAccountView();
      myAccountView.goToPersonalDetails();
      header.balanceButton.click();
      depositView.depositLimitNotice.waitForDisplayed({ reverse: true });
      header.openMyAccount();
      expectWdio(navView.logoutButton).toBeEnabled();
    });
  });
});
