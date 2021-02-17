import Page from './Page';
import { PersonalDetailsView } from './PersonalDetailsView';

export class MyAccountView extends Page {
  get accountHistoryElement() {
    return $('div[data-test-handler=TileAccountHistory]');
  }

  get personalDetailsElement() {
    return $('div[data-test-handler=TilePersonalDetails]');
  }

  get securitySettingsElement() {
    return $('div[data-test-handler=TileLoginSecuritySettings]');
  }

  get siteSettingsElement() {
    return $('div[data-test-handler=TileSiteSettings]');
  }

  goToPersonalDetails() {
    this.personalDetailsElement.waitForDisplayed();
    this.personalDetailsElement.click();
    return new PersonalDetailsView();
  }
}

const myAccountView = new MyAccountView();
export default myAccountView;
