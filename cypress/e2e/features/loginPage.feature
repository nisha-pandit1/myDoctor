Feature: Login page

    Scenario Outline: User login with valid credentials
        Given User is on the "home" page
        When User clicks on "login" button
        When User enters "<email>" in "email" input field
        And User enters "<password>" in "password" input field
        And User clicks on "submit" button
        Then User should navigates to the "home" page

        Examples:
            | email        | password        |
            | DOCTOR_EMAIL | DOCTOR_PASSWORD |


    Scenario Outline: User login with invalid credentials
        Given User is on the "home" page
        When User clicks on "login" button
        When User enters "<email>" in "email" input field
        And User enters "<password>" in "password" input field
        And User clicks on "submit" button
        Then User should see the "<Errormessage>" messsage

        Examples:
            | email         | password         | Errormessage                                                    |
            | Invalid_Email | Invalid_Password | Mobile Number/Email or password is incorrect. Please try again. |
