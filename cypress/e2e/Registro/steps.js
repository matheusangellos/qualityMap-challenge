import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^que eu acesso o site do nopCommerce$/, () => {
	cy.visit('https://demo.nopcommerce.com/');
});

When(/^clico no botão "([^"]*)"$/, () => {
	cy.get('.ico-register').click();
});

When(/^informo todos os dados necessários$/, () => {
	cy.informarDadosRegistro();	
});

Then(/^a data selecionada deve corresponder ao input desejado e finalizo o registro$/, () => {
	cy.validarDatasInformadas();
	
});

Then(/^devo ter sucesso no meu registro$/, () => {
	cy.validarRegistroSucesso();
});

Then(/^cada campo obrigatório deve conter uma mensagem informando seu requisito$/, () => {
	cy.validarMensagensErroRegistro();
});
