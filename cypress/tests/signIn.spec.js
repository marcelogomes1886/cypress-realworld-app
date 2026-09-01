import userData from '..//fixtures//userData.json'
import SignInPage from '..//tests//pages//signInPage'

const signInPage = new SignInPage()

describe('Login - Credenciais Válidas', () => {
  it('Login com credenciais válidas', () => {
    signInPage.logingIn(userData.userSignIn.userSucess.username, userData.userSignIn.userSucess.password)
  });
});

describe('Login - Credenciais inválidas', () => {
  afterEach(() => {
    signInPage.checkRequireMsg('failedLoginMessage')
  })

  it('Login com nome de usuário inválido', () => {
    signInPage.logingIn(userData.userSignIn.userFail.username, userData.userSignIn.userSucess.password)
  })

  it('Login com senha inválida', () => {
    signInPage.logingIn(userData.userSignIn.userSucess.username, userData.userSignIn.userFail.password)
  })

  it('Login com credenciais inválidas', () => {
    signInPage.logingIn(userData.userSignIn.userFail.username, userData.userSignIn.userFail.password)
  })
})

describe('Login - Campos vazios', () => {
  beforeEach(() => {
    signInPage.accessSignInPage()
  })

  afterEach(() => {
    signInPage.checkSignInButton()
  })

  it('Login com todos os campos em branco', () => {
    signInPage.fillLoginForm('', '')
    signInPage.checkRequireMsg('usernamRequiredMsg')
  })

  it('Login com campo de "username" em branco', () => {
    signInPage.fillLoginForm('', userData.userSignIn.userSucess.password)
    signInPage.checkRequireMsg('usernamRequiredMsg')
  })

  it('Login com campo de "password" em branco', () => {
    signInPage.fillLoginForm(userData.userSignIn.userSucess.username, '')
  })

  it('Login com senha contendo menos que 4 caracteres', () => {
    signInPage.fillLoginForm(userData.userSignIn.userSucess.username, userData.shortPassword)
    signInPage.focusBlurField(signInPage.selectorsList().fields.passwordField)
    signInPage.checkRequireMsg( 'passwordRequireMsg')
  })

})