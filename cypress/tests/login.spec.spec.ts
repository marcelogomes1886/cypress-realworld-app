import { last } from 'lodash';
import userData from '..//fixtures//userData.json';
import { sign } from 'crypto';
import LoginPage from '..//tests//pages//loginPage';
import SignupPage from '..//tests//pages//signupPage';
import DashboardPage from '..//tests//pages//dashboardPage';

const loginPage = new LoginPage()
const signupPage = new SignupPage()
const dashboardPage = new DashboardPage()


describe('Login Tests', () => {

  const selectorsList = {
    usernameField: "[data-test='signin-username']",
    passwordField: "[data-test='signin-password']",
    loginButton: "[data-test='signin-submit']",
    tabList: "[data-test='nav-transaction-tabs']",
    wrongCredentialAlert: "[role='alert']",
    signupLink: "[data-test='signup']",
    firstnameFieldSignup: "[data-test='signup-first-name']",
    lastnameFieldSignup: "[data-test='signup-last-name']",
    usernameFieldSignup: "[data-test='signup-username']",
    passwordFieldSignup: "[data-test='signup-password']",
    confirmPasswordFieldSignup: "[data-test='signup-confirmPassword']",
    signupButton: "[data-test='signup-submit']",
  }
    
    
    

  it('Deve fazer login com usuário válido', () => {
    cy.visit('/signin')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.tabList).should('be.visible')  
    
    
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('/signin')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
    
    
    
    //cy.get(selectorsList.passwordField).type('Test@123456')
    //cy.get(selectorsList.loginButton).click()
    //cy.url().should('include', 'localhost:3000')
    //cy.get(selectorsList.tabList).should('be.visible')
  })

  it('Deve registrar um novo usuário com informações válidas', () => {
      
      cy.visit('/signin')
      cy.get(selectorsList.signupLink).click();
      cy.get(selectorsList.firstnameFieldSignup).type('Marcelo');
      cy.get(selectorsList.lastnameFieldSignup).type('Gomes');
      cy.get(selectorsList.usernameFieldSignup).type('marcelo_teste_' + Date.now()); 
      cy.get(selectorsList.passwordFieldSignup).type('SenhaSegura123!');
      cy.get(selectorsList.confirmPasswordFieldSignup).type('SenhaSegura123!');
      cy.get(selectorsList.signupButton).click();
     

  it.only('Deve fazer login com usuário válido', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);)    
    dashboardPage.checkDashboardPage();



  
  
  
  })

})