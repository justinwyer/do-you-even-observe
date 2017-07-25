import { DoYouEvenObservePage } from './app.po';

describe('do-you-even-observe App', () => {
  let page: DoYouEvenObservePage;

  beforeEach(() => {
    page = new DoYouEvenObservePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
