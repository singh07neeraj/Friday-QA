/*global expectWdio*/
import header from '../../../page_objects/Header';
import navView from '../../../page_objects/NavigationView';
import integratedHeader from '../../../page_objects/IntegratedHeader';
import { users } from '../../../common/users';
import tags from 'mocha-tags';

tags('desktop').describe('User session management', () => {
  before(() => {
    header.open();
    integratedHeader.loginUser(users.transactions.login, users.transactions.password);
    header.openMyAccount();
  });

  it('should log out the user from all windows', () => {
    const currentUrl = browser.getUrl();
    browser.newWindow(currentUrl);
    header.openMyAccount();
    navView.logout();
    browser.closeWindow();
    browser.switchWindow(currentUrl.split('?')[0]);
    browser.refresh();
    expectWdio(integratedHeader.loginButton).toBeDisplayed();
  });
});
