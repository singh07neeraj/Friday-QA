import Field from '../abstract/AbstractField';
import { logger } from '../../lib/logger';

const fieldCamel = name => name.substr(0, 1).toLowerCase() + name.substr(1);

class InputField extends Field {
    constructor(name, selector) {
        super();
        this.name = fieldCamel(name);
        this.inputSel = selector;
        this.element = null;
        logger.debug(`Created: ${this.inputSel}`);
    }

    get inputValue() {
        return browser.element(this.inputSel).getValue();
    }

    set inputValue(value) {
        logger.debug(`field ${this.inputSel}, typing: ${value}`);
        if (typeof value !== 'undefined') {
            browser.element(this.inputSel).setValue(value);
        }
    }

    getAttribute(attName) {
        logger.debug(`field ${this.inputSel}, getting attribute: ${attName}`);
        return browser.getAttribute(this.inputSel, attName);
    }

    clearInputValue() {
        //browser.clearElement(this.inputSel);
        browser.element(this.inputSel).setValue('');
        return this;
    }

    waitForElement(time = 10000) {
        logger.debug(`Waitng for: ${this.inputSel}`);
        this.element = browser.element(this.inputSel);
        this.element.waitForExist(time);
        this.element.waitForVisible(time);
    }

    isFocused() {
        return browser.hasFocus(this.inputSel);
    }
}

export default InputField;
