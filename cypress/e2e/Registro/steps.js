import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { faker } from '@faker-js/faker'


let randomFirstName = faker.name.firstName();
let randomLastName = faker.name.lastName();
let randomDayOfBirth = Math.floor(Math.random() * 28 + 1);
let randomMonthBirth = faker.date.month();
let randomYearBirth = Math.floor(Math.random() * 90 + 1913);
let randomEmail = faker.internet.email();
let randomCompanyName = faker.company.name();
let randomPassword = faker.internet.password();

Given(/^que eu acesso o site$/, () => {
	cy.visit('https://demo.nopcommerce.com/');
});

When(/^clico no botão "([^"]*)"$/, () => {
	cy.get('.ico-register').click();
});

When(/^informo todos os dados necessários$/, () => {
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

Then(/^a data selecionada deve corresponder ao input desejado e finalizo o registro$/, () => {
	cy.get('[name="DateOfBirthDay"]').should('contain', randomDayOfBirth);
	cy.get('[name="DateOfBirthMonth"]').should('contain', randomMonthBirth);
	cy.get('[name="DateOfBirthYear"]').should('contain', randomYearBirth);
	
});

Then(/^devo ter sucesso no meu registro$/, () => {
	cy.get('#register-button').click();
	cy.get('.page-title').should('contain', 'Register');
	cy.get('.result').should('contain', 'Your registration completed');
	cy.get('.buttons > .button-1').click();
});

Then(/^cada campo obrigatório deve conter uma mensagem informando seu requisito$/, () => {
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
