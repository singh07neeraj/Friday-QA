import Page from './Page';
import accountHistoryView from './AccountHistoryView';
import depositView from './DepositLimitsView';
import myAccountView from './MyAccountView';
import myBetsView from './MyBetsView';
import header from './Header';
import { executeClick } from '../utils/executeCode';
import envConfig from '../config/envConfig';

const urls = require('../config/urls.json');

export class NavigationView extends Page {
  get closeButton() {
    return $('.cp-ma-header-title__right-element button');
  }

  get standaloneWrapper() {
    return $('div.cp-ma-standalone-wrapper');
  }

  get ccTile() {
    return $('div.cp-ma-cc-tile');
  }

  get welcomeMessage() {
    return $('.cp-ma-welcome-bar__name');
  }

  get accountInfo() {
    return $('.cp-ma-header-title span.cp-ma-header-welcome__info');
  }

  get accountInfoTooltip() {
    return $('div[data-test-id="Tooltip.tip"] .cp-ma-header-welcome__tip');
  }

  get myBetsButton() {
    return $('div[data-test-handler="myBets"]');
  }

  get accountHistoryButton() {
    return $('div[data-test-handler="accountHistory"]');
  }

  get myAccountButton() {
    return $('div[data-test-handler="myAccount"]');
  }

  get withdrawButton() {
    return $('div[data-test-handler="withdraw"]');
  }

  get reverseWithdrawButton() {
    return $('div[data-test-handler="reversalWithdraw"]');
  }

  get depositLimitsButton() {
    return $('div[data-test-handler="depositLimit"]');
  }

  get myRewardsButton() {
    return $('div[data-test-handler="myRewards"]');
  }

  get logoutButton() {
    return $('.cp-ma-footer div button');
  }

  get navigationTiles() {
    return $$('div.cp-ma-navigation-menu-tile');
  }

  get navigationSATiles() {
    return $$('div.cp-ma-cc-tile__text');
  }

  get footerHelp() {
    return $('li[data-test-handler="footer__help"] a');
  }

  get footerFeedback() {
    return $('li[data-test-handler="footer__feedback"] a');
  }

  get balanceField() {
    return $('div[data-test-handler="cp-ma-balance-balance__element-mainBalance"]');
  }

  get bonusesButton() {
    return $('div[data-test-handler="cp-ma-balance-balance__element-freeBets"]');
  }

  showAccountInfoTooltip() {
    this.accountInfo.waitForDisplayed();
    this.accountInfo.click();
    this.accountInfoTooltip.waitForDisplayed();
    return this;
  }

  countAllNavigationTiles() {
    return this.navigationTiles.length;
  }

  countAllMyaccountTabTiles() {
    this.ccTile.waitForDisplayed();
    return this.navigationSATiles.length;
  }

  goToMyBetsView() {
    this.myBetsButton.waitForExist();
    this.myBetsButton.click();
    return myBetsView;
  }

  goToAccountHistoryView() {
    this.accountHistoryButton.waitForExist();
    this.accountHistoryButton.click();
    if (browser.getUrl().includes('es')) {
      accountHistoryView.summaryExportButton.waitForExist();
    }
    accountHistoryView.transactionComponent.waitForExist();
    return accountHistoryView;
  }

  goToWithdrawView() {
    this.withdrawButton.waitForExist();
    this.withdrawButton.click();
  }

  goToReverseWithdrawView() {
    this.reverseWithdrawButton.waitForExist();
    this.reverseWithdrawButton.click();
  }

  goToFeedbackView() {
    this.footerFeedback.waitForExist();
    executeClick(this.footerFeedback);
  }

  goToMyAccountView() {
    this.openMainView();
    this.myAccountButton.waitForDisplayed();
    this.myAccountButton.moveTo();
    this.myAccountButton.click();
    return myAccountView;
  }

  goToDepositLimitsView() {
    this.depositLimitsButton.waitForDisplayed();
    this.depositLimitsButton.click();
    return depositView;
  }

  openMyRewardsPage() {
    this.myRewardsButton.waitForDisplayed();
    this.myRewardsButton.click();
  }

  openHelpPage() {
    this.footerHelp.waitForDisplayed();
    this.footerHelp.click();
  }

  openMainView() {
    this.open();
    header.balanceButton.click();
    return this;
  }
  goToBonuses() {
    this.bonusesButton.click();
    browser.switchWindow('GoAcctFreebet');
  }

  logout() {
    this.logoutButton.click();
    return this;
  }

  openStandalonePage(page) {
    switch (envConfig.env) {
      case 'pp1':
        browser.newWindow(urls.url.standaloneCOM + page);
        break;
      case 'pp1-es':
        browser.newWindow(urls.url.standaloneES + page);
        break;
      case 'pp1-it':
        browser.newWindow(urls.url.standaloneIT + page);
        break;
    }
    browser.pause(1000);
    return this;
  }

  /**
   * @param tab number of a tab which you want to focus on
   * by default it focus on the last tab
   */
  switchToWindowHandle(tab) {
    browser.pause(100);
    const handles = browser.getWindowHandles();
    if (tab === undefined) {
      browser.switchToWindow(handles[handles.length - 1]);
    } else {
      browser.switchToWindow(handles[tab]);
    }
  }
}

const navView = new NavigationView();
export default navView;
