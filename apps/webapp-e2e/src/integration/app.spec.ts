import { getGreeting } from '../support/app.po';

describe('webapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to webapp!');
  });
});
