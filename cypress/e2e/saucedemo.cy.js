describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#user-name').should('have.value' , 'standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#password').should('have.value' , 'secret_sauce')
    cy.get('#login-button').click()
  })
})