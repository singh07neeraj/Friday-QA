import navView from '../../page_objects/NavigationView';
import depositView from '../../page_objects/DepositLimitsView';
import header from '../../page_objects/Header';
import { depositTypes, limitsOrder, chooseLimit, howDoesItWorkUrl, increaseLimitUrl } from '../../utils/depositLimits';
import integratedHeader from '../../page_objects/IntegratedHeader';
import { users } from '../../common/users';

const pattern = new RegExp(`^([^0-9]{1}[0-9]*)$|^(${chooseLimit})*$`);

describe('Smokes suite - Deposit Limits view', () => {
  describe('Deposit Limits initial view', () => {
    before(() => {
      header.open();
      integratedHeader.loginUser(users.depositLimits.login, users.depositLimits.password);
      header.openMyAccount();
      navView.goToDepositLimitsView();
      depositView.dayLimitsButton.waitForDisplayed();
    });
    it('user can see initial values for deposit limits', () => {
      depositView.getAllDepositLimitsInitialValues().forEach((value, index) => {
        expect(value).to.contains(depositTypes[limitsOrder[index]]);
      });
    });
    it('default displayed value for selects', () => {
      depositView.getAllDepositLimitsButtons().forEach((button) => {
        button.click();
        expect(depositView.getDepositLimitsValue()).to.match(pattern);
      });
    });
    it('link for how it works is correct', () => {
      expect(depositView.getHowItWorksLink()).to.equal(howDoesItWorkUrl());
    });
    it('link to questionnaire if button is open', () => {
      expect(depositView.getIncreaseDepositLink(depositView.dayLimitsButton)).to.equal(increaseLimitUrl);
      expect(depositView.getIncreaseDepositLink(depositView.weekLimitsButton)).to.equal(increaseLimitUrl);
      expect(depositView.getIncreaseDepositLink(depositView.monthLimitsButton)).to.equal(increaseLimitUrl);
    });
    it('save button is not active', () => {
      expect(depositView.isSaveButtonEnabled()).to.equal(false);
    });
  });
});
