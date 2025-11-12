describe('Alerts', ()=>{
    it('Alerts checking', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.get("#alertbtn").click()

            cy.on('window:alert', (t)=>{
                expect(t).to.contains('Hello , share this practice page and share your knowledge')
            })
        
    })
})