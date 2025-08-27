import OrderAddressesSection from '@/components/Order/OrderAddressesSection.vue'
import orderData from '../../fixtures/order.json'

describe('<OrderAddressesSection />', () => {
  beforeEach(() => {
    cy.mount(OrderAddressesSection, {
      props: {
        info: orderData.addresses
      }
    })
  })

  it('renders the addresses section with correct title', () => {
    cy.get('[data-testid="addresses-section"]').should('be.visible')
    cy.contains('Addresses').should('be.visible')
  })

  it('renders the correct number of address cards', () => {
    cy.get('.addresses-section-container .card-wrapper').should('have.length', 3)
  })

  it('displays first address card with correct title and subtitle', () => {
    cy.get('.addresses-section-container .card-wrapper')
      .first()
      .within(() => {
        cy.contains('West Plant').should('be.visible')
        cy.contains('Ship to').should('be.visible')
      })
  })

  it('shows badge with code when provided (first address)', () => {
    cy.get('.addresses-section-container .card-wrapper')
      .first()
      .within(() => {
        cy.contains('#TR01').should('be.visible')
      })
  })

  it('does not show badge when code is not provided (second address)', () => {
    cy.get('.addresses-section-container .card-wrapper')
      .eq(1)
      .within(() => {
        cy.get('.order-badge').should('not.exist')
      })
  })

  it('displays correct contact information for first address', () => {
    cy.get('.addresses-section-container .card-wrapper')
      .first()
      .within(() => {
        cy.contains('1311 W Washington Blvd, Los Angeles, CA 90006, United States').should(
          'be.visible'
        )
        cy.contains('Brian Mazda Tetsuo').should('be.visible')
        cy.contains('Z01confirmations@me.com').should('be.visible')
        cy.contains('222-575-3050').should('be.visible')
      })
  })
})
