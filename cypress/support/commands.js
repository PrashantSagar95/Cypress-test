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

/// <reference types= "cypress"/>
/// <reference types= "cypress-xpath"/>

Cypress.Commands.add('getIframeBody', (Frames)=>{
    cy.get(Frames)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
})


    require('@4tw/cypress-drag-drop');
    
    import 'cypress-file-upload';

    Cypress.Commands.add('Login', (username, password)=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get("#submit").click()
    })


    Cypress.Commands.add('ClickLink', (label)=>{
        cy.get('a').contains(label).click()
        cy.get("post-title").should('have.text', "Hello")
    })