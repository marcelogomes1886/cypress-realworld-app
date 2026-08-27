describe('Login Tests', () => {

  const selectorsList = {
    usernameField: "[data-test='signin-username']",
    passwordField: "[data-test='signin-password']",
    loginButton: "[data-test='signin-submit']",
    tabList: "[data-test='nav-transaction-tabs']",
    wrongCredentialAlert: "[role='alert']",
  }

  it('Deve fazer login com usuário válido', () => {
    cy.visit('/signin')
    cy.get(selectorsList.usernameField).type('testuser@example.com')
    cy.get(selectorsList.passwordField).type('Test@123456')
    cy.get(selectorsList.loginButton).click()
    cy.url().should('include', 'localhost:3000')
    cy.get(selectorsList.tabList).should('be.visible')
  })

  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('/signin')
    cy.get(selectorsList.usernameField).type('usuarioinvalido@example.com')
    cy.get(selectorsList.passwordField).type('senhaerrada123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert).should('be.visible')
  })

})