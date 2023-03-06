import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^que eu acesso o site do PHPTravels$/, () => {
	cy.visit('https://phptravels.net/');
});

When(/^clico no menu "Account" e em "Customer Login"$/, () => {
	cy.acessarLoginCustomer();
});

When(/^clico no menu "Account" e em "Agents Login"$/, () => {
	cy.acessarLoginAgent();  
});

When(/^informo as credenciais corretas de "Customer" e clico no botão Login$/, () => {
	cy.efetuarLoginCustomer();
});

When(/^informo as credenciais corretas de "Agent" e clico no botão Login$/, () => {
	cy.efetuarLoginAgent();
});

Then(/^devo me logar com sucesso e ser direcionado para a área de Dashboard$/, () => {
	cy.url().should('eq', 'https://phptravels.net/account/dashboard');
    cy.get('.sidebar-menu').should("be.visible");
});