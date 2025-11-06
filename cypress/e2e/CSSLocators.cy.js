// const cypress = require("cypress")

describe('CSSLocators', ()=>{
    it('CSSLocators', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('.wikipedia-search-input').type('earth')

        cy.get('.wikipedia-search-button').click()

        cy.get('.wikipedia-search-results-header').contains('Search results')
    })
})