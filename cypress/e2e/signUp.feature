Feature:Testing SignIn

    Scenario: Verify that a user can sign up using <source> as source of info
    Given I am on the mima home page
    When I click the "Sign up" Button
    Then I should see the sign Up form page
    When I fill in the "full name"
    And I fill in the "business name"
    And I fill in the "business email"
    And I fill in the "business phone number"
    And I fill in the "business registration name"
    And I click the "Next" Button
    And I select how I here about mima "<source>"
    And I fill in the "password"
    And I click the "Sign Up" Button
    And I insert the OTP
    Then I should see the Preview content
          | Panel        |
          | Customer     |
          | Order        |
          | Payment Link |
          | Paybills     |
          | Stock        |
    Example: 
        | source           |
        | Facebook         |
        | Twitter          |
        | Instagram        |
        | Webinar/Seminar  |
        | Google Search    |
        | Friends & Family |
        | Mima Sales Agent |
        | Others           |