describe('Order Flow', () => {
  it('should load order data successfully', () => {
    cy.intercept('GET', '**/orders/*', {
      fixture: 'order.json',
        headers: {
          'access-control-allow-origin': '*'
      }
    }).as('getOrder')

    cy.visit('/')

    cy.wait('@getOrder')

    cy.get('[data-testid="buyer-name"]').should('contain', 'MTP West Buyer')
    cy.get('[data-testid="addresses-section"]').should('exist')
    cy.get('[data-testid="loading-spinner"]').should('not.exist')
  })

  it('should handle error and retry successfully', () => {
    cy.intercept('GET','**/orders/*', {
      statusCode: 500,
      body: { error: 'Server Error' }
    })

    cy.visit('/')

    cy.get('[data-testid="error-page"]').should('be.visible')

    cy.intercept('GET', '**/orders/*', {
      fixture: 'order.json',
      headers: {
        'access-control-allow-origin': '*'
      }
    })

    cy.get('[data-testid="retry-button"]').click()

    cy.get('[data-testid="buyer-name"]').should('contain', 'MTP West Buyer')
    cy.get('[data-testid="error-message"]').should('not.exist')
  })
})
