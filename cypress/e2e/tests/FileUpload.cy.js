 import 'cypress-file-upload';

describe("File Upload methods", ()=>{
    it.skip('FileUpload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#file-upload").attachFile('Shivam.pdf')
        cy.get("#file-submit").click()
        cy.wait(4000)
        cy.get(".example").should('be.visible','File Uploaded!')
    })

    it.skip('File Upload- Rename', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#file-upload").attachFile({filePath:'Shivam.pdf', fileName:'Resume.pdf'})
        cy.get("#file-submit").click()
        cy.wait(4000)
        cy.get(".example").should('be.visible','File Uploaded!')
    })

    it.skip('Drag and Drop file', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('Shivam.pdf', {subjectType: 'drag-n-drop'})
        cy.get('#drag-drop-upload').contains('Shivam.pdf')
    })

    it.skip('Multiple files upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get("#filesToUpload").attachFile(['NISHANT.pdf', 'Shivam.pdf'])
        cy.wait(4000)
        // cy.get("filesToUpload").should('contain', "Files You Selected:")
    })

    it('Shadow Dom file upload', ()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('Shivam.pdf')
        cy.wait(4000)
        cy.get(".smart-item-name", {includeShadowDom:true}).should('be.visible', "Shivam.pdf")
    })
})