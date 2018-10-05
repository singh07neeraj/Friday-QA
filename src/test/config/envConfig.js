// eslint-disable-next-line prefer-destructuring
const argv = require('yargs').argv;

if (typeof argv.env === 'undefined') {
    console.log('--env variable have to be provided from command line');
}

if (typeof process.env.ENV === 'undefined') {
    process.env.ENV = argv.env;
}

const buildDefaultUrl = (env) => {
    const envPostfix = (env === 'liv') ? '' : `-${env}`;
    return `http://sports.williamhill${envPostfix}.com/betting/`;
};

const exportUrl = buildDefaultUrl(process.env.ENV);

const exportUrlFull = `${exportUrl}`;

module.exports = {
    exportUrlFull,
};
