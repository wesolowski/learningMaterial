Feature: Search
  In order to find a word definition
  As a website user
  I am able to search for a word

  Background:
    Given I am on "/wiki/Main_Page"
    And I am logged in

  @javascript
  Scenario Outline: Searching for a specific page
    When I fill in the search box with "<search>"
    And I press the search button
    Then I should see "<expectation>"

  Examples:
    | search             | expectation                      |
    | Velociraptor       | an enlarged sickle-shaped claw   |
    | Tyrannosaurus Bill | Search results                   |