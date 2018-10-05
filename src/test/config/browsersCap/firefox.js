const browserVersion = 59;

const firefox = {
    browserName: 'firefox',
    version: browserVersion,
    'moz:firefoxOptions': {
        prefs: {
            'dom.ipc.processCount': 8,
        },
        log: {
            level: 'trace',
        },
    },
};

module.exports = firefox;
