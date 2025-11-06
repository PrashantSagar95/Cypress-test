describe('Fixtures', () => {
  it('Data Driven Test', () => {
    cy.fixture('JsonData1').then((data) => {
      data.forEach((element) => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")

        cy.get("#username").type(element.Username)
        cy.get("#password").type(element.Password)
        cy.get("#submit").click()

        if (element.Username === "student" && element.Password === "Password123") {
          cy.get(".post-title").should("have.text", element.Expected)
        } else {
          cy.get("#error").should("have.text", element.Expected)
        }
      })
    })
  })
})
