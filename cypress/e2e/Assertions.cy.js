describe("Assertions demo", ()=>{
    // it('Implicit assertions', ()=>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.url().should('include', 'demo')
    //     cy.url().should('equal', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.url().should('contain', 'opensource')

    //     cy.title().should('include', 'Orange')

    //     cy.xpath("//img[@alt='company-branding']").should('be.visible')
    //     cy.xpath("//img[@alt='company-branding']").should('exist')

    //     cy.xpath("//input[@placeholder='Username']").type('Admin')
    //     cy.xpath("//input[@placeholder='Username']").should('have.value', 'Admin')
    // })

    it('Explicit Assertions', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        let expName="FirstName LastName"

        cy.get(".oxd-userdropdown-name").then((x)=>{
           let actName = x.text();
           expect(actName).to.eq(expName)

           assert.equal(actName, expName)
        })
    })

})