import Page from './Page';
export class NavigationView extends Page {
  get cookiesAccept() {
    return $('.uc-btn-accept-wrapper button');
  }
  get insured() {
    return $('(//*[contains(@class,"RadioButtonListField__radioImage")])[1]');
  }

  get registeredOrReRegistered() {
    return $('(//*[contains(@class,"RadioButtonListField__radioImage")])[2]');
  }

  get Continue() {
    return $('[type="submit"]');
  }

  get yes() {
    return $('[value="Yes"]');
  }

  get no() {
    return $('[value="No"]');
  }

  get carUsed() {
    return $('[value="used"]');
  }

  get carBrandNew() {
    return $('[value="brandNew"]');
  }

  get selectCar() {
    return $('[name="make"]');
  }

  get carModel() {
    return $('[name="model"]');
  }

  get shapeIsTheCar() {
    return $('[name="bodyType"]');
  }

  get engin() {
    return $('[name="engine"]');
  }
  get fuelType() {
    return $('[name="fuelType"]');
  }

  get enginePower() {
    return $('[name="enginePower"]');
  }

  get monthYearFirstRegistered() {
    return $('[name="monthYearFirstRegistered"]');
  }

  get monthYearOwnerRegistered() {
    return $('[name="monthYearOwnerRegistered"]');
  }
  get birthDate() {
    return $('[name="birthDate"]');
  }

  get birthDateText() {
    return $('[data-test-id="wizardTitle"]');
  }

  get carOwnerPostcode() {
    return $('[name="carOwnerPostcode"]');
  }

  get claimsClass() {
    return $$('[name="sf"]');
  }

  get dontKnow() {
    return $('[value="dont_know"]');
  }

  get footerHelp() {
    return $('li[data-test-handler="footer__help"] a');
  }

  get footerFeedback() {
    return $('li[data-test-handler="footer__feedback"] a');
  }

  get balanceField() {
    return $('div[data-test-handler="cp-ma-balance-balance__element-mainBalance"]');
  }

  get bonusesButton() {
    return $('div[data-test-handler="cp-ma-balance-balance__element-freeBets"]');
  }

  getRegistration() {
    this.cookiesAccept.click();
    this.insured.waitForDisplayed();
    this.insured.click();
    this.Continue.waitForDisplayed();
    this.Continue.click();
    this.yes.waitForDisplayed();
    this.yes.click();
    this.carUsed.waitForDisplayed();
    this.carUsed.click();
    this.Continue.waitForDisplayed();
    this.Continue.click();
    this.selectCar.waitForDisplayed();
    this.selectCar.click();
    this.carModel.waitForDisplayed();
    this.carModel.click();
    this.shapeIsTheCar.waitForDisplayed();
    this.shapeIsTheCar.click();
    this.engin.waitForDisplayed();
    this.engin.click();
    this.monthYearFirstRegistered.waitForDisplayed();
    this.monthYearFirstRegistered.setValue('10.2000');
    this.monthYearOwnerRegistered.waitForDisplayed();
    this.monthYearOwnerRegistered.setValue('10.2010');
    this.Continue.click();
    this.birthDate.waitForDisplayed();
    this.birthDate.setValue('07.10.1986');
  }
}

const navView = new NavigationView();
export default navView;
