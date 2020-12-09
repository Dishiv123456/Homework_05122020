Feature: Bank Functionality
  as a customer and manager i want to open, add and do transaction on account

  Scenario:verify manager should add customer successfully
    Given i enter URL and i am on home page
    When i click on manager login link
    And i click on add customer link
    And i enter first name "Ram"
    And i enter last name "Krishna"
    And i enret post code "NW1 5BW"
    And i click on add customer button
    Then pop up window should open ans verify text and click on

Scenario: verify that bank manager should open account successfully
  Given i enter URL and i am on home page
  When i click on manager login link
  And i click on add customer link
  And i enter first name "Ram"
  And i enter last name "Krishna"
  And i enret post code "NW1 5BW"
  And i click on add customer button
  And pop up window should open ans verify text and click on
  And i click on open account button
  And i click on customer dropdown "Ram Krishna" and "6"
  And i click on dropdoen and select pound "2"
  And i click on process button
  Then i should be able to open created account successfully

Scenario: verify that customer should login and logout successfully
  Given i enter URL and i am on home page
  When i click on manager login link
  And i click on add customer link
  And i enter first name "Ram"
  And i enter last name "Krishna"
  And i enret post code "NW1 5BW"
  And i click on add customer button
  And pop up window should open ans verify text and click on
  And i click on home page
  And i click on customer login link
  And  i click on customer dropdown "Ram Krishna" and "6"
  And i click on login button
  And i verify that log out button is displayed
  And i click on log out button
  Then  user should be able to see YourName is display

  Scenario: verify that customer should be able to deposit money successfully
    Given i enter URL and i am on home page
    When i click on manager login link
    And i click on add customer link
    And i enter first name "Ram"
    And i enter last name "Krishna"
    And i enret post code "NW1 5BW"
    And i click on add customer button
    And pop up window should open ans verify text and click on
    And i click on open account button
    And i click on customer dropdown "Ram Krishna" and "6"
    And i click on dropdoen and select pound "2"
    And i click on process button
    And i should be able to open created account successfully
    And i click on home page
    And i click on customer login link
    And  i click on customer dropdown "Ram Krishna" and "6"
    And i click on login button
    And i click on deposit tab
    And i enter deposit money "100"
    And i click on deposit final tab
    Then deposit should be added successfully verification message

    Scenario: verify that user should be able to withdraw money successfully
      Given i enter URL and i am on home page
      When i click on manager login link
      And i click on add customer link
      And i enter first name "Ram"
      And i enter last name "Krishna"
      And i enret post code "NW1 5BW"
      And i click on add customer button
      And pop up window should open ans verify text and click on
      And i click on open account button
      And i click on customer dropdown "Ram Krishna" and "6"
      And i click on dropdoen and select pound "2"
      And i click on process button
      And i should be able to open created account successfully
      And i click on home page
      And i click on customer login link
      And  i click on customer dropdown "Ram Krishna" and "6"
      And i click on login button
      And i click on deposit tab
      And i enter deposit money "100"
      And i click on deposit final tab
      And deposit should be added successfully verification message
      And i click on home page
      And i click on customer login link
      And i click on customer dropdown "Ram Krishna" and "6"
      And i click on login button
      And i click on withdrawal button
      And i enter withdrawal amount "50"
      And i click on withdrawal final tab
      Then i should get message that transaction successful



