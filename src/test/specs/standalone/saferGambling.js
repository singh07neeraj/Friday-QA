import header from '../../page_objects/Header';
import navView from '../../page_objects/NavigationView';
import integratedHeader from '../../page_objects/IntegratedHeader';
import { users } from '../../common/users';
import tags from 'mocha-tags';

tags('desktkop', 'mobile').describe('Smoke suite', () => {
  describe('Standalone - saferGambling navigation', () => {
    before(() => {
      header.open();
      integratedHeader.loginUser(users.transactions.login, users.transactions.password);
      navView.openStandalonePage('safer-gambling');
      navView.standaloneWrapper.waitForExist();
    });
    it('should display all links', () => {
      expect(navView.countAllMyaccountTabTiles()).to.equal(5);
    });
  });
});
