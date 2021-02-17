import { logger } from '../common/base';
import envConfig from '../config/envConfig';

class Page {
  static pause(time = 1000) {
    logger.debug(`Pausing for: ${time}ms`);
    browser.pause(time);
  }

  open(path = '') {
    logger.debug(`Opening path: ${path}`);
    const url = `${envConfig.exportUrlFull}${path}`;
    logger.debug(`Opening url: ${url}`);
    browser.url(url);
    logger.debug(envConfig);
    logger.debug(`Opened: ${url}, browser: ${browser.getUrl()}`);

    return this;
  }

  get container() {
    return $('div.cp-ma-myaccount-dropdown__dropdown');
  }
}
export default Page;
