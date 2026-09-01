import userData from '..//fixtures//userData.json'
import SignInPage from '..//tests//pages//signInPage'
import SignUpPage from '..//tests//pages//signupPage'
import HomePage from '..//tests//pages//homePage'
import TransactionHistoryPage from '..//tests//pages//transactionHistoryPage'

const signInPage = new SignInPage()
const signUpPage = new SignUpPage()
const homePage = new HomePage()
const transactionHistoryPage = new TransactionHistoryPage()

describe('Histórico de transações - Usuário com transações anteriores', () => {
  it('Exibir histórico de transações do usuário', () => {
    signInPage.logingIn(userData.userSignIn.userSucess.username, userData.userSignIn.userSucess.password)
    homePage.checkHomePage()
    transactionHistoryPage.accessHistoryTab()
    transactionHistoryPage.checkHistory()
  });
});

describe('Histórico de transações - Usuário sem transações anteriores', () => {
  it('Exibir histórico vazio para novo usuário', () => {
    signUpPage.completeRegistration(
      userData.userSignUp.firstName, 
      userData.userSignUp.lastName, 
      userData.userSignUp.username,
      userData.userSignUp.password,
      userData.userSignUp.confirmPassword
    ) 
    signInPage.logingIn(userData.userSignUp.username, userData.userSignUp.password)
    homePage.checkHomePage()
    homePage.checkOnboardingExists('Tests', '123456234', '122213214')
    transactionHistoryPage.accessHistoryTab()
    transactionHistoryPage.checkEmptyHistory()
  });
});