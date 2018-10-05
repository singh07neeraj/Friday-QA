const browserVersion = 66;
const chrome = {
    browserName: 'chrome',
    version: browserVersion,
    maxInstances: 3,
    chromeOptions: { args: ['disable-infobars'] },
    loggingPrefs: {
        driver: 'INFO',
        browser: 'INFO',
    },
};

module.exports = chrome;
