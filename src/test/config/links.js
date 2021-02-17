import { lang, env } from './envConfig';

class Links {
  get myRewards() {
    const data = {
      default: 'https://promotions.williamhill.com/',
      liv: 'https://promotions.williamhill.com/en-gb/',
      'liv-es': 'https://promociones.williamhill.es/',
      'liv-it': 'https://promozioni.williamhill.it/',
      'pp1-es': 'https://promociones.williamhill-pp1.es/',
      pp1: 'https://promotions.williamhill-pp1.com/en-gb/',
      'pp1-it': 'https://promozioni.williamhill-pp1.it/',
    };

    return this.getLinkFor(data, lang, env);
  }

  get help() {
    const data = {
      default: 'https://williamhill-es--tst.custhelp.com/app/home/',
      'pp1-es': 'https://williamhill-es--tst.custhelp.com/app/home/',
      pp1: 'https://williamhill-lang--tst.custhelp.com/app/home/',
      'pp1-it': 'https://williamhill-it--tst.custhelp.com/app/home/',
      liv: 'https://williamhill-lang.custhelp.com/app/home/',
      'liv-es': 'https://williamhill-es.custhelp.com/app/home/',
      'liv-it': 'https://williamhill-it.custhelp.com/app/home/',
    };

    return this.getLinkFor(data, lang, env);
  }

  getLinkFor(linksList, language, currentEnv) {
    const defaultLang = `default-${language}`;

    if (currentEnv in linksList) {
      return linksList[currentEnv];
    } else if (defaultLang in linksList) {
      return linksList[defaultLang];
    } else if ('default' in linksList) {
      return linksList.default;
    }

    return '';
  }
}

const links = new Links();
export default links;
