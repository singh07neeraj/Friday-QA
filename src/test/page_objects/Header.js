import Page from './Page';
import navView from './NavigationView';

export class Header extends Page {
  get balanceButton() {
    return $('button.cp-ma-myaccount-dropdown-button');
  }

  get backButton() {
    return $('svg.cp-ma-header-button-back_arrow');
  }

  get closeButton() {
    return $('div.cp-ma-header-header__close-button');
  }

  openMyAccount() {
    this.balanceButton.waitForDisplayed();
    this.balanceButton.click();
    navView.logoutButton.waitForDisplayed();
    this.container.waitForExist();
    this.container.waitForDisplayed();
    return navView;
  }
  closeMyAccountContainer() {
    this.closeButton.waitForDisplayed();
    this.closeButton.click();
    this.closeButton.waitForDisplayed({ reverse: true });
    this.container.waitForExist({ reverse: true });
    return this;
  }
}
const header = new Header();
export default header;
