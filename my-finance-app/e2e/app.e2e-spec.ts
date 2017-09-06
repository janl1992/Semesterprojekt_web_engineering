import { MyFinanceAppPage } from './app.po';

describe('my-finance-app App', () => {
  let page: MyFinanceAppPage;

  beforeEach(() => {
    page = new MyFinanceAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
