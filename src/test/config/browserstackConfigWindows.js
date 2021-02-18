const urls = require('./envConfig');

const merge = require('deepmerge');
const wdioConf = require('./wdioConf.js');
const browserstack = require('browserstack-local');
const bsCommons = require('./browserstackCommon.json');
const localIdentifier = Math.random().toString(36).substr(2, 9);
const bsTestName = 'Smoke test';

exports.config = merge(wdioConf.config, {
  user: 'joannam1',
  key: 'FCn5GfodbtAzzteakE71',
  capabilities: [
    /*
        {
            device: 'iPhone 8',
            realMobile: 'true',
            os_version: '11',
            browser: 'chrome',
            maxInstances: 1,
            name: bsTestName,
            build: bsCommons.buildSmoke,
            project: bsCommons.projectNameBS,
            'browserstack.local': bsCommons.browserstack.local,
            'browserstack.video': true,
            'browserstack.debug': true,
            'browserstack.safari.allowAllCookies': true,
            'browserstack.console': 'errors',
            webStorageEnabled: false,
        },
        {
            device: 'iPhone 8 Plus',
            realMobile: 'true',
            os_version: '11',
            browser: 'chrome',
            maxInstances: 1,
            name: bsTestName,
            build: bsCommons.buildSmoke,
            project: bsCommons.projectNameBS,
            'browserstack.local': bsCommons.browserstack.local,
            'browserstack.video': true,
            'browserstack.debug': true,
            'browserstack.safari.allowAllCookies': true,
            'browserstack.console': 'errors',
            webStorageEnabled: false,
        },
       
    {
      device: 'Samsung Galaxy S8',
      real_mobile: 'true',
      os_version: '7.0',
      browser: 'chrome',
      maxInstances: 1,
      name: bsTestName,
      build: bsCommons.buildSmoke,
      project: bsCommons.projectNameBS,
      'browserstack.local': bsCommons.browserstack.local,
      'browserstack.video': bsCommons.browserstack.video,
    },  */
    /*
        {
            device: 'Google Pixel',
            real_mobile: 'true',
            os_version: '8.0',
            browser: 'chrome',
            maxInstances: 1,
            name: bsTestName,
            build: bsCommons.buildSmoke,
            project: bsCommons.projectNameBS,
            'browserstack.local': bsCommons.browserstack.local,
            'browserstack.video': bsCommons.browserstack.video,
        },
        {
            device: 'iPad 6th',
            real_mobile: 'true',
            os_version: '11',
            browser: 'chrome',
            maxInstances: 1,
            name: bsTestName,
            build: bsCommons.buildSmoke,
            project: bsCommons.projectNameBS,
            'browserstack.local': bsCommons.browserstack.local,
            'browserstack.video': bsCommons.browserstack.video,
        },
        {
            device: 'Samsung Galaxy Tab 4',
            real_mobile: 'true',
            os_version: '4.4',
            browser: 'chrome',
            maxInstances: 1,
            name: bsTestName,
            build: bsCommons.buildSmoke,
            project: bsCommons.projectNameBS,
            'browserstack.local': bsCommons.browserstack.local,
            'browserstack.video': bsCommons.browserstack.video,
        },
        */
    {
      os: 'Windows',
      os_version: '10',
      browser: 'chrome',
      maxInstances: 1,
      name: bsTestName,
      build: bsCommons.buildSmokeWindows,
      project: bsCommons.projectNameBS,
      'browserstack.local': bsCommons.browserstack.local,
      'browserstack.video': bsCommons.browserstack.video,
    },
    /* {
            os: 'OS X',
            os_version: 'Mojave',
            browser: 'chrome',
            maxInstances: 1,
            name: bsTestName,
            build: bsCommons.buildSmoke,
            project: bsCommons.projectNameBS,
            'browserstack.local': bsCommons.browserstack.local,
            'browserstack.video': bsCommons.browserstack.video,
        },
        */
  ],
  maxInstances: 10,
  baseUrl: urls.exportUrlFull,
  services: [
    [
      'browserstack',
      {
        browserstackLocal: true,
      },
    ],
  ],
  onPrepare: [
    (config) => {
      if (!process.env.ENV.endsWith('liv')) {
        new Promise((resolve, reject) => {
          console.log('Connecting browserstack local');
          exports.bs_local = new browserstack.Local();
          exports.bs_local.start({ localIdentifier, key: config.key, forceLocal: true }, (error) => {
            if (error) {
              return reject(error);
            }
            console.log('Browserstack local connected');
            resolve();
            return null;
          });
        });
      }
    },
  ],

  onComplete: () => {
    if (!process.env.ENV.endsWith('liv')) {
      exports.bs_local.stop(function () {});
    }
  },
});

// Code to support common capabilities
exports.config.capabilities.forEach((caps) => {
  for (const i in exports.config.commonCapabilities) {
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
  }
});
