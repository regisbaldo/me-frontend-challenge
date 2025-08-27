import OrderBadge from '@/components/Order/OrderBadge.vue'

describe('<OrderBadge />', () => {
  it('renders with the provided text', () => {
    cy.mount(OrderBadge, {
      props: {
        text: '#TR01'
      }
    })

    cy.get('.badge-wrapper').should('be.visible')
    cy.get('.text').should('contain', '#TR01')
  })

  it('handles long text appropriately', () => {
    const longText = 'This is a very long badge text that should still be displayed properly'

    cy.mount(OrderBadge, {
      props: {
        text: longText
      }
    })

    cy.get('.text').should('contain', longText)
    cy.get('.badge-wrapper').should('be.visible')
  })

  it('handles special characters in text', () => {
    const specialText = '#OHMYGOOOOOOOOOOOOOOOOOOOD'

    cy.mount(OrderBadge, {
      props: {
        text: specialText
      }
    })

    cy.get('.text').should('contain', specialText)
  })
})
