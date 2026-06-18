describe('Sección About', () => {
  it('muestra el número de equipo, los integrantes y sus aportaciones', () => {
    cy.visit('/about')

    cy.contains('Acerca de nosotros').should('be.visible')
    cy.contains('Somos el equipo nº 02').should('be.visible')

    cy.contains('SAUS AMORÓS').should('be.visible')
    cy.contains('CASTILLO ZARAPUZ').should('be.visible')
    cy.contains('GONZÁLEZ FERNÁNDEZ').should('be.visible')
    cy.contains('RAMOS AÍSA').should('be.visible')
    cy.contains('ALONSO CANO').should('be.visible')

    cy.contains('implementación del footer').should('be.visible')
    cy.contains('ampliación de la sección About').should('be.visible')
    cy.contains('revisión del Header').should('be.visible')
    cy.contains('pendiente de registrar').should('be.visible')
  })
})