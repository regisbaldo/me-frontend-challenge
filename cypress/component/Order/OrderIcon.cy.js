import OrderIcon from '@/components/Order/OrderIcon.vue'

describe('<OrderIcon />', () => {
  it('renders with default props', () => {
    cy.mount(OrderIcon, {
      props: {
        name: 'circle-info'
      }
    })

    cy.get('.order-icon-container').should('exist')
    cy.get('.order-icon-container')
      .should('have.attr', 'width', '16')
      .should('have.attr', 'height', '16')
      .should('have.attr', 'viewBox', '0 0 16 16')
  })

  it('applies custom size', () => {
    const customSize = 24
    cy.mount(OrderIcon, {
      props: {
        name: 'circle-info',
        size: customSize
      }
    })

    cy.get('.order-icon-container')
      .should('have.attr', 'width', customSize.toString())
      .should('have.attr', 'height', customSize.toString())
  })

  it('applies custom viewBox', () => {
    const customViewBox = '0 0 24 24'
    cy.mount(OrderIcon, {
      props: {
        name: 'circle-info',
        viewBox: customViewBox
      }
    })

    cy.get('.order-icon-container').should('have.attr', 'viewBox', customViewBox)
  })

  it('applies custom color', () => {
    const customColor = '#1052E0'
    cy.mount(OrderIcon, {
      props: {
        name: 'circle-info',
        color: customColor
      }
    })

    cy.get('path').should('have.attr', 'fill', customColor)
  })

  it('loads SVG path data correctly', () => {
    cy.mount(OrderIcon, {
      props: {
        name: 'circle-info'
      }
    })

    cy.get('path').should('exist').should('have.attr', 'd').and('not.be.empty')
  })

  it('has flex-shrink: 0 to maintain size', () => {
    cy.mount(OrderIcon, {
      props: {
        name: 'circle-info'
      }
    })

    cy.get('.order-icon-container').should(($el) => {
      const styles = window.getComputedStyle($el[0])
      expect(styles.flexShrink).to.equal('0')
    })
  })

  it('handles non-existent icon gracefully', () => {
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.mount(OrderIcon, {
      props: {
        name: 'non-existent-icon'
      }
    })

    cy.get('.order-icon-container').should('exist')
    cy.get('path').should('have.attr', 'd', '')
  })
})
