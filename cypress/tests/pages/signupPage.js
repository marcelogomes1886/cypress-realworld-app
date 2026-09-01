class SignUpPage {
  selectorsList() {
    const selectors = {
      fields: {
        firstNameField: "#firstName",
        lastNameField: "#lastName",
        usernameField: "#username",
        passwordField: "#password",
        confirmPasswordField: "#confirmPassword"
      },

      requireMsg: {
        firstNameRequiredMsg: "#firstName-helper-text",
        lastNameRequiredMsg: "#lastName-helper-text",
        usernameRequiredMsg: "#username-helper-text",
        passwordRequiredMsg: "#password-helper-text",
        confirmPaswordRequireMsg: "#confirmPassword-helper-text"
      },

      buttons: {
        signUpButton: ".SignUpForm-submit",
      },

      validations: {
        signUpForm: ".SignUpForm-paper"
      }
    }

    return selectors
  }

  
  acessSignUpPage() {
    cy.visit('http://localhost:3000/signup')
    cy.get(this.selectorsList().validations.signUpForm)
  }

  
  focusBlurField(field) {
    cy.get(field).focus().blur()
  }

  registerNewUser(firstName, lastName, username, password, confirmPassword) {
    firstName
      ? cy.get(this.selectorsList().fields.firstNameField).type(firstName)
      : this.focusBlurField(this.selectorsList().fields.firstNameField)

    lastName
      ? cy.get(this.selectorsList().fields.lastNameField).type(lastName)
      : this.focusBlurField(this.selectorsList().fields.lastNameField)

    username
      ? cy.get(this.selectorsList().fields.usernameField).type(username)
      : this.focusBlurField(this.selectorsList().fields.usernameField)

    password
      ? cy.get(this.selectorsList().fields.passwordField).type(password)
      : this.focusBlurField(this.selectorsList().fields.passwordField)

    confirmPassword
      ? cy.get(this.selectorsList().fields.confirmPasswordField).type(confirmPassword)
      : this.focusBlurField(this.selectorsList().fields.confirmPasswordField)
  }

  
  clickSignUpButton() {
    cy.get(this.selectorsList().buttons.signUpButton).click()
  }

  
  checkRequireMsg(errorMsg) {
    cy.get(this.selectorsList().requireMsg[errorMsg])
  }

  checkSignUpButton() {
    cy.get(this.selectorsList().buttons.signUpButton).should('be.disabled')
  }

  checkUrl(url) {
    cy.url().should('eq', `${url}`)
  }

  
  completeRegistration(firstName,lastName,username, password, confirmPassword){
    this.acessSignUpPage()
    this.registerNewUser(firstName,lastName,username,password,confirmPassword)
    this.clickSignUpButton()
    //this.checkUrl('http://localhost:3000/signin')
  }

}

export default SignUpPage;