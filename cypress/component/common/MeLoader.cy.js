import MELoader from '@/components/common/MELoader.vue'

describe('<MELoader />', () => {
  it('renders with default size (40px)', () => {
    cy.mount(MELoader)

    cy.get('.loader').should('have.css', 'width', '40px')
    cy.get('.loader').should('have.css', 'height', '40px')
  })

  it('renders with custom size', () => {
    const customSize = 60
    cy.mount(MELoader, {
      props: {
        size: customSize
      }
    })

    cy.get('.loader').should('have.css', 'width', `${customSize}px`)
    cy.get('.loader').should('have.css', 'height', `${customSize}px`)
  })

  it('has centered layout by default', () => {
    cy.mount(MELoader)

    cy.get('.me-loader-wrapper')
      .should('have.css', 'display', 'flex')
      .should('have.css', 'justify-content', 'center')
      .should('have.css', 'align-items', 'center')
  })

  it('does not have fullscreen position by default', () => {
    cy.mount(MELoader)

    cy.get('.me-loader-wrapper')
      .should('not.have.class', 'fullscreen')
      .should('not.have.css', 'position', 'fixed')
  })

  it('has fullscreen position when fullscreen prop is true', () => {
    cy.mount(MELoader, {
      props: {
        fullscreen: true
      }
    })

    cy.get('.me-loader-wrapper').should('have.class', 'fullscreen')
  })

  it('has rotating animation', () => {
    cy.mount(MELoader)

    cy.get('.loader').should('have.css', 'animation-name', 'rotate')
  })
})
