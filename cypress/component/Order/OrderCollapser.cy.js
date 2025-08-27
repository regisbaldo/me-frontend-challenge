import OrderCollapser from '@/components/Order/OrderCollapser.vue'

describe('<OrderCollapser />', () => {
  it('renders with the provided text', () => {
    cy.mount(OrderCollapser, {
      props: {
        text: 'Addresses'
      }
    })

    cy.get('.collapser-header').should('be.visible')
    cy.get('.collapser-header .text').should('contain', 'Addresses')
  })

  it('is open by default', () => {
    cy.mount(OrderCollapser, {
      props: {
        text: 'Addresses'
      },
      slots: {
        default: '<div class="content-for-test">Content here</div>'
      }
    })

    cy.get('.collapser-body').should('be.visible')
    cy.get('.content-for-test').should('be.visible')
    cy.get('.collapser-header').should('have.attr', 'aria-expanded', 'true')
    cy.get('.icon').should('have.class', 'rotate')
  })

  it('toggles content visibility when header is clicked', () => {
    cy.mount(OrderCollapser, {
      props: {
        text: 'Addresses'
      },
      slots: {
        default: '<div class="content-for-test">Content here</div>'
      }
    })

    cy.get('.content-for-test').should('be.visible')

    cy.get('.collapser-header').click()
    cy.get('.collapser-body').should('not.be.visible')
    cy.get('.collapser-header').should('have.attr', 'aria-expanded', 'false')
    cy.get('.icon').should('not.have.class', 'rotate')

    cy.get('.collapser-header').click()
    cy.get('.collapser-body').should('be.visible')
    cy.get('.content-for-test').should('be.visible')
    cy.get('.collapser-header').should('have.attr', 'aria-expanded', 'true')
    cy.get('.icon').should('have.class', 'rotate')
  })

  it('renders slot content correctly', () => {
    cy.mount(OrderCollapser, {
      props: {
        text: 'Addresses'
      },
      slots: {
        default: `
          <div class="content-for-test">
            <h2>Test Heading</h2>
            <p>Test paragraph content</p>
          </div>
        `
      }
    })

    cy.get('.content-for-test').should('be.visible')
    cy.get('.content-for-test h2').should('contain', 'Test Heading')
    cy.get('.content-for-test p').should('contain', 'Test paragraph content')
  })

  it('has proper styling for header', () => {
    cy.mount(OrderCollapser, {
      props: {
        text: 'Addresses'
      }
    })

    cy.get('.collapser-header')
      .should('have.css', 'display', 'flex')
      .should('have.css', 'align-items', 'center')
      .should('have.css', 'cursor', 'pointer')
      .should('have.css', 'background', 'none')
      .should('have.css', 'border', 'none')
  })
})
