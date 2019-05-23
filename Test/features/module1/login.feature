# features/Login and Logout feature
Feature: Test Login to Application

  Background: Common Steps
  Given I login to Application
  Then I should be able to go to HomePage

  @smoke @regression
  Scenario:  Test Login- Logout functionality 
    When I click Logout button
    Then I should be able to log-out of Application