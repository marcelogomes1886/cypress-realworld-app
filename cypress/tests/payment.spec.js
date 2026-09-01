import userData from '..//fixtures//userData.json'
import userTransactionData from '..//fixtures//userTransactionData.json'
import SignInPage from '..//tests//pages//signInPage'
import HomePage from '..//tests//pages//homePage'
import TransactionPage from '..//tests//pages//transactionPage'

const signInPage = new SignInPage()
const homePage = new HomePage()
const transactionPage = new TransactionPage()

beforeEach(() => {
  signInPage.logingIn(userData.userSignIn.userSucess.username, userData.userSignIn.userSucess.password)
  homePage.checkHomePage()
  homePage.accessTransactionPage()
  transactionPage.checkTransactionPage()
})

describe('Transação - Envio de dinheiro com saldo suficiente', () => {
  it('Enviar dinheiro com sucesso para um contato válido', () => {
    transactionPage.chooseTransactionContact('kristianBradtke')
    transactionPage.fillTransactionFields(
      userTransactionData.transactionSuccess.amountToSend,
      userTransactionData.transactionSuccess.note
    )
    transactionPage.validateBalanceUpdate(userTransactionData.transactionSuccess.amountToSend) 
  })
})

describe('Transação - Envio de dinheiro com saldo insuficiente', () => {
  it('Tentar enviar dinheiro com valor maior que o saldo disponível', () => {
    transactionPage.chooseTransactionContact('darrelOrtiz')
    transactionPage.fillTransactionFields(
      userTransactionData.transactionFail.amountToSend,
      userTransactionData.transactionFail.note
    )
    transactionPage.validateBalanceUpdate(userTransactionData.transactionSuccess.amountToSend) 
    
  })
})

describe('Transação - Validação de campos obrigatórios vazios', () => {
  afterEach(() => {
    transactionPage.checkPaymentButton()
  })

  it('Realizar transação com todos os campos vazios', () => {
    transactionPage.chooseTransactionContact('ruthieProsacco')
    transactionPage.fillTransactionFields('', '')
    transactionPage.checkRequireMsg('amountRequireMsg')
    transactionPage.checkRequireMsg('addNoteRequireMsg')
  })

  it('Realizar transação com campo de valor vazio', () => {
    transactionPage.chooseTransactionContact('ruthieProsacco')
    transactionPage.fillTransactionFields('', userTransactionData.transactionFail.note)
    transactionPage.checkRequireMsg('amountRequireMsg')
  })

  it('Realizar transação com campo de nota vazio', () => {
    transactionPage.chooseTransactionContact('ruthieProsacco')
    transactionPage.fillTransactionFields(userTransactionData.transactionFail.amountToSend, '')
    transactionPage.checkRequireMsg('addNoteRequireMsg')
  })
})