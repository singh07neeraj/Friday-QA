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
    //liv com
    smokeLivCom: ['./src/test/specs/smoke/**'],
    //liv es
    smokeLivEs: ['./src/test/specs/smoke/**'],
    //liv it
    smokeLivIt: ['./src/test/specs/smoke/**'],
    // Spain
    smokeSpain: ['./src/test/specs/smoke/**'],
    //Standalone smoke
    standalone: ['./src/test/specs/standalone/**'],
    standaloneSaferGambling: ['./src/test/specs/standalone/saferGambling.js'],
    saferGamblingLandingPage: ['./src/test/specs/smoke/safergambling/saferGamblingLandingPage.js'],
    saferGamblingSelfAssessment: ['./src/test/specs/smoke/safergambling/saferGamblingSelfAssessment.js'],
    saferGamblingDepositLimits: ['./src/test/specs/smoke/safergambling/saferGamblingDepositLimits.js'],
    saferGamblingGamingTimeReminders: ['./src/test/specs/smoke/safergambling/saferGamblingGamingTimeReminders.js'],
    smokeSpainDepositLimits: ['./src/test/specs/flaky/smokeSpainDepositLimits.js'],
    // Italy
    smokeItaly: ['./src/test/specs/smoke/**'],
    smokeItalyDepositLimits: ['./src/test/specs/smoke/flaky/smokeItalyDepositLimits.js'],
    // Com
    smokeCom: ['./src/test/specs/smoke/**'],
    smokeComDepositLimits: ['./src/test/specs/flaky/smokeSpainDepositLimits.js'],
    // Generic single suites
    security: ['./src/test/specs/smoke/security/**'],
    securitySession: ['./src/test/specs/smoke/security/session.js'],
    navigation: ['./src/test/specs/smoke/navigation/*.js'],
    navigationHome: ['./src/test/specs/smoke/navigation/navigation.js'],
    navigationExternalLinks: ['./src/test/specs/smoke/navigation/externalLinks.js'],
    transactions: ['./src/test/specs/smoke/transactions/**'],
    preferences: ['./src/test/specs/smoke/preferences/*.js'],
    preferencesContact: ['./src/test/specs/smoke/preferences/contact.js'],
    preferencesMarketing: ['./src/test/specs/smoke/preferences/marketing.js'],
    // Flaky or obsolete tests
    flakyMyBets: ['./src/test/specs/flaky/myBets.js'],
    flakyDepositLimits: ['./src/test/specs/flaky/depositLimits.js', './src/test/specs/flaky/depositLimitsSmoke.js'],
    flakyDataCaching: ['./src/test/specs/flaky/dataCaching.js'],
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
