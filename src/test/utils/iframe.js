import { logger } from '../lib/logger';

export const switchIframe = (selector) => {
    try {
        browser.waitForExist(selector);
        logger.debug(`iframe selector: ${selector}`);
        const id = browser.element(selector).value;
        logger.debug(`iframe id: ${JSON.stringify(id)}`);
        browser.frame(id);
        browser.pause(1000);
    } catch (e) {
        console.log(e);
    }
};
