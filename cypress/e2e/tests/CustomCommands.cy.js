describe('Custom Commands', ()=>{
    // it('Custom command', ()=>{
    //     // cy.visit('https://practicetestautomation.com/practice-test-login/')

    //     cy.Login('student', 'Password123')
    //     cy.get(".post-title").should('have.text', 'Logged In Successfully')
    //     cy.get()

    // })

    it('Click custom', ()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.ClickLink('Home')
    })
})