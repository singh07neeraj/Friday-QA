import Page from '../Page';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { headerFields } from './const/header';

export class Header extends Page {
    constructor() {
        super();
        this.loginButton = new Button(headerFields.loginButton.name, headerFields.loginButton.cssSel);
        this.registerButton = new Button(headerFields.registerButton.name, headerFields.registerButton.cssSel);
        this.depositButton = new Button(headerFields.depositButton.name, headerFields.depositButton.cssSel);
        this.balanceButton = new Button(headerFields.balanceButton.name, headerFields.balanceButton.cssSel);
        //login part, can be move to another page
        this.usernameInput = new InputField(headerFields.usernameInput.name, headerFields.usernameInput.cssSel);
        this.passwordInput = new InputField(headerFields.passwordInput.name, headerFields.passwordInput.cssSel);
        this.loginSubmitButton = new Button(headerFields.loginSubmitButton.name, headerFields.loginSubmitButton.cssSel);
        //account part
        this.logoutButton = new Button(headerFields.logoutButton.name, headerFields.logoutButton.cssSel);
        this.menuDepositButton = new Button(headerFields.menuDepositButton.name, headerFields.menuDepositButton.cssSel);
        this.menuWithdrawButton = new Button(headerFields.menuWithdrawButton.name,
            headerFields.menuWithdrawButton.cssSel);
        this.menuPreferencesButton = new Button(headerFields.menuPrefButton.name,
            headerFields.menuPrefButton.cssSel, headerFields.accountIframe.cssSel);
        this.menuGCButton = new Button(headerFields.menuGCButton.name, headerFields.menuGCButton.cssSel);
    }

    logIntoSportsbook(login, password) {
        this.loginButton.waitForElement();
        this.loginButton.click();
        this.usernameInput.waitForElement();
        this.usernameInput.inputValue = login;
        this.passwordInput.inputValue = password;
        this.loginSubmitButton.click();
        this.balanceButton.waitForElement();
        browser.pause(1000);
        // browser.waitUntil(function () {
        //     return this.balanceButton.text.length > 1;
        // }, 10000, 'expected text to be visible after 10s');
    }
}

const header = new Header();
export default header;
