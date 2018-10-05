import AbstractElement from '../abstract/AbstractElement';
import { logger } from '../../lib/logger';
import { switchIframe } from '../../common/base';

class Button extends AbstractElement {
    constructor(name, elementSel, iframeSel = '') {
        super(name);
        this.labelSel = null;
        this.elementSel = elementSel;
        this.iframeSel = iframeSel;
        logger.debug(`Created button: ${name}`);
    }

    isFocused() {
        return browser.hasFocus(this.elementSel);
    }

    clickAndSwitch() {
        //this.scrollTo();
        logger.debug(`Trying to click on: ${this.elementSel}`);
        this.getElement().click();
        switchIframe(this.iframeSel);
        return this;
    }
}

export default Button;
