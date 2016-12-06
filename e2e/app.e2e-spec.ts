import { FirstdemoPage } from './app.po';

describe('firstdemo App', function() {
  let page: FirstdemoPage;

  beforeEach(() => {
    page = new FirstdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
