describe('Mouseover operations', ()=>{
    it.skip('Mouseovers', ()=>{
        cy.visit("https://www.opencart.com/")
        cy.get(".btn.btn-success.btn-xl").trigger('mouseover')
    })

    it.skip("Right-click", ()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        //approach 1
        // cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
        // cy.get(".context-menu-one.btn.btn-neutral").should('be.visible')
        // cy.get(".context-menu-item.context-menu-icon.context-menu-icon-quit").click()

        //approach 2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get(".context-menu-one.btn.btn-neutral").should('be.visible')

    })

    it.skip('Double-click', ()=>{
        cy.visit("https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick")
        cy.get('#iframeResult')
        .its("0.contentDocument.body")
        .should('not.be.empty')
        .then(cy.wrap)
        .find("button[ondblclick='myFunction()']").dblclick()

        // cy.frameLoaded("#iframeResult")
        // cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick')
        
    
    })

    it.skip('Drag and Drop using plugin', ()=>{
        cy.visit('https://demo.automationtesting.in/Static.html')
        cy.get('#angular').drag('#droparea')
        cy.get('#mongo').drag('#droparea')
        cy.get('#node').drag('#droparea')
    })

    it('Scrolling the page', ()=>{
        cy.visit('https://www.worldometers.info/geography/flags-of-the-world/')
        cy.get("img[alt='Nepal']").scrollIntoView({duration:8000})
        cy.get("img[alt='Nepal']").should('be.visible')
        cy.get("img[alt='Cuba']").scrollIntoView({duration:4000})
        cy.get("img[alt='Cuba']").should('be.visible')
        cy.get(".flex.flex-col.items-center.justify-center.gap-4.border-y.pt-12.pb-8").scrollIntoView()
    })
})