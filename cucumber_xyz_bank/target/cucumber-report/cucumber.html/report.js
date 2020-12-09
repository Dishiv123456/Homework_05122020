$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/bank.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Functionality",
  "description": "as a customer and manager i want to open, add and do transaction on account",
  "id": "bank-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7849221500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify manager should add customer successfully",
  "description": "",
  "id": "bank-functionality;verify-manager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "i enter URL and i am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i click on manager login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i click on add customer link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "i enter first name \"Ram\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i enter last name \"Krishna\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i enret post code \"NW1 5BW\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "pop up window should open ans verify text and click on",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepdefs.iEnterURLAndIAmOnHomePage()"
});
formatter.result({
  "duration": 116600800,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnManagerLoginLink()"
});
formatter.result({
  "duration": 3098280700,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerLink()"
});
formatter.result({
  "duration": 279418400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 319968500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Krishna",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 103499100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NW1 5BW",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnretPostCode(String)"
});
formatter.result({
  "duration": 100863100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 70435100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.popUpWindowShouldOpenAnsVerifyTextAndClickOn()"
});
formatter.result({
  "duration": 12045800,
  "status": "passed"
});
formatter.after({
  "duration": 1121424900,
  "status": "passed"
});
formatter.before({
  "duration": 6520043500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verify that bank manager should open account successfully",
  "description": "",
  "id": "bank-functionality;verify-that-bank-manager-should-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "i enter URL and i am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "i click on manager login link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "i click on add customer link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "i enter first name \"Ram\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i enter last name \"Krishna\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "i enret post code \"NW1 5BW\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "i click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "pop up window should open ans verify text and click on",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i click on open account button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i click on customer dropdown \"Ram Krishna\" and \"6\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i click on dropdoen and select pound \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "i click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i should be able to open created account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepdefs.iEnterURLAndIAmOnHomePage()"
});
formatter.result({
  "duration": 16600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnManagerLoginLink()"
});
formatter.result({
  "duration": 3101785500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerLink()"
});
formatter.result({
  "duration": 224901500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 252862200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Krishna",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 91228800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NW1 5BW",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnretPostCode(String)"
});
formatter.result({
  "duration": 92927500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 64403100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.popUpWindowShouldOpenAnsVerifyTextAndClickOn()"
});
formatter.result({
  "duration": 9334400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnOpenAccountButton()"
});
formatter.result({
  "duration": 75377800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram Krishna",
      "offset": 30
    },
    {
      "val": "6",
      "offset": 48
    }
  ],
  "location": "BankStepdefs.iClickOnCustomerDropdownAnd(String,int)"
});
formatter.result({
  "duration": 485522400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 38
    }
  ],
  "location": "BankStepdefs.iClickOnDropdoenAndSelectPound(int)"
});
formatter.result({
  "duration": 206991700,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 76959400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToOpenCreatedAccountSuccessfully()"
});
formatter.result({
  "duration": 11309900,
  "status": "passed"
});
formatter.after({
  "duration": 657321200,
  "status": "passed"
});
formatter.before({
  "duration": 6490157500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "verify that customer should login and logout successfully",
  "description": "",
  "id": "bank-functionality;verify-that-customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "i enter URL and i am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "i click on manager login link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "i click on add customer link",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "i enter first name \"Ram\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "i enter last name \"Krishna\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i enret post code \"NW1 5BW\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "i click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "pop up window should open ans verify text and click on",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "i click on home page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "i click on customer login link",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "i click on customer dropdown \"Ram Krishna\" and \"6\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "i click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "i verify that log out button is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "i click on log out button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user should be able to see YourName is display",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepdefs.iEnterURLAndIAmOnHomePage()"
});
formatter.result({
  "duration": 14100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnManagerLoginLink()"
});
formatter.result({
  "duration": 3062754900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerLink()"
});
formatter.result({
  "duration": 231669900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 259215400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Krishna",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 88940500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NW1 5BW",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnretPostCode(String)"
});
formatter.result({
  "duration": 90007500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 65793100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.popUpWindowShouldOpenAnsVerifyTextAndClickOn()"
});
formatter.result({
  "duration": 7738700,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnHomePage()"
});
formatter.result({
  "duration": 75543100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnCustomerLoginLink()"
});
formatter.result({
  "duration": 65946600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram Krishna",
      "offset": 30
    },
    {
      "val": "6",
      "offset": 48
    }
  ],
  "location": "BankStepdefs.iClickOnCustomerDropdownAnd(String,int)"
});
formatter.result({
  "duration": 446150700,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 70702300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iVerifyThatLogOutButtonIsDisplayed()"
});
formatter.result({
  "duration": 47895400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnLogOutButton()"
});
formatter.result({
  "duration": 5090146400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.userShouldBeAbleToSeeYourNameIsDisplay()"
});
formatter.result({
  "duration": 5045764800,
  "status": "passed"
});
formatter.after({
  "duration": 682460700,
  "status": "passed"
});
formatter.before({
  "duration": 6400541100,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "verify that customer should be able to deposit money successfully",
  "description": "",
  "id": "bank-functionality;verify-that-customer-should-be-able-to-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "i enter URL and i am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "i click on manager login link",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "i click on add customer link",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "i enter first name \"Ram\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "i enter last name \"Krishna\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "i enret post code \"NW1 5BW\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "i click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "pop up window should open ans verify text and click on",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "i click on open account button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "i click on customer dropdown \"Ram Krishna\" and \"6\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "i click on dropdoen and select pound \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "i click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "i should be able to open created account successfully",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "i click on home page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "i click on customer login link",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "i click on customer dropdown \"Ram Krishna\" and \"6\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "i click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "i click on deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "i enter deposit money \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "i click on deposit final tab",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "deposit should be added successfully verification message",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepdefs.iEnterURLAndIAmOnHomePage()"
});
formatter.result({
  "duration": 22400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnManagerLoginLink()"
});
formatter.result({
  "duration": 3088607800,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerLink()"
});
formatter.result({
  "duration": 228272900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 251812400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Krishna",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 89622100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NW1 5BW",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnretPostCode(String)"
});
formatter.result({
  "duration": 91169200,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 69510600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.popUpWindowShouldOpenAnsVerifyTextAndClickOn()"
});
formatter.result({
  "duration": 7632900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnOpenAccountButton()"
});
formatter.result({
  "duration": 81448300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram Krishna",
      "offset": 30
    },
    {
      "val": "6",
      "offset": 48
    }
  ],
  "location": "BankStepdefs.iClickOnCustomerDropdownAnd(String,int)"
});
formatter.result({
  "duration": 392839900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 38
    }
  ],
  "location": "BankStepdefs.iClickOnDropdoenAndSelectPound(int)"
});
formatter.result({
  "duration": 194739300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 74976000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToOpenCreatedAccountSuccessfully()"
});
formatter.result({
  "duration": 7456300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnHomePage()"
});
formatter.result({
  "duration": 75263200,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnCustomerLoginLink()"
});
formatter.result({
  "duration": 59304200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram Krishna",
      "offset": 30
    },
    {
      "val": "6",
      "offset": 48
    }
  ],
  "location": "BankStepdefs.iClickOnCustomerDropdownAnd(String,int)"
});
formatter.result({
  "duration": 391330400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 64558600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnDepositTab()"
});
formatter.result({
  "duration": 226557800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 23
    }
  ],
  "location": "BankStepdefs.iEnterDepositMoney(String)"
});
formatter.result({
  "duration": 252334000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnDepositFinalTab()"
});
formatter.result({
  "duration": 75409800,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.depositShouldBeAddedSuccessfullyVerificationMessage()"
});
formatter.result({
  "duration": 44547000,
  "status": "passed"
});
formatter.after({
  "duration": 694143700,
  "status": "passed"
});
formatter.before({
  "duration": 6480436500,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "verify that user should be able to withdraw money successfully",
  "description": "",
  "id": "bank-functionality;verify-that-user-should-be-able-to-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 70,
  "name": "i enter URL and i am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "i click on manager login link",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "i click on add customer link",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "i enter first name \"Ram\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "i enter last name \"Krishna\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "i enret post code \"NW1 5BW\"",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "i click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "pop up window should open ans verify text and click on",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "i click on open account button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "i click on customer dropdown \"Ram Krishna\" and \"6\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "i click on dropdoen and select pound \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "i click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "i should be able to open created account successfully",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "i click on home page",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "i click on customer login link",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "i click on customer dropdown \"Ram Krishna\" and \"6\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "i click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "i click on deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "i enter deposit money \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "i click on deposit final tab",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "deposit should be added successfully verification message",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "i click on home page",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "i click on customer login link",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "i click on customer dropdown \"Ram Krishna\" and \"6\"",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "i click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "i click on withdrawal button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "i enter withdrawal amount \"50\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "i click on withdrawal final tab",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "i should get message that transaction successful",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepdefs.iEnterURLAndIAmOnHomePage()"
});
formatter.result({
  "duration": 23200,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnManagerLoginLink()"
});
formatter.result({
  "duration": 3063973900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerLink()"
});
formatter.result({
  "duration": 218704800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 250504800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Krishna",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 91668500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NW1 5BW",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnretPostCode(String)"
});
formatter.result({
  "duration": 90558900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 68596600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.popUpWindowShouldOpenAnsVerifyTextAndClickOn()"
});
formatter.result({
  "duration": 6465300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnOpenAccountButton()"
});
formatter.result({
  "duration": 79934600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram Krishna",
      "offset": 30
    },
    {
      "val": "6",
      "offset": 48
    }
  ],
  "location": "BankStepdefs.iClickOnCustomerDropdownAnd(String,int)"
});
formatter.result({
  "duration": 407397500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 38
    }
  ],
  "location": "BankStepdefs.iClickOnDropdoenAndSelectPound(int)"
});
formatter.result({
  "duration": 199358600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 70324200,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToOpenCreatedAccountSuccessfully()"
});
formatter.result({
  "duration": 10136100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnHomePage()"
});
formatter.result({
  "duration": 105037100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnCustomerLoginLink()"
});
formatter.result({
  "duration": 71578400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram Krishna",
      "offset": 30
    },
    {
      "val": "6",
      "offset": 48
    }
  ],
  "location": "BankStepdefs.iClickOnCustomerDropdownAnd(String,int)"
});
formatter.result({
  "duration": 401218500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 69562200,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnDepositTab()"
});
formatter.result({
  "duration": 223627800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 23
    }
  ],
  "location": "BankStepdefs.iEnterDepositMoney(String)"
});
formatter.result({
  "duration": 237474400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnDepositFinalTab()"
});
formatter.result({
  "duration": 64327400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.depositShouldBeAddedSuccessfullyVerificationMessage()"
});
formatter.result({
  "duration": 37874700,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnHomePage()"
});
formatter.result({
  "duration": 52121300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnCustomerLoginLink()"
});
formatter.result({
  "duration": 10127676500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram Krishna",
      "offset": 30
    },
    {
      "val": "6",
      "offset": 48
    }
  ],
  "location": "BankStepdefs.iClickOnCustomerDropdownAnd(String,int)"
});
formatter.result({
  "duration": 253569200,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 10080415500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnWithdrawalButton()"
});
formatter.result({
  "duration": 91630100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 27
    }
  ],
  "location": "BankStepdefs.iEnterWithdrawalAmount(String)"
});
formatter.result({
  "duration": 384440400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnWithdrawalFinalTab()"
});
formatter.result({
  "duration": 57961000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldGetMessageThatTransactionSuccessful()"
});
formatter.result({
  "duration": 36108800,
  "status": "passed"
});
formatter.after({
  "duration": 666062800,
  "status": "passed"
});
});