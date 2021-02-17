import { request } from 'graphql-request';
import { logger } from '../lib/logger';
import url, { lang } from '../config/envConfig';

export const variables = {
  input: {
    day: 'NO_LIMIT',
    week: 'NO_LIMIT',
    month: 'NO_LIMIT',
  },
};

export const query = `mutation depositLimitUserValuesMutation($input: MyAccountDepositLimitState!) {
    updateDepositLimitUserValues(depositLimitUserValuesState: $input) {
      day
      week
      month
    }
  }`;

export const setLimitsToNoLimit = () => {
  // eslint-disable-next-line promise/catch-or-return
  request(url.graphQl, query, variables).then((data) => logger.debug(data));
};

export const limitsOrder = ['day', 'week', 'month'];

//TODO: English values to be updated when requirements for com will appear
const currentEnv = process.env.ENV;
const translations = {
  en: {
    depositTypes: {
      day: 'Daily limit',
      week: 'Weekly limit',
      month: 'Monthly limit',
    },
    chooseLimit: 'Choose limit',
    howDoesItWorkUrl: '',
    increaseLimitUrl: '',
  },
  es: {
    depositTypes: {
      day: 'límite diario',
      week: 'límite semanal',
      month: 'límite mensual',
    },
    chooseLimit: 'Elije un nuevo límite',
    howDoesItWorkUrl: () => {
      const envs = {
        'pp1-es': 'https://williamhill-es--tst.custhelp.com/app/answers/detail/a_id/8577',
        'pp3-es': 'https://williamhill-es--tst3.custhelp.com/app/answers/detail/a_id/8577',
        'aws-nonprod-pp1-es': 'https://williamhill-es--tst.custhelp.com/app/answers/detail/a_id/8577',
        'aws-nonprod-pp3-es': 'https://williamhill-es--tst3.custhelp.com/app/answers/detail/a_id/8577',
        'aws-dev-es': 'https://williamhill-es.custhelp.com/app/answers/detail/a_id/8577',
        default: 'https://williamhill-es.custhelp.com/app/answers/detail/a_id/8577',
      };
      return envs[currentEnv] || envs.default;
    },
    increaseLimitUrl: () => {
      const envs = {
        'pp1-es': 'https://williamhill-es--tst.custhelp.com/ci/documents/detail/5/104',
        'pp2-es': 'https://williamhill-es--tst2.custhelp.com/ci/documents/detail/5/104',
        'pp3-es': 'https://williamhill-es--tst3.custhelp.com/ci/documents/detail/5/104',
        'aws-nonprod-pp1-es': 'https://williamhill-es--tst.custhelp.com/ci/documents/detail/5/104',
        'aws-nonprod-pp2-es': 'https://williamhill-es--tst2.custhelp.com/ci/documents/detail/5/104',
        'aws-nonprod-pp3-es': 'https://williamhill-es--tst3.custhelp.com/ci/documents/detail/5/104',
        'aws-dev-es': 'https://williamhill-es.custhelp.com/ci/documents/detail/5/104',
        default: 'https://williamhill-es.custhelp.com/ci/documents/detail/5/104',
      };
      return envs[currentEnv] || envs.default;
    },
  },
  it: {
    depositTypes: {
      week: 'Limite settimanale',
    },
    chooseLimit: 'Scegli un nuovo limite',
    howDoesItWorkUrl: () => {
      const envs = {
        default: 'https://williamhill-it.custhelp.com/app/answers/detail/a_id/7301/',
      };
      return envs[currentEnv] || envs.default;
    },
  },
};

export const { depositTypes, chooseLimit, howDoesItWorkUrl, increaseLimitUrl } = translations[lang];
