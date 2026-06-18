describe('Footer', () => {

  it('muestra los miembros del equipo', () => {

    cy.visit('/');

    cy.contains('Miembros del equipo:');

    cy.contains('SAUS AMORÓS');
    cy.contains('CASTILLO ZARAPUZ');
    cy.contains('RAMOS AÍSA');
    cy.contains('ALONSO CANO');
    cy.contains('GONZÁLEZ FERNÁNDE');

  });

});