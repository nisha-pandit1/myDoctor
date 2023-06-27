const loginButton = 'div .MuiButtonBase-root:eq(1)'
const emailField ='div #emailOrMobile'
const passwordField= 'div #password'
const submitButton ='div .MuiButtonBase-root:eq(5)'
const errorMessage='div .MuiAlert-message'


class loginPage{

  getLoginButton(){
    return cy.get(loginButton)
  }

  getEmailField(){
    return cy.get(emailField)
  }

  getPasswordField(){
    return cy.get(passwordField)
  }

  getSubmitButton(){
    return cy.get(submitButton)
  }
  
  getErrorMessage(){
    return cy.get(errorMessage)
  }
}

export default loginPage;
