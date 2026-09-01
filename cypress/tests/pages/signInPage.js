class SignInPage {
  selectorsList() {
    const selectors = {
      fields: {
        usernameField: "#username",
        passwordField: "#password"
      },

      requireMsg: {
        usernamRequiredMsg: "#username-helper-text",
        passwordRequireMsg: "#password-helper-text",
        failedLoginMessage: ".MuiAlert-message"
      },

      buttons: {
        signInButton: ".SignInForm-submit"
      },

      validations: {
        signInForm: ".SignInForm-paper"
      }
    }

    return selectors
  }

  
  accessSignInPage() {
    cy.visit('http://localhost:3000/signin')
    cy.get(this.selectorsList().validations.signInForm)
  }

  
  focusBlurField(field) {
    cy.get(field).focus().blur()
  }

  fillLoginForm(username, password) {
    username
      ? cy.get(this.selectorsList().fields.usernameField).type(username)
      : this.focusBlurField(this.selectorsList().fields.usernameField)

    password
      ? cy.get(this.selectorsList().fields.passwordField).type(password)
      : this.focusBlurField(this.selectorsList().fields.passwordField)
  }

  
  clickSignInButton() {
    cy.get(this.selectorsList().buttons.signInButton).click()
  }

  
  checkSignInButton() {
    cy.get(this.selectorsList().buttons.signInButton).should('be.disabled')
  }

  checkRequireMsg(errorMsg) {
    cy.get(this.selectorsList().requireMsg[errorMsg])
  }

  
  logingIn(username, password) {
    this.accessSignInPage()
    this.fillLoginForm(username, password)
    this.clickSignInButton()
  }
}

export default SignInPage;