import { Key } from 'protractor';
import { AppPage } from './app.po';

describe('App initial', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('init: should have header', () => {
    page.navigateTo();
    expect(page.getAppHeader().isPresent()).toBeTruthy();
  });

  it('init: header should have the logo', () => {
    page.navigateTo();
    expect(page.getAppHeaderLogo().isPresent()).toBeTruthy();
  });

  it('init: header should have the empty search', () => {
    page.navigateTo();
    let search = page.getAppHeaderSearch();
    expect(search.isPresent()).toBeTruthy();
    expect(search.getAttribute('value')).toBeFalsy();
  });

  it('init: should have main w/ initial card', () => {
    page.navigateTo();
    expect(page.getAppMain().isPresent()).toBeTruthy();
    let cards = page.getAppMainCards();
    let firstCardTitle = page.getAppMainFirstCardTitle();
    let firstCardText = page.getAppMainFirstCardText();
    expect(cards.count()).toBe(1);
    expect(firstCardTitle.getText()).toContain('Climatempo / Previsão do tempo');
    expect(firstCardText.getText()).toContain('Insira o nome da cidade para a qual você deseja saber a previsão');
  });
});

describe('App invalid location', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('invalid: should have main w/ invalid location card', () => {
    page.navigateTo();
    let search = page.getAppHeaderSearch();
    search.sendKeys('pindamonhangaba');
    expect(search.getAttribute('value')).toBe('pindamonhangaba');
    search.sendKeys(Key.ENTER);
    expect(page.getAppMain().isPresent()).toBeTruthy();
    let cards = page.getAppMainCards();
    let firstCardTitle = page.getAppMainFirstCardTitle();
    let firstCardText = page.getAppMainFirstCardText();
    expect(cards.count()).toBe(1);
    expect(firstCardTitle.getText()).toContain('Climatempo / Previsão do tempo');
    expect(firstCardText.getText()).toContain('Previsão para pindamonhangaba não disponível no momento');
  });
});

describe('App valid location: Osasco', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('invalid: should have main w/ 7 cards', () => {
    page.navigateTo();
    let search = page.getAppHeaderSearch();
    search.sendKeys('osasco');
    expect(search.getAttribute('value')).toBe('osasco');
    search.sendKeys(Key.ENTER);
    expect(page.getAppMain().isPresent()).toBeTruthy();
    expect(page.getAppMainHeaderPrevisao().isPresent()).toBeTruthy();
    expect(page.getAppMainHeaderPrevisao().getText()).toBe('Previsão para Osasco - SP');
    let cards = page.getAppMainCards();
    let firstCardTitle = page.getAppMainFirstCardTitle();
    let firstCardText = page.getAppMainFirstCardText();
    expect(cards.count()).toBe(7);
    expect(firstCardTitle.getText()).toContain('31/1/2017');
    expect(firstCardText.getText()).toContain('Sol com muitas nuvens durante o dia');
  });
});

describe('App valid location: São Paulo', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('invalid: should have main w/ 7 cards', () => {
    page.navigateTo();
    let search = page.getAppHeaderSearch();
    search.sendKeys('são paulo');
    expect(search.getAttribute('value')).toBe('são paulo');
    search.sendKeys(Key.ENTER);
    expect(page.getAppMain().isPresent()).toBeTruthy();
    expect(page.getAppMainHeaderPrevisao().isPresent()).toBeTruthy();
    expect(page.getAppMainHeaderPrevisao().getText()).toBe('Previsão para São Paulo - SP');
    let cards = page.getAppMainCards();
    let firstCardTitle = page.getAppMainFirstCardTitle();
    let firstCardText = page.getAppMainFirstCardText();
    expect(cards.count()).toBe(7);
    expect(firstCardTitle.getText()).toContain('31/1/2017');
    expect(firstCardText.getText()).toContain('Sol com muitas nuvens durante o dia');
  });
});
