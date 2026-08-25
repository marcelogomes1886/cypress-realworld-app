describe('Login com sucesso', () => {
  it('Deve fazer login com usuário válido', () => {
    cy.visit('/signin')
    cy.get('#username').type('testuser@example.com')
    cy.get('#password').type('Test@123456')
    cy.get('[data-test="signin-submit"]').click()
    cy.url().should('include', "http://localhost:3000/")
  })

  it('Tentar fazer login com credenciais inválidas', () => {
    cy.visit('/signin')
    cy.get('#username').type('usuarioinvalido@example.com')
    cy.get('#password').type('senhaerrada123')
    cy.get('[data-test="signin-submit"]').click()
    cy.get("[role='alert']").should('be.visible')
})

})