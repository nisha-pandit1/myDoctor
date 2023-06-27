import {When,Then} from "@badeball/cypress-cucumber-preprocessor";
import Urls from "../../../pageUrls/urls.json";
import loginPageObject from "../../../pageObject/Login.pageObject";
const loginPage = new loginPageObject();

When("User clicks on {string} button", (button) => {
  if(button=="login"){
    loginPage.getLoginButton()
  }
  else{
    loginPage.getSubmitButton()
  }
});

When("User enters {string} in {string} input field",(userData,webIdentifier)=>{
  if(webIdentifier =="email"){
  loginPage.getEmailField(userData)}
  else{
    loginPage.getPasswordField(userData)
  }
})

Then('User should navigates to the {string} page',(url)=>{
  cy.url().should('include', Urls[url])
});

Then('User should see the {string} messsage',()=>{
  loginPage.getErrorMessage()
});
