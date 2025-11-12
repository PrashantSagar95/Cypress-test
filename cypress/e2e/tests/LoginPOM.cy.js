import Login from "../../PageObjects/LoginPage"

describe('Page object model', ()=>{
    //General approach
    it('Login', ()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get("#username").type('student')
        cy.get("#password").type('Password123')
        cy.get("#submit").click()
        cy.get(".post-title").should('have.text', "Logged In Successfully")
    })

    //Using Page object model
    it('Login', ()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        
        const ln = new Login;

        ln.setUserName('student')
        ln.setPassword('Password123')
        ln.submit()
        ln.verifyLogin()
        ln.logout()
    })
    //Using Fixture Page object model
    it.only('Login', ()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.fixture('JsonData2').then((data)=>{
            cy.log(data.username)

            const ln = new Login;
    
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.submit()
            ln.verifyLogin()
            ln.logout()
        })
    })
})