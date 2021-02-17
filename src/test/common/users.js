/* eslint-disable camelcase */
import { env } from '../config/envConfig';

const merge = require('deepmerge');

const enUsers = {
  preferences: {
    login: 'WHATA_testing1',
    password: 'KF6_32P2rfThhAE',
    contactable: true,
    contactableMethods: {
      mail: false,
      sms: true,
      call: false,
    },
  },
  statements: { login: 'WHATA_autotest7', password: 'AutoTest1234' },
  gambling: { login: 'WHATA_gambltst', password: 'YR_G4uGN48T' },
  transactions: { login: 'WHATA_testing1', password: 'KF6_32P2rfThhAE' },
  noFundsAccount: { login: 'lolo89', password: 'Password1234' },
  depositLimits: { login: 'esOxi192329635', password: 'B3nchmark' },
  myBets: { login: 'WHATA_lukasz07', password: 'pass123' },
};

const esUsers = merge(enUsers, {
  transactions: { login: 'spitfire_es04', password: 'Qwertyui9' },
  myBets: { login: 'spitfire_es04', password: 'Qwertyui9' },
});

const itUsers = merge(enUsers, {
  transactions: { login: 'johnybravo', password: 'tester1234' },
  myBets: { login: 'johnybravo', password: 'tester1234' },
});

const enLivUsers = merge(enUsers, {
  transactions: { login: 'WHATA_autotest7', password: 'AutoTest1234' },
  myBets: { login: 'WHATA_autotest7', password: 'AutoTest1234' },
});
const enPP2Users = merge(enUsers, {
  transactions: { login: 'pp2_portal_qa0', password: 'password1234' },
  myBets: { login: 'pp2_portal_qa1', password: 'password1234' },
});
const esLivUsers = merge(enUsers, {
  transactions: { login: 'WHATA_rcolo', password: 'swa88njC8W8' },
  myBets: { login: 'WHATA_rcolo', password: 'swa88njC8W8' },
});

const itLivUsers = merge(enUsers, {
  transactions: { login: 'romagb1', password: 'Tester55' },
  myBets: { login: 'romagb1', password: 'Tester55' },
});

const allUsers = {
  pp1: enUsers,
  'pp1-es': esUsers,
  'pp1-it': itUsers,
  liv: enLivUsers,
  'liv-es': esLivUsers,
  'liv-it': itLivUsers,
  alchemy_liv: enLivUsers,
  alchemy_pp2: enPP2Users,
};

export const users = allUsers[env];
