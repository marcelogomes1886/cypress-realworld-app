import userData from '../fixtures/userData.json';
import LoginPage from '..//tests//pages//loginPage.js';
import SignupPage from '..//tests//pages//signupPage.js';
import DashboardPage from '..//tests//pages//dashboardPage.js';

const loginPage = new LoginPage();
const signupPage = new SignupPage();
const dashboardPage = new DashboardPage();

describe('Tests RealWorld App', () => {

  describe('Login RealWorld App Tests', () => {

    it('Deve fazer login com usuário válido', () => {
      loginPage.accessLoginPage();
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);
      dashboardPage.checkDashboardPage();
    });

    it('Tentar fazer login com credenciais inválidas', () => {
      loginPage.accessLoginPage();
      loginPage.loginWithUser(userData.userFail.username, userData.userFail.password);
      loginPage.checkAccessInvalid();
    });
  });

  describe('Signup RealWorld App Tests', () => {

   it('Deve registrar um novo usuário com informações válidas', () => {

    cy.intercept('POST', '**/users').as('signupRequest');

    signupPage.accessSignupPage();

    signupPage.fillSignupForm(
        userData.newUserSuccess.firstName,
        userData.newUserSuccess.lastName,
        userData.newUserSuccess.username,
        userData.newUserSuccess.password,
        userData.newUserSuccess.confirmPassword
    );

    signupPage.clickSignupButton();

    cy.wait('@signupRequest', { timeout: 10000 })
        .then((interception) => {

            expect(interception.response.statusCode).to.equal(201);

        });

    signupPage.validateSuccessfulSignup();
});
    it('Tentar registrar um novo usuário com informações inválidas', () => {

    signupPage.accessSignupPage();

    signupPage.fillSignupForm(
        userData.newUserFail.firstName,
        userData.newUserFail.lastName,
        userData.newUserFail.username,
        userData.newUserFail.password,
        userData.newUserFail.confirmPassword
    );

    signupPage.validateFirstNameRequiredError();
    signupPage.validatePasswordMismatchError();

    signupPage.validateSignupButtonDisabled();
  });
});
});