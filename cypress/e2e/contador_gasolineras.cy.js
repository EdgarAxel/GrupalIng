describe('Contador de gasolineras', () => {

  it('muestra el número de gasolineras cargadas', () => {

    cy.visit('/');

    cy.get('[data-testid="station-counter"]', {
      timeout: 20000
    }).should('be.visible');

  });

});