import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^que sou um usuário do tipo "([^"]*)" já cadastrado e estou logado na plataforma$/, () => {
	cy.loginCustomerSucesso();
});

When(/^clico no menu "([^"]*)"$/, () => {
	cy.findByText('Hotels').click();
});

When(/^efetuo uma pesquisa de acordo com os critérios desejados$/, () => {
	cy.efetuarPesquisaReserva();
});

Then(/^ao selecionar a opção "([^"]*)" e finalizar a reserva a mesma deve ser realizada com sucesso$/, () => {
	cy.efetuarReserva();
});

Then(/^deve constar no menu "([^"]*)"$/, () => {
	cy.validarReservaEfetuada();
});
