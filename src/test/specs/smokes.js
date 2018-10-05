import header from '../page_objects/page/Header';
import { asserMsg, users } from '../common/base';

const assertLoggedState = (balance) => {
    browser.pause(2000); //due to slow loading of balance
    expect(header.depositButton.text).to.equal('Deposit');
    expect(header.balanceButton.text).to.equal(balance);
    expect(header.registerButton.isVisible, `${header.registerButton.name} ${asserMsg.isVisible}`)
        .to.equal(false);
    expect(header.loginButton.isVisible, `${header.loginButton.name} ${asserMsg.isVisible}`)
        .to.equal(false);
};

describe('user is logged in', () => {
    before('', () => {
        browser.reload();
        header.open();
        header.loginButton.waitForElement();
        header.loginButton.click();
        header.usernameInput.waitForElement();
        header.usernameInput.inputValue = users.positive.login;
        header.passwordInput.inputValue = users.positive.password;
        header.loginSubmitButton.click();
        header.depositButton.waitForElement();
    });
    beforeEach('', () => {
        header.open();
        header.balanceButton.waitForElement();
    });
    it('initial logged state', () => {
        assertLoggedState('£0.00');
    });
});