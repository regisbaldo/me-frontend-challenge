import NotFoundError from '@/components/Order/NotFoundError.vue'

describe('<NotFoundError />', () => {
  it('renders correctly', () => {
    cy.mount(NotFoundError)

    cy.get('[data-testid="error-page"]').should('be.visible')
    cy.contains('Ops, order not found').should('be.visible')
    cy.contains('Perhaps you can try to refresh the page.').should('be.visible')
    cy.get('[data-testid="retry-button"]').should('be.visible').and('contain', 'Retry')
  })

  it('emits "refresh" event when retry button is clicked', () => {
    const onRefresh = cy.spy().as('refreshSpy')

    cy.mount(NotFoundError, {
      props: {
        onRefresh
      }
    })

    cy.get('[data-testid="retry-button"]').click()

    cy.get('@refreshSpy').should('have.been.called')
  })

  it('has fixed positioning with correct z-index', () => {
    cy.mount(NotFoundError)

    cy.get('[data-testid="error-page"]')
      .should('have.css', 'position', 'fixed')
      .should('have.css', 'top', '0px')
      .should('have.css', 'left', '0px')
      .should('have.css', 'right', '0px')
      .should('have.css', 'bottom', '0px')
      .should('have.css', 'z-index', '10')
  })

  it('has centered content', () => {
    cy.mount(NotFoundError)

    cy.get('[data-testid="error-page"]')
      .should('have.css', 'display', 'flex')
      .should('have.css', 'flex-direction', 'column')
      .should('have.css', 'justify-content', 'center')
      .should('have.css', 'align-items', 'center')
  })

  it('has proper styling for content wrapper', () => {
    cy.mount(NotFoundError)

    cy.get('.wrapper')
      .should('have.css', 'display', 'flex')
      .should('have.css', 'flex-direction', 'column')
      .should('have.css', 'align-items', 'center')
      .should('have.css', 'text-align', 'center')
      .should('have.css', 'border-radius', '8px')
      .should('have.css', 'padding', '40px')
  })

  it('applies correct typography styles to title and subtitle', () => {
    cy.mount(NotFoundError)

    cy.get('.title').should('have.css', 'text-transform', 'uppercase')

    cy.get('.subtitle').should('have.css', 'max-width', '160px')
  })
})
