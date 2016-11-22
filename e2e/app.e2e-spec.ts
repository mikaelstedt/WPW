import { WpwPage } from './app.po';

describe('wpw App', function() {
  let page: WpwPage;

  beforeEach(() => {
    page = new WpwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
