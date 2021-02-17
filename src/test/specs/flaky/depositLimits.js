import navView from '../../page_objects/NavigationView';
import depositView from '../../page_objects/DepositLimitsView';
import header from '../../page_objects/Header';
import { setLimitsToNoLimit, chooseLimit } from '../../utils/depositLimits';
import integratedHeader from '../../page_objects/IntegratedHeader';
import { users } from '../../common/users';

describe('Deposit Limits view - user flow test', () => {
  before(() => {
    setLimitsToNoLimit();
  });

  describe('Deposit Limits selects usage', () => {
    before(() => {
      header.open();
      integratedHeader.loginUser(users.depositLimits.login, users.depositLimits.password);
      header.openMyAccount();
      navView.goToDepositLimitsView();
      depositView.dayLimitsButton.waitForDisplayed();
    });
    it('default displayed value for selects is Choose new limit', () => {
      depositView.getAllDepositLimitsButtons().forEach((button) => {
        button.click();
        expect(depositView.getDepositLimitsValue()).to.equal(chooseLimit);
      });
    });

    it('user sets daily deposit limits', () => {
      depositView.confirmDayLimits();
      depositView.confirmLimitsChange();
      expect(depositView.getDepositLimitValue()).to.contains('€125.00');
    });

    it('user sets weekly deposit limits', () => {
      depositView.openDropDown();
      expect(depositView.getDepositLimitWeekValue()).to.contains('€1500.00');
      depositView.confirmDecreaseWeekLimits();
      expect(depositView.getDepositLimitValue()).to.contains('€1250.00');
    });

    it('user sets monthly deposit limits', () => {
      depositView.openDropDown();
      expect(depositView.getDepositLimitMonthValue()).to.contains('€3000.00');
      depositView.confirmDecreaseWeekLimits();
      expect(depositView.getDepositLimitValue()).to.contains('€2500.00');
    });

    it('user save deposit limits', () => {
      depositView.saveDepositLimits();
      browser.pause(1000);
      expect(depositView.isSuccessMessageVisible()).to.equal(true);
    });

    it('in new session freshly deposit limits are displayed', () => {
      browser.reloadSession();
      header.open();
      integratedHeader.loginUser(users.depositLimits.login, users.depositLimits.password);
      header.openMyAccount();
      navView.goToDepositLimitsView();
      browser.pause(1000);
      expect(depositView.getDepositLimitValue()).to.contains('€125.00');
      expect(depositView.getDepositLimitWeekValue()).to.contains('€1250.00');
      expect(depositView.getDepositLimitMonthValue()).to.contains('2500.00');
    });
  });
});
