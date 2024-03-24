// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addName',(name)=>{

    cy.get('#name').type(name)

})

Cypress.Commands.add('addCountry',(country)=>{

    cy.get('#country').type(country)

})

Cypress.Commands.add('addCity',(city)=>{

    cy.get('#city').type(city)

})

Cypress.Commands.add('addCreditCard',(card)=>{

    cy.get('#card').type(card)

})

Cypress.Commands.add('addMonth',(month)=>{

    cy.get('#month').type(month)

})

Cypress.Commands.add('addYear',(year)=>{

    cy.get('#year').type(year)

})