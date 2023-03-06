import '@testing-library/cypress/add-commands'
import { faker } from '@faker-js/faker'
require('@cypress/xpath');

let randomFirstName = faker.name.firstName();
let randomLastName = faker.name.lastName();
let randomDayOfBirth = Math.floor(Math.random() * 28 + 1);
let randomMonthBirth = faker.date.month();
let randomYearBirth = Math.floor(Math.random() * 90 + 1913);
let randomEmail = faker.internet.email();
let randomCompanyName = faker.company.name();
let randomPassword = faker.internet.password();
let adult1FirstName = faker.name.firstName();
let adult1LastName = faker.name.lastName();
let adult2FirstName = faker.name.firstName();
let adult2LastName = faker.name.lastName();
let adult3FirstName = faker.name.firstName();
let adult3LastName = faker.name.lastName();
let child1FirstName = faker.name.firstName();
let child1LastName = faker.name.lastName();
let child2FirstName = faker.name.firstName();
let child2LastName = faker.name.lastName();

Cypress.Commands.add('acessarLoginCustomer', () => {
    cy.get('#ACCOUNT').click();
    cy.findByText("Customer Login").should("be.visible").click();
});

Cypress.Commands.add('acessarLoginAgent', () => {
    cy.get('#ACCOUNT').click();
    cy.get('.dropdown-item.b2b_agents.waves-effect').should($a => {
        expect($a.attr('href'), 'href').to.equal('https://phptravels.net/login')
        expect($a.attr('target'), 'target').to.equal('_blank')
        $a.attr('target', '_self')
      })
      .contains('Agents Login').click() 
});

Cypress.Commands.add('efetuarLoginCustomer', () => {
    cy.get('form > :nth-child(1) > .form-group > .form-control').type('customer-email@test.com', { force:true });
    cy.get('form > :nth-child(2) > .form-group > .form-control').type('Customer12345', { force:true });
    cy.get('.btn-box > .btn-default').click({ force:true });
});

Cypress.Commands.add('efetuarLoginAgent', () => {
    cy.get('form > :nth-child(1) > .form-group > .form-control').type('agent-email@test.com', { force:true });
    cy.get('form > :nth-child(2) > .form-group > .form-control').type('Agent12345', { force:true });
    cy.get('.btn-box > .btn-default').click({ force:true });
});

Cypress.Commands.add('informarDadosRegistro', () => {
    cy.get('#gender-male').click();
	cy.get('#FirstName').type(randomFirstName);
	cy.get('#LastName').type(randomLastName);
	cy.get('[name="DateOfBirthDay"]').select(randomDayOfBirth);
	cy.get('[name="DateOfBirthMonth"]').select(randomMonthBirth);
	cy.get('[name="DateOfBirthYear"]').select(randomYearBirth.toString());
	cy.get('#Email').type(randomEmail);
	cy.get('#Company').type(randomCompanyName);
	cy.get('#Password').type(randomPassword);
	cy.get('#ConfirmPassword').type(randomPassword);
});

Cypress.Commands.add('validarDatasInformadas', () => {
    cy.get('[name="DateOfBirthDay"]').should('contain', randomDayOfBirth);
	cy.get('[name="DateOfBirthMonth"]').should('contain', randomMonthBirth);
	cy.get('[name="DateOfBirthYear"]').should('contain', randomYearBirth);
});

Cypress.Commands.add('validarRegistroSucesso', () => {
    cy.get('#register-button').click();
	cy.get('.page-title').should('contain', 'Register');
	cy.get('.result').should('contain', 'Your registration completed');
	cy.get('.buttons > .button-1').click();
});

Cypress.Commands.add('validarMensagensErroRegistro', () => {
    cy.get('#register-button').click();
	cy.get('#FirstName-error').should('contain', 'First name is required.');
	cy.get('#LastName-error').should('contain', 'Last name is required.');
	cy.get('#Email-error').should('contain', 'Email is required.');
	cy.get('#Password-error').should('contain', 'Password is required.');
	cy.get('#ConfirmPassword-error').should('contain', 'Password is required.');

	cy.get('#Email').type('email');
	cy.get('#Email-error').should('contain', 'Wrong email');

	cy.get('#Password').type('123');
	cy.get('#Password-error')
		.should('contain', 'Password must meet the following rules: ')
		.and('contain', 'must have at least 6 characters');
	cy.get('#ConfirmPassword').type('1234');
	cy.get('#ConfirmPassword-error').should('contain', 'The password and confirmation password do not match.');
});

Cypress.Commands.add('loginCustomerSucesso', () => {
    cy.visit('https://phptravels.net/');
    cy.get('#ACCOUNT').click();
    cy.findByText("Customer Login").should("be.visible").click();
    cy.get('form > :nth-child(1) > .form-group > .form-control').type('customer-email@test.com', { force:true });
    cy.get('form > :nth-child(2) > .form-group > .form-control').type('Customer12345', { force:true });
    cy.get('.btn-box > .btn-default').click({ force:true });
});

Cypress.Commands.add('efetuarPesquisaReserva', () => {
    cy.get('#select2-hotels_city-container')
    .click({force:true})
    cy.get('.select2-search__field').type('Dubai{enter}', {force:true});
    cy.findByText('Dubai,United Arab Emirates').click();
    cy.get('.input-box > :nth-child(2) > .dropdown > .dropdown-toggle').click({force:true});
    cy.get('#nationality').select('Italy', {force:true});
    cy.get(':nth-child(2) > .qty-box > .qtyBtn > .qtyInc').click({force:true});
    cy.get(':nth-child(3) > .qty-box > .qtyBtn > .qtyInc').dblclick({force:true});
    cy.get('#ages1').select('3', {force:true});
    cy.get('#ages2').select('3', {force:true});
    cy.get('#submit').click({force:true});
    cy.get(':nth-child(5) > .custom-checkbox > .custom-control-label').click({force:true});
    cy.wait(2000)
    cy.xpath('//*[@id="jumeirah beach hotel"]/div/div[1]').click();
    cy.xpath('//*[@id="availability"]/div[3]/div[2]/div').should('contain', 'Adults 4', '');
    cy.xpath('//*[@id="availability"]/div[3]/div[2]/div').should('contain', 'Child 2');
    cy.xpath('//*[@id="availability"]/div[3]/div[2]/div/div[2]/form/div/div[5]/div/button').click({force:true});
});

Cypress.Commands.add('efetuarReserva', () => {
    cy.xpath('//*[@id="fadein"]/div[5]/form/section/div/div/div[1]/div[2]/div[2]/div[1]/div[2]/div/div[2]/input').type(adult1FirstName, {force:true});
    cy.xpath('//*[@id="fadein"]/div[5]/form/section/div/div/div[1]/div[2]/div[2]/div[1]/div[2]/div/div[3]/input').type(adult1LastName, {force:true});
    cy.xpath('//*[@id="fadein"]/div[5]/form/section/div/div/div[1]/div[2]/div[2]/div[2]/div[2]/div/div[2]/input').type(adult2FirstName, {force:true});
    cy.xpath('//*[@id="fadein"]/div[5]/form/section/div/div/div[1]/div[2]/div[2]/div[2]/div[2]/div/div[3]/input').type(adult2LastName, {force:true});
    cy.xpath('//*[@id="fadein"]/div[5]/form/section/div/div/div[1]/div[2]/div[2]/div[3]/div[2]/div/div[2]/input').type(adult3FirstName, {force:true});
    cy.xpath('//*[@id="fadein"]/div[5]/form/section/div/div/div[1]/div[2]/div[2]/div[3]/div[2]/div/div[3]/input').type(adult3LastName, {force:true});
    cy.xpath('//*[@id="fadein"]/div[5]/form/section/div/div/div[1]/div[2]/div[2]/div[4]/div[2]/div/div[2]/input').type(child1FirstName, {force:true});
    cy.xpath('//*[@id="fadein"]/div[5]/form/section/div/div/div[1]/div[2]/div[2]/div[4]/div[2]/div/div[3]/input').type(child1LastName, {force:true});
    cy.xpath('//*[@id="fadein"]/div[5]/form/section/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[2]/input').type(child2FirstName, {force:true});
    cy.xpath('//*[@id="fadein"]/div[5]/form/section/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[3]/input').type(child2LastName, {force:true});
    cy.xpath('//*[@id="gateway_pay-later"]').click();
    cy.xpath('//*[@id="agreechb"]').click({force:true});
    cy.findByText('Confirm Booking').click();
});

Cypress.Commands.add('validarReservaEfetuada', () => {
    cy.get('.infobox')
        .should('contain', 'Your booking status is ( ')
        .and('contain', 'Pending')
        .and('contain', ' ) and payment status is ')
        .and('contain', 'pay later')
        .and('contain', ' ( Unpaid )');
    cy.xpath('//*[@id="fadein"]/header/div/div/div/div/div/div[2]/div/div[2]/div[3]').click();
    cy.xpath('//*[@id="fadein"]/header/div/div/div/div/div/div[2]/div/div[2]/div[3]/div/ul/li[2]/a').click();
    cy.xpath('//*[@id="fadein"]/section[1]/div/div[2]/div/div[1]/div/div/div[2]/div').should('not.be.empty');
});