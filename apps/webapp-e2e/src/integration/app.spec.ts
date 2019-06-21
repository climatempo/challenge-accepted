describe('Search and Weather List', () => {
    beforeEach(() => {
        cy.server({
            status: 200
        });
    });

    it('should display validation errors for the search box', () => {
        cy.visit('/');

        cy.get('input')
            .type('a')
            .clear();

        cy.get('[data-cy="searchBoxValidation"]').should('contain', 'Informe uma cidade');

        cy.get('input').type('sa');

        cy.get('[data-cy="searchBoxValidation"]').should('contain', '3');
    });

    it('should display error when there is no connectivity', () => {
        cy.route({
            method: 'GET',
            url: '/locale/filter/sao*',
            response: {},
            status: 500
        }).as('filterLocalesError');

        cy.get('input')
            .clear()
            .type('sao')
            .wait('@filterLocalesError');

        cy.get('[data-cy="apiErrors"]').should('exist');
    });

    it('should hide error after some time', () => {
        cy.clock();
        cy.tick(10000);
        cy.get('[data-cy="apiErrors"]').should('not.exist');
    });

    it('should autocomplete', () => {
        cy.route({
            method: 'GET',
            url: '/locale/filter/sao*',
            response: 'fixture:locales.json'
        }).as('filterLocales');

        cy.get('input')
            .clear()
            .type('sao')
            .wait('@filterLocales');

        cy.get('mat-option').should('have.length', 1);
        cy.get('mat-option')
            .contains('São Paulo')
            .should('exist');
    });

    it('should be able to select locale from autocomplete', () => {
        cy.route({
            method: 'GET',
            url: '/weather/locale/3477',
            response: 'fixture:weather.json'
        }).as('weatherData');

        cy.get('mat-option')
            .contains('São Paulo')
            .should('exist')
            .click()
            .wait('@weatherData');
    });

    it('should display weather data from selected locale', () => {
        cy.get('.weather-card').should('have.length', 2);
    });
});
