import { PiecemealPage } from './app.po';

describe('piecemeal App', function() {
  let page: PiecemealPage;

  beforeEach(() => {
    page = new PiecemealPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('piecemeal works!');
  });
});
