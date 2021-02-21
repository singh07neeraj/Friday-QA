import header from '../../../page_objects/Header';
import tags from 'mocha-tags';
import navView from '../../../page_objects/NavigationView';

tags('desktkop', 'mobile').describe('External links', () => {
  beforeEach(() => {
    header.open();
  });

  describe('should have proper title ', () => {
    it('should redirect to the promotions page', () => {
      const title = browser.getTitle();
      console.log('title :', title);
      expect(title).contains('FRIDAY Autoversicherung. In nur 90 Sekunden zu deinem Angebot!');
    });

    it('should able to do registration', () => {
      navView.getRegistration();
      console.log('navView.birthDateText.getText() ', navView.birthDateText.getText());
      expect(navView.birthDateText.getText()).contains('Wann wurdest du geboren?');
    });
  });
});
