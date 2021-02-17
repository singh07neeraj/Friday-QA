import navView from '../../page_objects/NavigationView';
import depositView from '../../page_objects/DepositLimitsView';
import header from '../../page_objects/Header';
import { chooseLimit, howDoesItWorkUrl } from '../../utils/depositLimits';

describe('Deposit Limits view - user flow test', () => {
  describe('Deposit Limits selects usage', () => {
    before(() => {
      header.open();
      header.openMyAccount();
      navView.goToDepositLimitsView();
    });
    it('default displayed value for selects is Choose new limit', () => {
      depositView.confirmDayLimits();
      expect(depositView.getDepositLimitsValue()).to.equal(chooseLimit);
    });
    it('user increase week deposit limits', () => {
      depositView.confirmLimitsChange();
      expect(depositView.getDepositLimitValue()).to.contains('€1000.00');
      depositView.saveDepositLimits();
      expect(depositView.isSuccessMessageVisible()).to.equal(true);
    });

    it('user check the list of deposit limits values', () => {
      depositView.confirmDayLimits();
      depositView.openDepositLimits();
      expect(depositView.getAllSelectOptions()).to.equal(
        'Scegli un nuovo limite\n€200.00\n€500.00\n€1000.00\n€5000.00\n€10000.00\n€50000.00' + '\nAltro importo'
      );
    });
    it('user decrease week deposit limits', () => {
      depositView.confirmDecreaseWeekLimits();
      expect(depositView.getDepositLimitValue()).to.contains('€500.00');
      depositView.saveDepositLimits();
      expect(depositView.isSuccessMessageVisible()).to.equal(true);
    });
    it('user set week deposit limits via other amount', () => {
      depositView.confirmDayLimits();
      depositView.confirmOtherAmountLimits();
      expect(depositView.getDepositLimitsValue()).to.contains('Altro importo');
      depositView.setAmountValue('60000');
      depositView.saveDepositLimits();
      expect(depositView.isSuccessMessageVisible()).to.equal(true);
    });
    it('link for how it works is correct', () => {
      expect(depositView.getHowItWorksLink()).to.equal(howDoesItWorkUrl());
    });
  });
});
