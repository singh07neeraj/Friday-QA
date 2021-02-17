module.exports = {
  baseURL: 'https://selenium-release.storage.googleapis.com',
  version: '3.141.59',
  drivers: {
    chrome: {
      //version: '76.0.3809.68',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com',
    },
    ie: {
      version: '3.7.0',
      arch: process.arch,
      baseURL: 'https://selenium-release.storage.googleapis.com',
    },
    firefox: {
      version: '0.23.0',
      arch: process.arch,
      baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
    },
    edge: {
      version: '16299',
    },
  },
  javaArgs: ['-Xmx1024m'],
};
