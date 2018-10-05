import Page from './Page';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { fields } from '../../common/base';


export class Header extends Page {
    constructor() {
        super();
        this.loginButton = new Button(fields.loginButton.name, fields.loginButton.cssSelector);
        this.registerButton = new Button(fields.registerButton.name, fields.registerButton.cssSelector);
        this.depositButton = new Button(fields.depositButton.name, fields.depositButton.cssSelector);
        this.balanceButton = new Button(fields.balanceButton.name, fields.balanceButton.cssSelector);
        //login part, can be move to another page
        this.usernameInput = new InputField(fields.usernameInput.name, fields.usernameInput.cssSelector);
        this.passwordInput = new InputField(fields.passwordInput.name, fields.passwordInput.cssSelector);
        this.loginSubmitButton = new Button(fields.loginSubmitButton.name, fields.loginSubmitButton.cssSelector);
        //account part
        this.logoutButton = new Button(fields.logoutButton.name, fields.logoutButton.cssSelector);
        this.menuDepositButton = new Button(fields.menuDepositButton.name, fields.menuDepositButton.cssSelector);
        this.menuWithdrawButton = new Button(fields.menuWithdrawButton.name, fields.menuWithdrawButton.cssSelector);
        this.menuPreferencesButton = new Button(fields.menuPrefButton.name, fields.menuPrefButton.cssSelector,
            fields.accountIframe.cssSelector);
        this.menuGCButton = new Button(fields.menuGCButton.name, fields.menuGCButton.cssSelector);
        //gaming control part
        this.GCContent = new Button(fields.GCContent.name, fields.GCContent.cssSelector);
    }
}

const header = new Header();
export default header;
