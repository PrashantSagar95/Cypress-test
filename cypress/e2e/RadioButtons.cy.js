describe("Radio button", ()=>{
    it('checking buttong', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //visiblity of radio buttons
        cy.get("input.radioButton").should('be.visible')
        
        //checking radio buttons

        cy.get("input[value='radio1']").check().should('be.checked')
        cy.get("input[value='radio2']").should('not.be.checked')
        cy.get("input[value='radio3']").should('not.be.checked')
        cy.get("input[value='radio2']").check().should('be.checked')
        cy.get("input[value='radio1']").should('not.be.checked')
        cy.get("input[value='radio3']").should('not.be.checked')
        cy.get("input[value='radio3']").check().should('be.checked')
        cy.get("input[value='radio1']").should('not.be.checked')
        cy.get("input[value='radio2']").should('not.be.checked')
    })
})