class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[data-test='signin-username']",
            passwordField: "[data-test='signin-password']",
            loginButton: "[data-test='signin-submit']",
            wrongCredentialAlert: "[role='alert']",
        }   
        return selectors;
    }

    accessLoginPage() {
        cy.visit('/signin');
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().loginButton).click();
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert).should('be.visible');
    }
}

export default LoginPage;