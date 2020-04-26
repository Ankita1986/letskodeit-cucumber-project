$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/learn/letskodeit/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "As a User I want to login into letskodeit website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15210332400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-functionality;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on letskodeit homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpTestSteps.iAmOnLetskodeitHomepage()"
});
formatter.result({
  "duration": 132143600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 239237900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 3093605000,
  "status": "passed"
});
formatter.after({
  "duration": 735222000,
  "status": "passed"
});
formatter.before({
  "duration": 13376357800,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-functionality;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on letskodeit homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"abc123@yahoomail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"Tajmahal06\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpTestSteps.iAmOnLetskodeitHomepage()"
});
formatter.result({
  "duration": 39200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 230811800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123@yahoomail.com",
      "offset": 15
    }
  ],
  "location": "SignUpTestSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 2807914500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tajmahal06",
      "offset": 18
    }
  ],
  "location": "SignUpTestSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 230617500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 47500,
  "status": "passed"
});
formatter.after({
  "duration": 739271600,
  "status": "passed"
});
});