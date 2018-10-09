import Page from '../Page';
import Button from '../../components/Button';
import { prefFields } from './const/preferences';


export class Preferences extends Page {
    constructor() {
        super();
        this.updateMarketingButton = new Button(prefFields.updateMarketing.name,
            prefFields.updateMarketing.cssSelector);
    }
}

const preferences = new Preferences();
export default preferences;
