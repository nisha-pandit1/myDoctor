import GenericHelpers from '../utilities/genericHelpers';
import WebButton from '../ui/webButton';
import WebTextBox from '../ui/webTextBox';
import loginPage from "../pages/LoginPage";
const LoginPageLocators =new loginPage();
const genericHelpers = new GenericHelpers();
const webButton = new WebButton();
const webTextBox = new WebTextBox();


class loginPageObject{
      getLoginButton(){
        webButton.click(LoginPageLocators.getLoginButton());
      }

      getEmailField(email){
       cy.fixture('example').then((testdata)=>{
        webTextBox.typeText(LoginPageLocators.getEmailField(),(atob(testdata[email])))
       })

      }

      getPasswordField(password){
        cy.fixture('example').then((testdata)=>{
          webTextBox.typeText(LoginPageLocators.getPasswordField(),(atob(testdata[password])))
       })
      }

      getSubmitButton(){
        webButton.click(LoginPageLocators.getSubmitButton());
      }

      getErrorMessage(){
        genericHelpers.elementIsDisplayed(LoginPageLocators.getErrorMessage());
      }
      
}

export default loginPageObject;