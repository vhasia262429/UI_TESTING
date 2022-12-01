Feature: Internet Banking Pages

  @PayeePage
  Scenario: Verify you can navigate to Payees page using the navigation menu
    Given user launch chrome browser
    When user open Internet Banking home page
    And user click menu button
    And user click payees
    Then user verifies that Payees page is loaded

  @PayeePage
  Scenario: User Verifies if new payee has been added in the Payees page
    Given user launch chrome browser
    When user open Internet Banking home page
    And user click menu button
    And user click payees
    Then user verifies that Payees page is loaded
    When user click add button
    And user input payees details
    And user click add payee button
    Then user verifies that new payee has been added in the list of payee

  @PayeePage
  Scenario: User verifies that payee name is a required field
    Given user launch chrome browser
    When user open Internet Banking home page
    And user click menu button
    And user click payees
    Then user verifies that Payees page is loaded
    When user click add button
    And user click add payee button
    Then user gets and error message
    And user input payees details
    And user click add payee button
    Then user verifies that new payee has been added in the list of payee

  @PayeePage
  Scenario: User Verifies if new payee has been added in the Payees page
    Given user launch chrome browser
    When user open Internet Banking home page
    And user click menu button
    And user click payees
    Then user verifies that Payees page is loaded
    When user click add button
    And user input payees details
    And user click add payee button
    Then user verifies that new payee has been added in the list of payee and the list is sorted in ascending order by default
    And user click name header
    Then user verifies that the list is sorted in descending order

  @PaymentPage
  Scenario: User Navigates to Payment Page
    Given user launch chrome browser
    When user open Internet Banking home page
    And user click menu button
    And user click pay and transfer button
    And transfer from Every day Account to Bill Account
    Then transfer successful message is displayed
    Then user verifies that the current balance of Everyday account and Bill counts are correct


