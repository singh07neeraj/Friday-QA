const urls = require('./envConfig');

const merge = require('deepmerge');
const wdioConf = require('./wdioConf.js');

const bsCommons = require('./browserstackCommon.json');

const bsTestName = 'Smoke test';

exports.config = merge(wdioConf.config, {
  user: 'USERNAME',
  key: 'USERKEY',
  capabilities: [
    {
      device: 'iPhone 8',
      realMobile: 'true',
      os_version: '11',
      browser: 'chrome',
      maxInstances: 1,
      name: bsTestName,
      build: bsCommons.buildSmokeiOS,
      project: bsCommons.projectNameBS,
      'browserstack.local': bsCommons.browserstack.local,
      'browserstack.video': true,
      'browserstack.debug': true,
      'browserstack.safari.allowAllCookies': true,
      'browserstack.console': 'errors',
      webStorageEnabled: false,
    },
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
});

// Code to support common capabilities
exports.config.capabilities.forEach((caps) => {
  for (const i in exports.config.commonCapabilities) {
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
  }
});
