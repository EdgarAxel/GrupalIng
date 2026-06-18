import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const randomUser = () => ({
  username: `testuser${Date.now()}`,
  email: `test${Date.now()}@mail.com`,
  password: "Test1234!"
});

let user;

// REGISTRO

Given("el usuario navega a la página de registro", () => {
  user = randomUser();

  cy.visit("/registro");

  cy.contains("Registro de Usuario", {
    timeout: 20000
  }).should("be.visible");
});

When("completa el formulario de registro con datos válidos", () => {
  cy.get('input[name="username"]', { timeout: 20000 })
    .should("be.visible")
    .type(user.username);

  cy.get('input[name="email"]', { timeout: 20000 })
    .should("be.visible")
    .type(user.email);

  cy.get('input[name="password"]', { timeout: 20000 })
    .should("be.visible")
    .type(user.password);
});

When("envía el formulario de registro", () => {
  cy.get("form").submit();
});

Then("ve un mensaje de confirmación de registro", () => {
  cy.contains(/registrado|registro exitoso|correctamente/i, {
    timeout: 10000
  }).should("exist");
});

// LOGIN

Given("el usuario navega a la página de login", () => {
  cy.visit("/login");

  cy.contains("Iniciar Sesión", {
    timeout: 20000
  }).should("be.visible");
});

When("completa el formulario de login con credenciales válidas", () => {
  cy.get('input[name="email"]', { timeout: 20000 })
    .should("be.visible")
    .type(user.email);

  cy.get('input[name="password"]', { timeout: 20000 })
    .should("be.visible")
    .type(user.password);
});

When("envía el formulario de login", () => {
  cy.get("form").submit();
});

Then("ve un mensaje de bienvenida", () => {
  cy.contains(/bienvenido|login correcto/i, {
    timeout: 10000
  }).should("exist");
});