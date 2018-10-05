import header from '../page_objects/page/Header';
import preferences from '../page_objects/page/Preferences';
import { asserMsg, users, logIntoSportsbook} from '../common/base';

describe('description needed', () => {
    before('', () => {
        browser.reload();
        header.open();
        logIntoSportsbook(users.positive.login, users.positive.password);
    });
    it('description needed', () => {
        header.balanceButton.click();
        header.menuPreferencesButton.clickAndSwitch();
        preferences.updateMarketingButton.waitForElement(10000);
        expect(preferences.updateMarketingButton.isVisible,
            `${preferences.updateMarketingButton.name} ${asserMsg.notVisible}`).to.equal(true);
    });
});