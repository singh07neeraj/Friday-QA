const logLevels = {
    debug: 'debug',
    info: 'info',
    error: 'error',
};

const envNames = {
    pp1: 'pp1',
    pp2: 'pp2',
    pp3: 'pp3',
    pt1: 'pt1',
    liv: 'liv',
};

export default {
    asyncNbOfAttempts: 4,
    logLevel: logLevels.info,
    viewPortSize: { width: 400, height: 2200 },
    viewPortPos: { x: 1, y: 1 },
    envNames,
};
