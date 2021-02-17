import Page from './Page';

export class BalanceAndBonuses extends Page {
  constructor() {
    super();
  }

  get mainBalanceComponent() {
    return $('//div[@class="cp-ma-balance-balance-and-bonus__cash-balance"]/span[2]');
  }

  get bonusesButton() {
    return $('//div[@class="cp-ma-balance-balance-and-bonus__additional-balance"]/span[2]');
  }

  waitForBonuses() {
    this.bonusesButton.waitForDisplayed();
  }
}

const balanceAndBonuses = new BalanceAndBonuses();
export default balanceAndBonuses;
