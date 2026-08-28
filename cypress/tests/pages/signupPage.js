class SignupPage {
    selectorsList() {
        const selectors = {

              signupLink: "[data-test='signup']",
            firstnameFieldSignup: "[data-test='signup-first-name']",
            lastnameFieldSignup: "[data-test='signup-last-name']",
            usernameFieldSignup: "[data-test='signup-username']",
            passwordFieldSignup: "[data-test='signup-password']",
            confirmPasswordFieldSignup: "[data-test='signup-confirmPassword']",
            signupButton: "[data-test='signup-submit']",
        }   

        return selectors;
    }
    
    accessSignupPage() {
        cy.visit('/signup');
    }

    fillSignupForm(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorsList().firstnameFieldSignup).type(firstName);
        cy.get(this.selectorsList().lastnameFieldSignup).type(lastName);
        cy.get(this.selectorsList().usernameFieldSignup).type(username);
        cy.get(this.selectorsList().passwordFieldSignup).type(password);
        cy.get(this.selectorsList().confirmPasswordFieldSignup).type(confirmPassword);
    }

}

export default SignupPage