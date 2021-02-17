import header from '../../../page_objects/Header';
import integratedHeader from '../../../page_objects/IntegratedHeader';
import { users } from '../../../common/users';
import links from '../../../config/links';
import navView from '../../../page_objects/NavigationView';
import tags from 'mocha-tags';

tags('desktkop', 'mobile').describe('External links', () => {
  before(() => {
    header.open();
    integratedHeader.loginUser(users.myBets.login, users.myBets.password);
  });

  beforeEach(() => {
    integratedHeader.openMyAccountContainer();
  });

  afterEach(() => {
    header.open();
  });
  if (!process.env.ENV.startsWith('alchemy')) {
    describe('Redirection to external pages', () => {
      it('should redirect to the promotions page', () => {
        navView.openMyRewardsPage();
        const currentUrl = browser.getUrl();
        expect(currentUrl).to.be.equal(links.myRewards);
      });

      it('should redirect to the help page', () => {
        navView.openHelpPage();
        navView.switchToWindowHandle();
        const currentUrl = browser.getUrl();
        expect(currentUrl).to.be.equal(links.help);
      });
    });
  }
  describe('Modal navigation', () => {
    it('should open the withdrawal modal', () => {
      navView.goToWithdrawView();
    });

    it('should open the feedback modal', () => {
      navView.goToFeedbackView();
    });
  });
});
