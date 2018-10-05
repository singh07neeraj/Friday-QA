import Page from './Page';
import Button from '../components/Button';
import { fields } from '../../common/base';


export class Preferences extends Page {
    constructor() {
        super();
        this.updateMarketingButton = new Button(fields.updateMarketing.name, fields.updateMarketing.cssSelector);
    }
}

const preferences = new Preferences();
export default preferences;
