import Page from './Page';
import accountSummaryView from './AccountSummaryView';
import { executeClick } from '../utils/executeCode';

export class AccountHistoryView extends Page {
  get summaryExportButton() {
    return $('div[data-test-handler="cp-ma-transactions-button-account-summary"]');
  }

  get calendarDatesCollection() {
    return $$('.css-qiipwm');
  }

  get excludePaymentsRadioSelector() {
    return $('input[data-test-handler="excludePayments"]');
  }

  get singlesCheckbox() {
    return $('#singles input');
  }

  get multiplesCheckbox() {
    return $('#multiples input');
  }

  get loadMoreButton() {
    return $('div.cp-ma-transactions-button-load-more button');
  }

  get allDatesDropDown() {
    return $('div[data-test-handler="date-range"]');
  }

  get filtersDropDown() {
    return $('div[data-test-handler="filters"]');
  }

  get transactionComponent() {
    return $('div.cp-ma-transactions-transaction');
  }

  get transactionComponents() {
    return $$('div.cp-ma-transactions-transaction');
  }

  get allDatesButton() {
    return $('button[data-test-handler="allDates"]');
  }

  get last7DaysButton() {
    return $('button[data-test-handler="last7"]');
  }

  get last14DaysButton() {
    return $('button[data-test-handler="last14"]');
  }

  get last30DaysButton() {
    return $('button[data-test-handler="last30"]');
  }

  get customRangeButton() {
    return $('button[data-test-handler="custom"]');
  }

  get customRangeFrom() {
    return $('div[data-test-handler=custom-range-from]');
  }

  get customRangeTo() {
    return $('div[data-test-handler=custom-range-to]');
  }

  get applyDatesButton() {
    return $('div.cp-ma-filters-list-apply-button button');
  }

  get allTab() {
    return $('div[data-test-handler="all"]');
  }

  get sportsTab() {
    return $('div[data-test-handler="sports"]');
  }

  get gamingTab() {
    return $('div[data-test-handler="gaming"]');
  }

  get filtersPanel() {
    return $('div.cp-ma-cc-modal-animation-enter-done');
  }

  get onlyWinsRadioButton() {
    return $('input[data-test-handler="onlyWins"]+div');
  }

  get onlyLosesRadioButton() {
    return $('input[data-test-handler="onlyLosses"]+div');
  }

  get onlyPaymentsRadioButton() {
    return $('input[data-test-handler="onlyPayments"]+div');
  }

  get excludePaymentsRadioButton() {
    return $('input[data-test-handler="excludePayments"]+div');
  }

  get singlesToggleSwitch() {
    return $('#singles');
  }

  get closeCalendarButton() {
    return $('.css-16n026t');
  }

  get multiplesToggleSwitch() {
    return $('#multiples');
  }

  get applyFiltersButton() {
    return $('.cp-ma-filters-list-apply-button button');
  }

  get onlyWinsChip() {
    return $('div[data-test-handler="onlyWins"]');
  }

  get onlyLosesChip() {
    return $('div[data-test-handler="onlyLosses"]');
  }

  get onlyPaymentsChip() {
    return $('div[data-test-handler="onlyPayments"]');
  }

  get excludePaymentsChip() {
    return $('div[data-test-handler="excludePayments"]');
  }

  get singlesChip() {
    return $('div[data-test-handler="singles"]');
  }

  get multiplesChip() {
    return $('div[data-test-handler="multiples"]');
  }

  get sportsChip() {
    return $('div[data-test-handler="sports"]');
  }

  get gamingChip() {
    return $('div[data-test-handler="gaming"]');
  }

  get removeAllChip() {
    return $('div[data-test-handler="resetAllFilters"]');
  }

  goToAllDatesFilter() {
    this.allDatesDropDown.waitForDisplayed();
    this.allDatesDropDown.click();
    this.applyDatesButton.waitForDisplayed();
  }

  openFiltersDropdown() {
    this.filtersDropDown.waitForDisplayed();
    this.filtersDropDown.click();
  }

  goToFiltersFilter() {
    this.openFiltersDropdown();
    this.singlesToggleSwitch.isExisting;
    this.applyFiltersButton.waitForDisplayed();
  }

  goToAllFilters() {
    this.goToFiltersFilter();
    this.allTab.click();
    this.applyFiltersButton.waitForDisplayed();
  }

  goToSportsFilters() {
    this.goToFiltersFilter();
    this.sportsTab.click();
    this.applyFiltersButton.waitForDisplayed();
  }

  goToGamingFilters() {
    this.goToFiltersFilter();
    this.gamingTab.click();
    this.applyFiltersButton.waitForDisplayed();
  }

  applyFilter() {
    this.applyFiltersButton.waitForEnabled();
    executeClick(this.applyFiltersButton);
  }

  applyDatesFilters() {
    this.applyFilter();
    executeClick(this.applyDatesButton);
    this.applyDatesButton.waitForDisplayed({ reverse: true });
  }

  goToAccountSummary() {
    this.summaryExportButton.click();
    return accountSummaryView;
  }

  getAllPresetDateRangeButtons() {
    return [
      () => this.allDatesButton,
      () => this.last7DaysButton,
      () => this.last14DaysButton,
      () => this.last30DaysButton,
    ];
  }

  getAllChips() {
    return [
      () => this.onlyWinsChip,
      () => this.onlyLosesChip,
      () => this.onlyPaymentsChip,
      () => this.excludePaymentsChip,
      () => this.singlesChip,
      () => this.multiplesChip,
      () => this.sportsChip,
      () => this.gamingChip,
      () => this.removeAllChip,
    ];
  }

  getAllGamingFilterOptions() {
    return [() => this.onlyWinsRadioButton, () => this.onlyLosesRadioButton];
  }

  getAllSportsFilterOptions() {
    const buttons = this.getAllGamingFilterOptions();
    buttons.push(
      () => this.singlesToggleSwitch,
      () => this.multiplesToggleSwitch
    );
    return buttons;
  }

  getAllFilterOptions() {
    const buttons = this.getAllSportsFilterOptions();
    buttons.push(
      () => this.onlyPaymentsRadioButton,
      () => this.excludePaymentsRadioButton
    );

    return buttons;
  }

  clearAllChips() {
    const chips = this.getAllChips();
    chips.forEach((item) => {
      if (item.isVisible) {
        item.click();
      }
    });
  }

  loadMoreTransactions() {
    this.loadMoreButton.click();
    this.summaryExportButton.waitForExist();
    this.loadMoreButton.waitForEnabled();
    return this;
  }

  selectLastDateSA() {
    this.calendarDatesCollection[this.calendarDatesCollection.length - 1].click();
    return this;
  }

  closeCalendar() {
    this.closeCalendarButton.click();
    return this;
  }

  getTransactionsCount() {
    return this.transactionComponents.length;
  }

  get customDateFrom() {
    return this.customRangeFrom.getValue('input');
  }

  set customDateFrom(value) {
    this.customRangeFrom.click();
    this.customRangeFrom.moveTo();
    browser.keys(value);
    browser.pause(500);
    browser.keys('\uE00C'); // Escape key
  }

  get customDateTo() {
    return this.customRangeTo.getValue('input');
  }

  set customDateTo(value) {
    this.customRangeTo.click();
    this.customRangeTo.moveTo();
    browser.keys(value);
    browser.pause(500);
    browser.keys('\uE00C'); // Escape key
  }
}
const accountHistoryView = new AccountHistoryView();
export default accountHistoryView;
