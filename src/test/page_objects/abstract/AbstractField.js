import { logger } from '../../lib/logger';

class AbstractField {
    constructor() {
        this.inputSel = null;
    }

    static getElement(selector) {
        return browser.element(selector);
    }

    waitForElement(time = 1000) {
        logger.debug(`Waitng for: ${this.inputSel}`);
        const element = AbstractField.getElement()(this.inputSel);
        element.waitForExist(time);
        element.waitForVisible(time);
    }

    click() {
        logger.debug(`Click on: ${this.inputSel}`);
        AbstractField.getElement(this.inputSel).click();
    }

    get isVisible() {
        logger.debug(`Visibility of: ${this.inputSel}`);
        const result = browser.isVisible(this.inputSel);
        logger.debug(result);
        return result;
    }
}

export default AbstractField;
