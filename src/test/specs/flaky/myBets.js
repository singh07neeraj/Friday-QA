import integratedHeader from '../../page_objects/IntegratedHeader';
import { users } from '../../common/users';
import navView from '../../page_objects/NavigationView';
import header from '../../page_objects/Header';
import myBetsView from '../../page_objects/MyBetsView';

describe('My Bets', () => {
  before(() => {
    header.open();
    integratedHeader.loginUser(users.myBets.login, users.myBets.password);
  });

  beforeEach(() => {
    integratedHeader.openMyAccountContainer();
    navView.goToMyBetsView();
  });

  describe('Open bets', () => {
    beforeEach(() => {
      myBetsView.showOpenBets();
    });

    it('should display open bets', () => {
      myBetsView.waitForTransactions();
      expect(myBetsView.transactionComponents.length).to.above(0);
    });
  });

  describe('Settled bets', () => {
    beforeEach(() => {
      myBetsView.showSettledBets();
    });

    it('should display settled bets', () => {
      myBetsView.waitForTransactions();
      expect(myBetsView.transactionComponents.length).to.above(0);
    });
  });
});
