import DashboardPage from '..//tests//pages//dashboardPage.js';
import LoginPage from '..//tests//pages//loginPage.js';
import ContactPage from '..//tests//pages//contactPage.js';
import PaymentPage from '..//tests//pages//paymentPage.js';
import userData from '..//fixtures//userData.json';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const contactPage = new ContactPage();
const paymentPage = new PaymentPage();

describe('Enviar dinheiro com saldo suficiente', () => {
    
    before(() => {
        // ✅ Cria o usuário se não existir
        cy.request({
            method: 'POST',
            url: 'http://localhost:3001/users',
            body: {
                firstName: 'Test',
                lastName: 'User',
                username: userData.userSuccess.username,
                password: userData.userSuccess.password,
                confirmPassword: userData.userSuccess.password
            },
            failOnStatusCode: false
        });
    });

    it.only('Deve enviar dinheiro com sucesso', () => {
        // ✅ Intercepta o login
        cy.intercept('POST', '**/login').as('loginRequest');
        
        // Login
        loginPage.accessLoginPage();
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);
        
        // ✅ Aguarda o login
        cy.wait('@loginRequest', { timeout: 10000 });
        cy.url({ timeout: 10000 }).should('not.include', '/signin');
        
        // Dashboard
        dashboardPage.checkDashboardPage();
        cy.get('.MuiDialog-container', { timeout: 10000 }).should('not.exist');
        dashboardPage.accessNewTransaction();

cy.wait(2000);

contactPage.selectContact();

paymentPage.fillPaymentForm('1000','Transferência para Marcelo');
    });
});