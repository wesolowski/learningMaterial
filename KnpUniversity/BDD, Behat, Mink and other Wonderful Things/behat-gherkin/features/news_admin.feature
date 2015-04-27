Feature: News admin panel
  In order to maintain a list of news
  As a site administrator
  I need to be able to add/edit/delete news

  Scenario: List available news
    Given there are 5 news articles
    And I am on "/admin"
    When I should see 5 news items

  Scenario: Add a new news entry
    Given I am on "/admin/news"
    When I click "New entry"
    And I fill in "Title" with "Alan Grant does not endorse the park!"
    And I press "Save"
    Then I should see "Your article has been saved"