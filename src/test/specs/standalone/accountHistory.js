/*global expectWdio*/
import navView from '../../page_objects/NavigationView';
import header from '../../page_objects/Header';
import accountHistoryView from '../../page_objects/AccountHistoryView';
import integratedHeader from '../../page_objects/IntegratedHeader';
import { users } from '../../common/users';
import accountSummaryView from '../../page_objects/AccountSummaryView';
import buildDateString from '../../utils/dates';
import tags from 'mocha-tags';

tags('desktkop', 'mobile').describe('Standalone - Account History', () => {
  before(() => {
    header.open();
    integratedHeader.loginUser(users.transactions.login, users.transactions.password);
    navView.openStandalonePage('accounthistory');
    navView.standaloneWrapper.waitForExist();
  });

  describe('All dates dropdown open', () => {
    it('should display all date filter buttons', () => {
      accountHistoryView.goToAllDatesFilter();
      const buttons = accountHistoryView.getAllPresetDateRangeButtons();
      buttons.push(() => accountHistoryView.customRangeButton);
      buttons.push(() => accountHistoryView.applyDatesButton);
      buttons.forEach((item) => expect(item().isDisplayed()).to.equal(true));
    });

    it('should match button label to date filter dropdown label', () => {
      const buttons = accountHistoryView.getAllPresetDateRangeButtons();

      buttons.forEach((itemGetter) => {
        accountHistoryView.goToAllDatesFilter();
        const item = itemGetter();

        const currentButtonLabel = item.getText('span');
        item.click();
        accountHistoryView.applyDatesFilters();
        expect(accountHistoryView.allDatesDropDown.getText()).to.equal(currentButtonLabel);
      });

      accountHistoryView.goToAllDatesFilter();

      const today = new Date();
      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);

      const customRange = accountHistoryView.customRangeButton;
      const labelText = customRange.getText('span');

      customRange.click();
      accountHistoryView.customDateFrom = buildDateString(today);
      accountHistoryView.selectLastDateSA();
      accountHistoryView.closeCalendar();
      accountHistoryView.customDateTo = buildDateString(today);
      accountHistoryView.selectLastDateSA();
      accountHistoryView.closeCalendar();
      accountHistoryView.applyDatesFilters();
      expect(accountHistoryView.allDatesDropDown.getText()).to.equal(labelText);
    });

    it('should show an error message for wrong custom date range', () => {
      accountHistoryView.goToAllDatesFilter();
    });
  });

  describe('should display all Filters elements', () => {
    it('should display "Sports" tab with Views and all Bet Types ', () => {
      const buttons = accountHistoryView.getAllSportsFilterOptions();
      accountHistoryView.goToSportsFilters();
      buttons.forEach((item) => expect(item().isDisplayed()).to.equal(true));
    });

    it('should display "All" tab with all Views and all Bet Types ', () => {
      const buttons = accountHistoryView.getAllFilterOptions();
      accountHistoryView.goToAllFilters();
      buttons.forEach((item) => expect(item().isDisplayed()).to.equal(true));
    });

    it('should display "Gaming" tab with Wins and Loses', () => {
      const buttons = accountHistoryView.getAllGamingFilterOptions();
      accountHistoryView.goToGamingFilters();
      buttons.forEach((item) => expect(item().isDisplayed()).to.equal(true));
    });
  });

  describe('should show the chips correctly', () => {
    beforeEach(() => {
      accountHistoryView.clearAllChips();
    });

    it('should not show chips if the ALL filters is applied', () => {
      accountHistoryView.goToAllFilters();
      accountHistoryView.onlyPaymentsRadioButton.click();
      accountHistoryView.applyFilter();

      expect(accountHistoryView.onlyPaymentsChip.isExisting()).to.equal(true);
      expect(accountHistoryView.removeAllChip.isExisting()).to.equal(true);
    });

    it('should show sports and remove all chips when SPORTS filter is applied', () => {
      accountHistoryView.goToSportsFilters();
      accountHistoryView.onlyLosesRadioButton.click();
      accountHistoryView.applyFilter();

      expect(accountHistoryView.onlyLosesChip.isExisting()).to.equal(true);
      expect(accountHistoryView.sportsChip.isExisting()).to.equal(true);
      expect(accountHistoryView.removeAllChip.isExisting()).to.equal(true);
    });

    it('should show gaming and remove all chips when GAMING filter is applied', () => {
      accountHistoryView.goToGamingFilters();
      accountHistoryView.onlyWinsRadioButton.click();
      accountHistoryView.applyFilter();

      expect(accountHistoryView.onlyWinsChip.isExisting()).to.equal(true);
      expect(accountHistoryView.gamingChip.isExisting()).to.equal(true);
      expect(accountHistoryView.removeAllChip.isExisting()).to.equal(true);
    });

    it('should show the previously applied filters when returning to filters selection', () => {
      accountHistoryView.goToAllFilters();
      accountHistoryView.excludePaymentsRadioButton.click();
      expect(accountHistoryView.excludePaymentsRadioSelector.isSelected()).to.equal(true);
      accountHistoryView.applyFilter();

      expect(accountHistoryView.excludePaymentsChip.isExisting()).to.equal(true);
      expect(accountHistoryView.removeAllChip.isExisting()).to.equal(true);

      accountHistoryView.openFiltersDropdown();

      expect(accountHistoryView.excludePaymentsRadioSelector.isSelected()).to.equal(true);
    });

    it('should show the singles chip', () => {
      accountHistoryView.goToAllFilters();
      accountHistoryView.singlesToggleSwitch.click();
      expect(accountHistoryView.singlesCheckbox.isSelected()).to.equal(true);
      expect(accountHistoryView.multiplesCheckbox.isSelected()).to.equal(false);
      accountHistoryView.applyFilter();

      expect(accountHistoryView.singlesChip.isExisting()).to.equal(true);
      expect(accountHistoryView.multiplesChip.isExisting()).to.equal(false);
    });

    it('should show the multiples chip', () => {
      accountHistoryView.goToAllFilters();
      accountHistoryView.multiplesToggleSwitch.click();
      expect(accountHistoryView.singlesCheckbox.isSelected()).to.equal(false);
      expect(accountHistoryView.multiplesCheckbox.isSelected()).to.equal(true);
      accountHistoryView.applyFilter();

      expect(accountHistoryView.singlesChip.isExisting()).to.equal(false);
      expect(accountHistoryView.multiplesChip.isExisting()).to.equal(true);
    });
  });

  it('should display History View', () => {
    if (browser.getUrl().includes('es')) {
      expect(accountHistoryView.transactionComponents.length).to.above(0);
    }
  });

  describe('User wants the transactions annual report', () => {
    it('ExportToPdf button should be enabled', () => {
      if (browser.getUrl().includes('es')) {
        accountHistoryView.goToAccountSummary();
        accountSummaryView.yearDropDown.waitForDisplayed();
        accountSummaryView.selectSummaryReportYear();
        expectWdio(accountSummaryView.exportToPdfButton).toBeEnabled();
        accountSummaryView.exportSummary();
      }
    });
  });
});
