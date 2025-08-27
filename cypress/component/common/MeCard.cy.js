import MeCard from '@/components/common/MeCard.vue'

describe('<MeCard />', () => {
  it('renders', () => {
    cy.mount(MeCard)
  })

  it('should has title, subtitle and slots when pass by props', () => {
    cy.mount(MeCard, {
      props: {
        title: 'some titles',
        subtitle: 'some subtitle'
      },
      slots: {
        'extra-title-info': '<span>some extra header</span>',
        body: '<span>some body</span>'
      }
    })

    cy.get('.title').should('contain.text', 'some title')
    cy.get('.subtitle').should('contain.text', 'some subtitle')
    cy.get('.title-container').should('contain.text', 'some extra header')
    cy.get('.body').should('have.text', 'some body')
  })

  it('should nott has title, subtitle and slots when not pass by props', () => {
    cy.mount(MeCard)

    cy.get('.title').should('not.exist')
    cy.get('.subtitle').should('not.exist')
    // cy.get('.subtitle').should('contain.text', 'some subtitle')
    // cy.get('.title-container').should('contain.text', 'some extra header')
    cy.get('.body').should('not.exist')
  })
})
