/*global expectWdio*/
import navView from '../../page_objects/NavigationView';
import header from '../../page_objects/Header';
import integratedHeader from '../../page_objects/IntegratedHeader';
import changePasswordView from '../../page_objects/ChangePasswordView';
import { users } from '../../common/users';
import tags from 'mocha-tags';
const newPass = 'Test555';
tags('desktkop', 'mobile').describe('Standalone - Change Password', () => {
  before(() => {
    header.open();
    integratedHeader.loginUser(users.transactions.login, users.transactions.password);
    navView.openStandalonePage('changepassword');
    navView.standaloneWrapper.waitForExist();
  });

  it('should change password successfully', () => {
    changePasswordView.fillChangePasswordForm(users.transactions.password, newPass);
    expectWdio(changePasswordView.successfullMessage).toBeDisplayed();
    browser.refresh();
    changePasswordView.fillChangePasswordForm(newPass, users.transactions.password);
  });

  it('should displayed error massage when user enter wrong pass', () => {
    browser.refresh();
    changePasswordView.fillChangePasswordForm(newPass, newPass);
    expect(changePasswordView.errorMessage.length).to.equal(1);
  });

  it('should displayed error massage when user submit empty form', () => {
    browser.refresh();
    changePasswordView.savePasswordButton.click();
    expect(changePasswordView.errorMessage.length).to.equal(2);
  });
});
