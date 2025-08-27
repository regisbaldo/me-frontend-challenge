import OrderItemInfo from '@/components/Order/OrderItemInfo.vue'

describe('<OrderItemInfo />', () => {
  it('renders with default props', () => {
    cy.mount(OrderItemInfo)

    cy.get('.item-info-container').should('exist')
    cy.get('.text').should('contain', '-')
    cy.get('order-icon').should('not.exist')
  })

  it('renders with custom text', () => {
    const customText = 'Custom information text'
    cy.mount(OrderItemInfo, {
      props: {
        text: customText
      }
    })

    cy.get('.text').should('contain', customText)
  })

  it('renders with icon when provided', () => {
    cy.mount(OrderItemInfo, {
      props: {
        icon: 'circle-info',
        text: 'Info with icon'
      }
    })

    cy.get('svg').should('exist')
    cy.get('.order-icon-container').should('exist')

    cy.get('.text').should('contain', 'Info with icon')
  })

  it('renders as plain text by default', () => {
    cy.mount(OrderItemInfo, {
      props: {
        text: 'Plain text'
      }
    })

    cy.get('span.text').should('exist')
    cy.get('a.text').should('not.exist')
  })

  it('renders as email link when type is email', () => {
    const email = 'test@example.com'
    cy.mount(OrderItemInfo, {
      props: {
        text: email,
        type: 'email'
      }
    })

    cy.get('a.text.link')
      .should('exist')
      .should('have.attr', 'href', `mailto:${email}`)
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer')
      .should('contain', email)
  })

  it('renders as phone link when type is phone', () => {
    const phone = '+1 234 567 8900'
    cy.mount(OrderItemInfo, {
      props: {
        text: phone,
        type: 'phone'
      }
    })

    cy.get('a.text.link')
      .should('exist')
      .should('have.attr', 'href', `tel:${phone}`)
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer')
      .should('contain', phone)
  })
})
