import { WebWrapperMakerDemoPage } from './app.po';

describe('web-wrapper-maker-demo App', () => {
  let page: WebWrapperMakerDemoPage;

  beforeEach(() => {
    page = new WebWrapperMakerDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
