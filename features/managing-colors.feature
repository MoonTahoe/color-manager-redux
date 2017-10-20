Feature: Managing Colors
  As a color aficionado
  I would like to manage a list of colors
  So that I can demonstrate my expertise about color schemes

  Background:
    Given I have the following colors in state:
      | color    | hex     |
      | big blue | #0000FF |
      | lawn     | #00FF00 |
      | crimson  | #FF0000 |
    When I create a store

  Scenario: Listing Colors
    Then I should see the following colors:
      | color    | hex     |
      | big blue | #0000FF |
      | lawn     | #00FF00 |
      | crimson  | #FF0000 |

  Scenario: Adding Colors
    When I add the color:
      | party pink | #FFC0CB |
    Then I should see the following colors:
      | color      | hex     |
      | big blue   | #0000FF |
      | lawn       | #00FF00 |
      | crimson    | #FF0000 |
      | party pink | #FFC0CB |

  Scenario: Removing Colors
    When I remove the color "lawn"
    Then I should see the following colors:
      | color      | hex     |
      | big blue   | #0000FF |
      | crimson    | #FF0000 |

  Scenario: Color Not Found
    When I remove the color "ocean"
    Then I should see the following error:
      | color 'ocean' not found in current color list |
