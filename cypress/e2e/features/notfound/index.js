/*/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario navega a {string}", function (string) {
    cy.visit("/xxx")
});


Then("debería ver el texto {string}", function (string) {
    cy.contains(string).should("exist");
});
*/

/// <reference types="Cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario navega a {string}", (ruta) => {
  cy.visit(ruta);
});

Then("debería ver el texto {string}", (texto) => {
  cy.contains(texto, { timeout: 10000 }).should("be.visible");
});