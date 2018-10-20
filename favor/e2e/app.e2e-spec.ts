import { FavorPage } from './app.po';

describe('favor App', function() {
  let page: FavorPage;

  beforeEach(() => {
    page = new FavorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
