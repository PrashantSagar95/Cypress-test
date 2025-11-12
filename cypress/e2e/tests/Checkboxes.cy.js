describe("Checkboxes", ()=>{
    it('checking boxes', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get("input[type='checkbox']").should('be.visible')

        cy.get('input[type="checkbox"]').check().should('be.checked')

        cy.get("input[type='checkbox']").uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").last().check().should('be.checked')
        // cy.get("input[value='option1']").check().should('be.checked')
        // cy.get("#checkBoxOption1").check().should('be.checked')
        // cy.get("#checkBoxOption2").check().should('be.checked')
        // cy.get("#checkBoxOption3").check().should('be.checked')

        // cy.get("#checkBoxOption1").uncheck().should('not.be.checked')
        // cy.get("#checkBoxOption2").uncheck().should('not.be.checked')
        // cy.get("#checkBoxOption3").uncheck().should('not.be.checked')
        //  cy.get("#checkBoxOption1").check().should('be.checked')
    })
})