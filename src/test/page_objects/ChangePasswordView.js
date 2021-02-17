import Page from './Page';

export class ChangePasswordView extends Page {
  get currentPassword() {
    return $('.//input[@name="currentPassword"]');
  }

  get newPassword() {
    return $('.//input[@name="newPassword"]');
  }

  get successfullMessage() {
    return $('div.cp-ma-cc-success-tick__wrapper');
  }

  get errorMessage() {
    return $$('.//div[@data-test-handler="validation-error"]');
  }

  get savePasswordButton() {
    return $('.//button[@data-test-handler="savePasswordButton"]');
  }

  fillChangePasswordForm(currentPassword, newPassword) {
    this.currentPassword.setValue(currentPassword);
    this.newPassword.setValue(newPassword);
    this.savePasswordButton.click();
    browser.pause(2000);
    this.savePasswordButton.click();
  }
}

const changePasswordView = new ChangePasswordView();
export default changePasswordView;
