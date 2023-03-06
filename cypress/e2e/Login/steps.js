import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^que eu acesso o site do PHPTravels$/, () => {
	cy.visit('https://phptravels.net/');
});

When(/^clico no menu "Account" e em "Customer Login"$/, () => {
	cy.get('#ACCOUNT').click();
    cy.findByText("Customer Login").should("be.visible").click();
});

When(/^clico no menu "Account" e em "Agents Login"$/, () => {
	cy.get('#ACCOUNT').click();
    cy.get('.dropdown-item.b2b_agents.waves-effect').should($a => {
        expect($a.attr('href'), 'href').to.equal('https://phptravels.net/login')
        expect($a.attr('target'), 'target').to.equal('_blank')
        $a.attr('target', '_self')
      })
      .contains('Agents Login').click()    
});

When(/^informo as credenciais corretas de "Customer" e clico no botão Login$/, () => {
	cy.get('form > :nth-child(1) > .form-group > .form-control').type('customer-email@test.com', { force:true });
    cy.get('form > :nth-child(2) > .form-group > .form-control').type('Customer12345', { force:true });
    cy.get('.btn-box > .btn-default').click({ force:true });
});

When(/^informo as credenciais corretas de "Agent" e clico no botão Login$/, () => {
	cy.get('form > :nth-child(1) > .form-group > .form-control').type('agent-email@test.com', { force:true });
    cy.get('form > :nth-child(2) > .form-group > .form-control').type('Agent12345', { force:true });
    cy.get('.btn-box > .btn-default').click({ force:true });
});

Then(/^devo me logar com sucesso e ser direcionado para a área de Dashboard$/, () => {
	cy.url().should('eq', 'https://phptravels.net/account/dashboard');
    cy.get('.sidebar-menu').should("be.visible");
});


//customer-email@test.com
//Customer12345

//agent-email@test.com
//Agent12345
