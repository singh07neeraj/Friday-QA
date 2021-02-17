import integratedHeader from '../../../page_objects/IntegratedHeader';
import header from '../../../page_objects/Header';
import navView from '../../../page_objects/NavigationView';
import { users } from '../../../common/users';
import tags from 'mocha-tags';

tags('desktop').describe('Caching of user data like name and balance', () => {
  before(() => {
    header.open();

    integratedHeader.loginUser(users.transactions.login, users.transactions.password);

    header.openMyAccount();
  });
  it('should be updated immediately after user logs in', () => {
    const welcomeMessageUser1 = navView.welcomeMessage.getText();

    const balanceUser1 = navView.balanceField.getText();

    navView.logout();

    browser.pause(10000);

    integratedHeader.loginUser(users.noFundsAccount.login, users.noFundsAccount.password);

    header.openMyAccount();

    const welcomeMessageUser2 = navView.welcomeMessage.getText();

    const balanceUser2 = navView.balanceField.getText();

    expect(welcomeMessageUser2 === welcomeMessageUser1).to.equal(false);

    expect(balanceUser2 === balanceUser1).to.equal(false);
  });
});
