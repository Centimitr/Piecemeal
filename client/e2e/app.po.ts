export class PiecemealPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('piecemeal-app h1')).getText();
  }
}
