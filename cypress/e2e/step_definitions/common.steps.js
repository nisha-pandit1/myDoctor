import {Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";
import Urls from "../../../pageUrls/urls.json";
import dashBoard from "../../../pageObject/dashBoard.pageObject";
 const dashBoardPage = new dashBoard();

Given('User is on the {string} page' ,(url)=>{
    cy.visit(Urls[url]);
});


