Feature: Testing Login

    Scenario: A User with Valid Details should be able to login successfully
        Given I am on the mima home page
        When I click the "Log in" Button
        And I fill in the "email"
        And I fill in the "password"
        And I click the "Login" Button
        Then I should see the Preview content
            | panel        |
            | Customer     |
            | Order        |
            | Payment Link |
            | Paybills     |
            | Stock        |