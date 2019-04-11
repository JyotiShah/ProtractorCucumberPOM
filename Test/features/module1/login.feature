# features/Login and Logout feature
Feature: Test Login to Application

  @smoke  
  Scenario: Login to application
    Given I login to Application
    Then I should be able to go to HomePage

  @smoke @regression
  Scenario:  Test Login- Logout functionality 
    Given I login to Application
    Then I should be able to go to HomePage
    When I click Logout button
    Then I should be able to log-out of Application