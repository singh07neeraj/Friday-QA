import { logger } from '../../common/base';

class Page {
    constructor(url = '?locale=en-gb') {
        this.url = url;
        if (logger !== undefined) {
            logger.debug(`URL: ${this.url}`);
        }
    }

    static pause(time = 1000) {
        logger.debug(`Pausing for: ${time}ms`);
        browser.pause(time);
    }

    open(url = this.url) {
        logger.info(`Opening: ${url}, browser: ${browser.getUrl()}`);
        browser.url(url);
        logger.debug(`Opened: ${url}, browser: ${browser.getUrl()}`);
    }
}

export default Page;
