describe('Handling iFrames', ()=>{
    it.skip('Approach1', ()=>{
        const iFrames = cy.visit('https://ui.vision/demo/webtest/frames/')
        cy.xpath("//input[@name='mytext1']")
        .its('0.contentDocument.body').should('be.visible')
            .then(cy.wrap)

        
        iFrames.clear().type('Welcome')
    })

    it.skip('approach2', ()=>{
     const iframe =   cy.visit('https://ui.vision/demo/webtest/frames/')
       cy.get('frame[src="frame_1.html"]')
       .its('0.contentDocument.body').should('be.visible')
        .then(cy.wrap)

        iframe.type('welcome')
    })


    
 

    it.skip('approach4', ()=>{
        cy.visit("https://demo.automationtesting.in/Frames.html")
            cy.get('#singleframe')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .find("input[type='text']")
            .type('welcome')
        
    })
    it('approach3', ()=>{
        cy.visit("https://demo.automationtesting.in/Frames.html")
        cy.frameLoaded('#singleframe')
        cy.iframe('#singleframe')
        .find("input[type='text']")
            .type('welcome')
           })
})