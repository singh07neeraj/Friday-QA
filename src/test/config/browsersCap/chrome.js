const chrome = {
  browserName: 'chrome',
  maxInstances: 1,
  'goog:chromeOptions': { args: ['--disable-dev-shm-usage', '--no-sandbox', 'disable-infobars'] },
  'goog:loggingPrefs': {
    driver: 'INFO',
    browser: 'INFO',
  },
};

module.exports = chrome;
