$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/InternetBanking.feature");
formatter.feature({
  "name": "Internet Banking Pages",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify you can navigate to Payees page using the navigation menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PayeePage"
    }
  ]
});
formatter.step({
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "InternetBanking.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user open Internet Banking home page",
  "keyword": "When "
});
formatter.match({
  "location": "InternetBanking.user_open_Internet_Banking_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click menu button",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click payees",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_payees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that Payees page is loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "InternetBanking.user_verifies_that_Payees_page_is_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Verifies if new payee has been added in the Payees page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PayeePage"
    }
  ]
});
formatter.step({
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "InternetBanking.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user open Internet Banking home page",
  "keyword": "When "
});
formatter.match({
  "location": "InternetBanking.user_open_Internet_Banking_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click menu button",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click payees",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_payees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that Payees page is loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "InternetBanking.user_verifies_that_Payees_page_is_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add button",
  "keyword": "When "
});
formatter.match({
  "location": "InternetBanking.user_click_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input payees details",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_input_payees_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add payee button",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_add_payee_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that new payee has been added in the list of payee",
  "keyword": "Then "
});
formatter.match({
  "location": "InternetBanking.user_verifies_that_new_payee_has_been_added_in_the_list_of_payee()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies that payee name is a required field",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PayeePage"
    }
  ]
});
formatter.step({
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "InternetBanking.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user open Internet Banking home page",
  "keyword": "When "
});
formatter.match({
  "location": "InternetBanking.user_open_Internet_Banking_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click menu button",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click payees",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_payees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that Payees page is loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "InternetBanking.user_verifies_that_Payees_page_is_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add button",
  "keyword": "When "
});
formatter.match({
  "location": "InternetBanking.user_click_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add payee button",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_add_payee_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets and error message",
  "keyword": "Then "
});
formatter.match({
  "location": "InternetBanking.user_gets_and_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input payees details",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_input_payees_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add payee button",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_add_payee_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that new payee has been added in the list of payee",
  "keyword": "Then "
});
formatter.match({
  "location": "InternetBanking.user_verifies_that_new_payee_has_been_added_in_the_list_of_payee()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Verifies if new payee has been added in the Payees page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PayeePage"
    }
  ]
});
formatter.step({
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "InternetBanking.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user open Internet Banking home page",
  "keyword": "When "
});
formatter.match({
  "location": "InternetBanking.user_open_Internet_Banking_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click menu button",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click payees",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_payees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that Payees page is loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "InternetBanking.user_verifies_that_Payees_page_is_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add button",
  "keyword": "When "
});
formatter.match({
  "location": "InternetBanking.user_click_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input payees details",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_input_payees_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add payee button",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_add_payee_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that new payee has been added in the list of payee and the list is sorted in ascending order by default",
  "keyword": "Then "
});
formatter.match({
  "location": "InternetBanking.user_verifies_that_new_payee_has_been_added_in_the_list_of_payee_and_the_list_is_sorted_in_ascending_order_by_default()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click name header",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_name_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that the list is sorted in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "InternetBanking.user_verifies_that_the_list_is_sorted_in_descending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Navigates to Payment Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PaymentPage"
    }
  ]
});
formatter.step({
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "InternetBanking.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user open Internet Banking home page",
  "keyword": "When "
});
formatter.match({
  "location": "InternetBanking.user_open_Internet_Banking_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click menu button",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click pay and transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.user_click_pay_and_transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "transfer from Every day Account to Bill Account",
  "keyword": "And "
});
formatter.match({
  "location": "InternetBanking.transfer_from_Every_day_Account_to_Bill_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "transfer successful message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "InternetBanking.transfer_successful_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that the current balance of Everyday account and Bill counts are correct",
  "keyword": "Then "
});
formatter.match({
  "location": "InternetBanking.user_verifies_that_the_current_balance_of_Everyday_account_and_Bill_counts_are_correct()"
});
formatter.result({
  "status": "passed"
});
});