
describe('Handle tables', ()=>{
    beforeEach('tables', ()=>{
        cy.visit('https://demo3x.opencartreports.com/admin/index.php?route=common/login')

        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('.btn-primary').click()
        cy.get('#menu-customer>a').click()
        cy.get('#menu-customer>ul>li:first-child').click()
    })

    it.skip('check number rows & column', ()=>{
     cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', '7')   
     cy.get('table[class="table table-bordered table-hover"]>thead>tr>td ').should('have.length', '10')   

    })


    it.skip("check cell data of specific row & column", ()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(3)>td:nth-child(3)').should('have', 'Dennis')
    })

    it('Read all the data in Rows & Columns', ()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col, index, $cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })
})