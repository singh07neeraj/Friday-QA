/*global global */
/*eslint global-require: "warn"*/
/*eslint no-unused-expressions: "warn"*/
/*eslint prefer-destructuring: "warn"*/
/*eslint no-undef: "warn"*/
/*eslint comma-dangle: "warn" */

require('dotenv').config();

const seleniumArgs = require('./selenium-defaults');

exports.config = {
    debug: false,
    services: ['selenium-standalone', 'firefox-profile'],
    firefoxProfile: {
        extensions: [],
        'browser.startup.homepage': 'http://webdriver.io'
    },
    seleniumArgs,
    seleniumInstallArgs: seleniumArgs,
    updateJob: false,
    specs: [],
    exclude: [],
    suites: {
        smoke: [
            './src/test/specs/*'
        ],
    },
    maxInstances: 1,
    capabilities: [],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    screenshotOnReject: true,
    waitforTimeout: 30000,

    plugins: {},

    framework: 'mocha',
    reporters: [
        'spec',
        'junit',
        'allure'
    ],
    reporterOptions: {
        allure: { outputDir: './allure-results/' },
        junit: { outputDir: './junit-results/' }
    },

    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:babel-register'],
        timeout: 60000
    },

    before() {
        const chai = require('chai');
        global.expect = chai.expect;

    //     if (browser.desiredCapabilities.browserName.toLowerCase().includes('safari')
    //         || browser.desiredCapabilities.browserName.toLowerCase().includes('ios')
    //         || browser.desiredCapabilities.browserName.toLowerCase().includes('android')) {
    //         //do nothing
    //     } else {
    //         browser.setViewportSize({
    //             width: 400,
    //             height: 2200
    //         });
    //         browser.windowHandlePosition({ x: 10, y: 10 });
    //     }
    }
};
