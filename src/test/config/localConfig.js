const merge = require('deepmerge');

const urls = require('./envConfig');
const chrome = require('./browsersCap/chrome.js');
//const firefox = require('./browsersCap/firefox.js');
//const safari = require('./browsersCap/safari.js');

const wdioConf = require('./wdioConf.js');

exports.config = merge(wdioConf.config, {
    capabilities: [
        chrome,
        //safari,
        //firefox,
    ],
    baseUrl: urls.exportUrlFull,
});
