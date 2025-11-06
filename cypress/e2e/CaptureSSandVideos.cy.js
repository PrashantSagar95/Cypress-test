describe("Screenshot Videos", ()=>{
    it('Capture Screenshot Videos', ()=>{
        cy.visit("https://practicetestautomation.com/")
        // cy.screenshot()
        // cy.get("img[alt='Dmitry Shyshkin, your Selenium WebDriver instructor']").screenshot('imagge')

        cy.get("#menu-item-20").click()
        cy.get(".post-title").should('have.text', "hello")
    })
})