/*eslint no-underscore-dangle: "warn"*/
import { logger } from '../../lib/logger';

class AbstractElement {
    constructor(name) {
        this.name = name;
        this.labelSel = null;
        this.elementSel = null;
        this._defaultWaitTime = 5000;
    }

    get isVisible() {
        logger.debug(`Visibility of: ${this.elementSel}`);
        const result = browser.isVisible(this.elementSel);
        logger.debug(result);
        return result;
    }

    get text() {
        logger.debug(`Get text of: ${this.elementSel}`);
        const result = browser.getText(this.elementSel);
        logger.debug(result);
        return result;
    }

    getElement(element = this.elementSel) {
        return browser.element(element);
    }

    scrollTo() {
        logger.debug(`Scrolling to: ${this.elementSel}`);
        browser.scroll(this.elementSel);
        return this;
    }

    get isExisting() {
        let result = false;
        logger.debug(`Checking if existing: ${this.elementSel}`);
        try {
            this.waitForElement(this._defaultWaitTime);
            result = browser.elements(this.elementSel).value.length > 0;
            logger.debug(`Element ${this.elementSel} is existing`);
        } catch (e) {
            logger.debug(e);
        }
        return result;
    }

    set defaultWaitTime(value) {
        this._defaultWaitTime = value;
    }

    waitForElement(time = this.defaultWaitTime) {
        logger.debug(`Waiting for: ${this.elementSel}`);
        this.getElement().waitForVisible(time);
        return this;
    }

    click() {
        //this.scrollTo();
        logger.debug(`Trying to click on: ${this.elementSel}`);
        this.getElement().click();
        return this;
    }
}

export default AbstractElement;
