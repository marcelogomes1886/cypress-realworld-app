import userData from '..//fixtures//userData.json'
import SignUpPage from '..//tests//pages//signupPage'

const signUpPage = new SignUpPage()

beforeEach(() => {
    signUpPage.acessSignUpPage()
})

describe('Cadastro de usuário - Credenciais válidas',  () => {
    it('Cadastrar usuário com credenciais validas', () => {
        signUpPage.registerNewUser(
            userData.userSignUp.firstName, 
            userData.userSignUp.lastName, 
            userData.userSignUp.username, 
            userData.userSignUp.password,
            userData.userSignUp.confirmPassword
        )
        signUpPage.clickSignUpButton()
        signUpPage.checkUrl('http://localhost:3000/signin')
    })
})

describe('Cadastro de usuário - Credenciais inválidas', () => {
    afterEach(() => {
        signUpPage.checkSignUpButton()
    })


    it('Cadastrar usuário com todos os campos em branco', () => {
        signUpPage.registerNewUser()
        const requireMsgs = signUpPage.selectorsList().requireMsg
        for(let erroMsg in requireMsgs){
            signUpPage.checkRequireMsg(erroMsg)
        }
    })

    it('Cadastrar usuário com campo de "first name" em branco', () => {
        signUpPage.registerNewUser(
            '',
            userData.userSignUp.lastName, 
            userData.userSignUp.username, 
            userData.userSignUp.password, 
            userData.userSignUp.confirmPassword
        )
        signUpPage.checkRequireMsg('firstNameRequiredMsg')
    })

    it('Cadastrar usuário com campo de "last name" em branco', () => {
        signUpPage.registerNewUser(
            userData.userSignUp.firstName,
            '', 
            userData.userSignUp.username, 
            userData.userSignUp.password, 
            userData.userSignUp.confirmPassword
        )
        signUpPage.checkRequireMsg('lastNameRequiredMsg')
    })

    it('Cadastrar usuário com campo de "username" em branco', () => {
        signUpPage.registerNewUser(
            userData.userSignUp.firstName, 
            userData.userSignUp.lastName, 
            '', 
            userData.userSignUp.password, 
            userData.userSignUp.confirmPassword
        )
        signUpPage.checkRequireMsg('usernameRequiredMsg')
    })

    it('Cadastrar usuário com campo de "password" em branco', () => {
        signUpPage.registerNewUser(
            userData.userSignUp.firstName, 
            userData.userSignUp.lastName, 
            userData.userSignUp.username, 
            '', 
            userData.userSignUp.confirmPassword
        )
        signUpPage.checkRequireMsg('passwordRequiredMsg')
    })

    it('Cadastrar usuário com campo de "confirm password" em branco', () => {
        signUpPage.registerNewUser(
            userData.userSignUp.firstName, 
            userData.userSignUp.lastName, 
            userData.userSignUp.username, 
            userData.userSignUp.password,
            '' 
        )
        signUpPage.checkRequireMsg('confirmPaswordRequireMsg')
    })

    it('Cadastrar usuário com senha contendo menos de 4 caracteres', () => {
        signUpPage.registerNewUser(
            userData.userSignUp.firstName, 
            userData.userSignUp.lastName, 
            userData.userSignUp.username, 
            userData.shortPassword,
            userData.userSignUp.confirmPassword
        )
        signUpPage.checkRequireMsg('passwordRequiredMsg')
    })
})