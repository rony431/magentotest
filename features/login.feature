Feature: Testing Magento website

  Scenario: Purchase an item
    Given I am on homepage
    When I purchase an item
    Then I fill up checkout form

  Scenario: Search for an existing order
    Given I am looking for order
    Then I fill up existing order

  Scenario: Add and delete multiple items
    Given I am on homepage
    Then I add and delete items

  Scenario: Verify privacy and policy page
    Given I am on homepage
    Then I review privacy and policy