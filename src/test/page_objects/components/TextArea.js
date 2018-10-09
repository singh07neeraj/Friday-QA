import AbstractElement from '../abstract/AbstractElement';
import { logger } from '../../common/base';

class TextArea extends AbstractElement {
    constructor(elementSelector, linkSelector = '') {
        super();
        this.elementSel = elementSelector;
        this.linkSel = linkSelector;
        this.defaultWaitTime = 3000;
    }

    get isEmpty() {
        logger.debug(`Checking if empty: ${this.elementSel}`);
        const result = this.getElement().getText().length === 0;
        logger.debug(`is empty: ${result}`);
        return result;
    }
}

export default TextArea;
