describe('Testando primeiro acesso a aplicação', () => {
  it('Visitando a aplicação', () => {
    cy.visit('/');
    cy.get('form').find('input').should('have.id', 'search');
  });

  it('Verificando Input e fazendo Busca da cidade de São Paulo', () => {
    cy.visit('/');

    cy.get('[data-cy=input-search]').type('São Paulo');
    cy.get('h1').should('contain', 'Previsão para São Paulo - SP');
  });

  it('Verificando Input e fazendo busca da cidade de Osasco', () => {
    cy.visit('/');

    cy.get('[data-cy=input-search]').type('Osasco');
    cy.get('h1').should('contain', 'Previsão para Osasco - SP');
  });
});
