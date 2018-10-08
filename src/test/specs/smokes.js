import header from '../page_objects/page/sbHeader/Header';
import preferences from '../page_objects/page/myAccount/Preferences';
import { assertMsg, users, testDesc } from '../common/base';

describe(testDesc.describe('Smoke Suite'), () => {
    before('', () => {
        browser.reload();
        header.open();
        header.logIntoSportsbook(users.positive.login, users.positive.password);
    });
    it(testDesc.it('description needed'), () => {
        header.balanceButton.click();
        header.menuPreferencesButton.clickAndSwitch();
        preferences.updateMarketingButton.waitForElement(10000);
        expect(preferences.updateMarketingButton.isVisible,
            `${preferences.updateMarketingButton.name} ${assertMsg.notVisible}`).to.equal(true);
    });
});