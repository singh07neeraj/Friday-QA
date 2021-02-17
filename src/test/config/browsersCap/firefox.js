const firefox = {
  browserName: 'firefox',
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
