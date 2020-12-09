$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/endtoend.feature");
formatter.feature({
  "line": 2,
  "name": "Build your own  computers",
  "description": "as a user i should be able to build computer",
  "id": "build-your-own--computers",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Build"
    }
  ]
});
formatter.before({
  "duration": 7062306300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#  Scenario: verify that products arrange in reverse alphabetical order"
    },
    {
      "line": 6,
      "value": "#    Given I am on home page"
    },
    {
      "line": 7,
      "value": "#    And  I click on computer tab"
    },
    {
      "line": 8,
      "value": "#    And I click on desktop tab"
    },
    {
      "line": 9,
      "value": "#    When I click on products sort by"
    },
    {
      "line": 10,
      "value": "#    And I click on Z to A from drop down"
    },
    {
      "line": 11,
      "value": "#    Then products title should be in reverse order"
    }
  ],
  "line": 13,
  "name": "verify that products should added to shopping cart successfully",
  "description": "",
  "id": "build-your-own--computers;verify-that-products-should-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on products sort by",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on A To Z from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select select proccesor GHz Intel Pentium Dual-Core",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select RAM 8GB",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on HDD radio button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on OS radio button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on total commander check box",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify price updated successfully",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify add to cart button successfully",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on cross button to close",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover to shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on qty boc to clear default value",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I added qrt \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click to update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "price should be updated successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 92050600,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepdefs.iClickOnComputerTab()"
});
formatter.result({
  "duration": 4268234300,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepdefs.iClickOnDesktopTab()"
});
formatter.result({
  "duration": 15796014000,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepdefs.iClickOnProductsSortBy()"
});
formatter.result({
  "duration": 6186862200,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepdefs.iClickOnAToZFromDropDown()"
});
formatter.result({
  "duration": 2283853500,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepdefs.iClickOnAddToCart()"
});
formatter.result({
  "duration": 69374100,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepdefs.iSelectSelectProccesorGHzIntelPentiumDualCore()"
});
formatter.result({
  "duration": 3624481000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 13
    }
  ],
  "location": "EndToEndStepdefs.iSelectRAMGB(int)"
});
formatter.result({
  "duration": 126829600,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepdefs.iClickOnHDDRadioButton()"
});
formatter.result({
  "duration": 59914300,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepdefs.iClickOnOSRadioButton()"
});
formatter.result({
  "duration": 58351700,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepdefs.iClickOnTotalCommanderCheckBox()"
});
formatter.result({
  "duration": 1159440100,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepdefs.iVerifyPriceUpdatedSuccessfully()"
});
formatter.result({
  "duration": 30191899200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027$1,475.00\u0027)]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7TUP9CK\u0027, ip: \u0027192.168.1.70\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\44796\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51345}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 64b720946bee01e50233c2ee647f95a9\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027$1,475.00\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getText(Unknown Source)\r\n\tat com.demo.nopcommerce.utility.Utility.getTextFromElement(Utility.java:53)\r\n\tat com.demo.nopcommerce.pages.BuildYourOwnComputerPage.VerifyPriceUpdatedSuccessfully(BuildYourOwnComputerPage.java:84)\r\n\tat com.demo.nopcommerce.stepdefs.EndToEndStepdefs.iVerifyPriceUpdatedSuccessfully(EndToEndStepdefs.java:75)\r\n\tat ✽.And I verify price updated successfully(src/test/java/resources/featurefile/endtoend.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EndToEndStepdefs.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EndToEndStepdefs.iVerifyAddToCartButtonSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EndToEndStepdefs.iClickOnCrossButtonToClose()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EndToEndStepdefs.iMouseHoverToShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EndToEndStepdefs.iClickOnGoToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EndToEndStepdefs.iClickOnQtyBocToClearDefaultValue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "EndToEndStepdefs.iAddedQrt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EndToEndStepdefs.iClickToUpdateShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EndToEndStepdefs.priceShouldBeUpdatedSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 29876480000,
  "status": "passed"
});
});