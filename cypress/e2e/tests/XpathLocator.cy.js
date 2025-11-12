// import cypress = require("cypress")
// const {it} = require("mocha")
// describe('XpathLocator', ()=>{
//     it('find number of products', ()=>{
//         cy.visit('http://www.automationpractice.pl/index.php')

//         cy.xpath('//ul[@id=homefeatured]/li').should('have.length',6)
//     })
// })

describe('XpathLocator', ()=>{
    it('find number of products', ()=>{
        cy.visit('http://www.automationpractice.pl/index.php')

        cy.xpath('//a[@title="Women"]').click()
       
        cy.xpath('//ul[contains(@class, "product_list")]/li').should('have.length', 7)
    })
})

// describe('XpathLocator', () => {
//   it('find number of products after clicking Women', () => {
//     cy.visit('http://www.automationpractice.pl/index.php')

//     // Correct XPath syntax with quotes
//     cy.xpath('//a[@title="Women"]').click()

//     // Correct CSS selector for the product list
//     cy.get('.product_list > li').should('have.length', 7)
//   })
// })
