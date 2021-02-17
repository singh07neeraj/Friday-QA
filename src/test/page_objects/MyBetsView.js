import Page from './Page';

export class MyBetsView extends Page {
  get openBetsTab() {
    return $('#betslip-my-bets-open-tab');
  }

  get settledBetsTab() {
    return $('#betslip-my-bets-settled-tab');
  }

  get transactionComponent() {
    return $('div.bs-open-bet-summary__header');
  }

  get transactionComponents() {
    return $$('div.bs-open-bet-summary__header');
  }

  waitForVisible() {
    this.openBetsTab.waitForDisplayed();
    this.settledBetsTab.waitForDisplayed();
    return this;
  }

  showOpenBets() {
    this.waitForVisible();
    this.openBetsTab.click();
    return this;
  }

  showSettledBets() {
    this.waitForVisible();
    this.settledBetsTab.click();
    return this;
  }

  waitForTransactions() {
    this.transactionComponent.waitForDisplayed();
  }
}

const myBetsView = new MyBetsView();
export default myBetsView;
