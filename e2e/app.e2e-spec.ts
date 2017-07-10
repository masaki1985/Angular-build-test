import { BuildTestPage } from './app.po';

describe('build-test App', () => {
  let page: BuildTestPage;

  beforeEach(() => {
    page = new BuildTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
