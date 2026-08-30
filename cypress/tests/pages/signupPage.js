class SignupPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[data-test='signup-first-name'] input",
            lastNameField: "[data-test='signup-last-name'] input",
            usernameField: "[data-test='signup-username'] input",
            passwordField: "[data-test='signup-password'] input",
            confirmPasswordField: "[data-test='signup-confirmPassword'] input",
            signupButton: "[data-test='signup-submit']",

            firstNameError: "[data-test='signup-first-name-error']",
            lastNameError: "[data-test='signup-last-name-error']",
            usernameError: "[data-test='signup-username-error']",
            passwordError: "[data-test='signup-password-error']",
            confirmPasswordError: "[data-test='signup-confirmPassword-error']",

            loginUsernameField: "[data-test='signin-username']"
        };

        return selectors;
    }

    accessSignupPage() {
        cy.visit('/signup');

        cy.get(this.selectorsList().firstNameField, { timeout: 10000 })
            .should('be.visible');
    }

    fillSignupForm(firstName, lastName, username, password, confirmPassword) {

    cy.get(this.selectorsList().firstNameField)
        .clear();

    if (firstName && firstName.trim() !== '') {
        cy.get(this.selectorsList().firstNameField)
            .type(firstName);
    }

    cy.get(this.selectorsList().lastNameField)
        .clear();

    if (lastName && lastName.trim() !== '') {
        cy.get(this.selectorsList().lastNameField)
            .type(lastName);
    }

    cy.get(this.selectorsList().usernameField)
        .clear();

    if (username && username.trim() !== '') {
        cy.get(this.selectorsList().usernameField)
            .type(username);
    }

    cy.get(this.selectorsList().passwordField)
        .clear();

    if (password && password.trim() !== '') {
        cy.get(this.selectorsList().passwordField)
            .type(password);
    }

    cy.get(this.selectorsList().confirmPasswordField)
        .clear();

    if (confirmPassword && confirmPassword.trim() !== '') {
        cy.get(this.selectorsList().confirmPasswordField)
            .type(confirmPassword);
    }

    // Faz o primeiro campo perder o foco
    cy.get(this.selectorsList().lastNameField).click();
}
    clickSignupButton() {
        cy.get(this.selectorsList().signupButton)
            .should('be.enabled')
            .click();
    }

    validateSuccessfulSignup() {
        cy.url({ timeout: 10000 })
            .should('include', '/signin');

        cy.get(this.selectorsList().loginUsernameField, { timeout: 10000 })
            .should('be.visible');
    }

    validateFirstNameRequiredError() {
        cy.get(this.selectorsList().firstNameError, { timeout: 5000 })
            .should('be.visible');
    }

    validatePasswordMismatchError() {
        cy.get(this.selectorsList().confirmPasswordError, { timeout: 5000 })
            .should('be.visible');
    }

    validateSignupButtonDisabled() {
        cy.get(this.selectorsList().signupButton)
            .should('be.disabled');
    }
}

export default SignupPage;