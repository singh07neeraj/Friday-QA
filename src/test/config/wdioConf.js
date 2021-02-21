const screenshot = require('./screenshot.js');
const chai = require('chai');
const allure = require('@wdio/allure-reporter').default;
require('dotenv').config();

// Max time for single test case execution
const mochaTimeout = process.env.DEBUG ? 99999999 : 120000;
const elementTimeout = 10000;

exports.config = {
  runner: 'local',
  debug: false,
  specs: ['./src/test/specs/**/*.js'],
  exclude: [],
  suites: {
    navigationExternalLinks: ['./src/test/specs/smoke/navigation/externalLinks.js'],
  },
  maxInstances: 10,
  capabilities: [
    // capabilities are inside src/test/config/localConfig.js and src/test/config/browsersCap/chrome.js
  ],
  bail: 0,
  logLevel: process.env.DEBUG ? 'info' : 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  screenshotOnReject: true,
  waitforTimeout: elementTimeout,

  plugins: {},

  framework: 'mocha',
  reporters: [
    'spec',
    [
      'junit',
      {
        outputDir: './junit-results/',
        outputFileFormat(options) {
          // optional
          return `WDIO.${options.capabilities.browserName}.${options.capabilities.version}.${options.cid}.xml`;
        },
      },
    ],
    [
      'allure',
      {
        outputDir: './allure-results/',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        disableMochaHooks: true,
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: mochaTimeout,
    require: ['@babel/register'],
  },

  before: function () {
    require('expect-webdriverio');
    global.expectWdio = global.expect;

    global.allure = allure;
    global.expect = chai.expect;

    if (!(browser.desiredCapabilities instanceof Map)) {
      browser.setWindowSize(1920, 1080);
    }
  },

  beforeSuite: function (suite) {
    allure.addFeature(suite.name);
  },

  beforeTest: () => {
    allure.addEnvironment('BROWSER', browser.capabilities.browserName);
    allure.addEnvironment('BROWSER_VERSION', browser.capabilities.version);
    allure.addEnvironment('PLATFORM', browser.capabilities.platform);
  },

  afterTest: ({ error }) => {
    if (error !== undefined) {
      screenshot.takeScreenshot(test.title, true);
    }
  },

  afterHook: (context, { error }) => {
    if (error !== undefined) {
      screenshot.takeScreenshot(test.title, true);
    }
  },
};
