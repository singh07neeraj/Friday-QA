import AbstractElement from '../abstract/AbstractElement';
import { logger } from '../../lib/logger';

class Button extends AbstractElement {
    constructor(name, elementSel) {
        super(name);
        this.labelSel = null;
        this.elementSel = elementSel;
        logger.debug(`Created button: ${name}`);
    }

    isFocused() {
        return browser.hasFocus(this.elementSel);
    }
}

export default Button;
