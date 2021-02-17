const urls = require('./urls.json');
const { argv } = require('yargs').require('env').choices('env', Object.keys(urls.url));

const { env } = argv;
process.env.ENV = env;

function getLang(v) {
  const match = v.match(/-(es|it)$/);
  return (match && match[1]) || 'en';
}

const exportUrlFull = urls.url[env];
const lang = getLang(env);
console.log(exportUrlFull);

module.exports = {
  exportUrlFull,
  lang,
  env,
};
