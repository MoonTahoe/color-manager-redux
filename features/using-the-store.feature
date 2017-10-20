Feature: Using the store
  As a web developer I want the ability
  to customize store instances
  So that I can add platform features

  Scenario: Setting Initial State
    Given I have the following colors in state:
      | color    | hex     |
      | big blue | #0000FF |
      | lawn     | #00FF00 |
      | crimson  | #FF0000 |
    When I create a store
    Then I should be able to inject initial state data

  Scenario: Injecting Middleware
    Given I have a middleware
    When I create a store
    Then the store instance should execute my middleware
