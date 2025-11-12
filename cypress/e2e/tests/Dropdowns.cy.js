describe("Handle Dropdowns", ()=>{
    it.skip('Dropdown with select', ()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/"
        )
        cy.get("#dropdown-class-example").select('option3').should('have.value', 'option3')
    })
})

describe("Handle Dropdowns", ()=>{
    it.skip('Dropdown without select', ()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/"
        )
        cy.get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type('India').type('{enter}')

                cy.get("#select2-billing_country-container").should('have.text', 'India')
})
})

describe('Handle Dropdowns', ()=>{
    it.skip('Dropdowns wiht auto suggestions', ()=>{

        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-link').contains('Delhi University').click()
    })
})

describe('Dynamic Dropdowns', ()=>{
    it('Dynamic dropdowns like google', ()=>{
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('cypress automation jobs')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length', '13')

         cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text() == 'cypress automation jobs')
            {
                cy.wrap($el).click()
            }
            
           cy.get('.gLFyf').should('have.value', 'cypress automation jobs')
         })

    })
})