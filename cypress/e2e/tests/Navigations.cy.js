describe('Go & Reload', ()=>{
    it('Navigations', ()=>{
        cy.visit('https://practicetestautomation.com/')
        cy.title().should('contain', "Practice Test Automation | Learn Selenium WebDriver")
        cy.get("li>a[href='https://practicetestautomation.com/courses/']").click()
        cy.get(".post-title").should('have.text', "Courses")

        cy.go(-1)
        cy.go(1)
        cy.go("back")
        cy.go("forward")
    })
})