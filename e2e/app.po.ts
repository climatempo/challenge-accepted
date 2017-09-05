import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppHeader() {
    return element(by.css('app-root header'));
  }

  getAppHeaderLogo() {
    return element(by.css('app-root header img'));
  }

  getAppHeaderSearch() {
    return element(by.css('app-root header input'));
  }

  getAppMain() {
    return element(by.css('app-root main'));
  }

  getAppMainHeaderPrevisao() {
    return element(by.css('app-root main h4'));
  }

  getAppMainCards() {
    return element.all(by.css('.card'));
  }

  getAppMainFirstCardTitle() {
    return element(by.css('.card-title'));
  }

  getAppMainFirstCardText() {
    return element(by.css('.card-text'));
  }
}
