import { FundmePage } from './app.po';

describe('fundme App', () => {
  let page: FundmePage;

  beforeEach(() => {
    page = new FundmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
