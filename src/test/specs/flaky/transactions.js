import header from '../../page_objects/Header';
import integratedHeader from '../../page_objects/IntegratedHeader';
import { users } from '../../common/users';
import navView from '../../page_objects/NavigationView';
import accountHistoryView from '../../page_objects/AccountHistoryView';

describe('Smokes suite - Transactions - Account History view', () => {
  before(() => {
    header.open();
    integratedHeader.loginUser(users.transactions.login, users.transactions.password);
  });

  beforeEach(() => {
    integratedHeader.openMyAccountContainer();
    navView.goToAccountHistoryView();
  });

  afterEach(() => {
    header.closeMyAccountContainer();
  });

  describe('User clicked Load More button', () => {
    it('should display two pages of transactions', () => {
      accountHistoryView.transactionComponent.waitForDisplayed();
      accountHistoryView.loadMoreTransactions();
      expect(accountHistoryView.getTransactionsCount()).above(20);
    });
  });
});
