import { name, version } from '../../../package.json';

export const initAllureEnv = () => {
    try {
        global.allure.addEnvironment('Project: ', name);
        global.allure.addEnvironment('Version: ', version);
    } catch (e) {
        console.log(e);
    }
};
