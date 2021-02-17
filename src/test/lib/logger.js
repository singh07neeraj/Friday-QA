import winston from 'winston';
import testConfig from '../config/testConfigReg';

const transports = [];

transports.push(
  new winston.transports.Console({
    json: process.env.LOCAL_LOG_JSON === 'true',
    colorize: true,
    level: testConfig.logLevel,
    //debug -> info -> error
  })
);

export const logger = new winston.Logger({
  transports,
});

//export default logger;
