import header from '../page_objects/page/Header';
import { asserMsg, users, logIntoSportsbook } from '../common/base';

const assertLoggedState = (balance) => {
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
        logIntoSportsbook(users.positive.login, users.positive.password);
    });
    it('initial logged state', () => {
        assertLoggedState('£0.00');
    });
});