Feature: Validate Calculator App

@calc @add
Scenario: Test to verify Calculator Add functionality
Given I navigate to Calc Site
When I add two numbers "3" and "5"
Then The output displayed should be "8"