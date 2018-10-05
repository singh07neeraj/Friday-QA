const merge = require('deepmerge');

const urls = require('./envConfig');
const chrome = require('./browsersCap/chrome.js');

const wdioConf = require('./wdioConf.js');

exports.config = merge(wdioConf.config, {
    capabilities: [chrome],
    baseUrl: urls.exportUrlFull,
});
