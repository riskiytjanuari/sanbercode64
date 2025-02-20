describe('My first test', () => {
  it('Type , get and assert', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('faked@email.com')
    cy.get('.action-email').should('have.value', 'faked@email.com')

  })
})