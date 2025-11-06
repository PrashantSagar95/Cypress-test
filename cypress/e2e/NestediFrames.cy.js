describe('Multiple Iframes Handling', () => {

  it('Type text in multiple frames easily', () => {
    cy.visit('https://ui.vision/demo/webtest/frames/')

    // Frame 1
    cy.getIframeBody('frame[src="frame_1.html"]')
      .find('input[name="mytext1"]')
      .type('Hello Frame 1')

    // Frame 2
    cy.getIframeBody('frame[src="frame_2.html"]')
      .find('input[name="mytext2"]')
      .type('Hello Frame 2')

    // Frame 3
    cy.getIframeBody('frame[src="frame_3.html"]')
      .find('input[name="mytext3"]')
      .type('I love automation')

      cy.getIframeBody('frame[src="frame_4.html"]')
      .find("input[name='mytext4']")
      .type("understood iframes")

    cy.getIframeBody('frame[src="frame_3.html"]')

      .find('span[class="M7eMe"]').should('contain', 'start')
  })
})
