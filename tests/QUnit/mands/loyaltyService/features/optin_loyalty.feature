@personalisation @loyalty
Feature: Loyalty opt-in
   As a customer
   I should be able to opt-in to loyalty scheme

  @wip @personal
Scenario: As a signed-in segmented customer i should be able to opt-in to loyalty scheme
    Given I sign-in as an existing customer
    And I am part of the selected segment for the loyalty scheme
    And I have received an E-mail with a link to the loyalty services	
    When I follow the E-mail link
    When I choose to opt-in
    Then I am directed to the loyalty hub
	
  @wip @personal
Scenario: As a non signed-in segmented customer i should be able opt-in to loyalty scheme after signing in
    Given I am not signed-in
    And I am part of the selected segment for the loyalty scheme
    And I have received an E-mail with a link to the loyalty services	
    When I follow the E-mail link
    When I choose to opt in
    Then I am presented with the sign-in details
	When I choose to sign-in
	Then I am directed to the loyalty hub
	
	
	@wip @personal
Scenario: As a signed-in segmented customer i should be able to decline loyalty scheme
    Given I sign-in as an existing customer
    And I am part of the selected segment for the loyalty scheme
    And I have received an E-mail with a link to the loyalty services 
    When I follow the E-mail link
    When I choose to decline
    Then I am directed to the home page
	
	@wip @personal
Scenario: As a non signed-in segmented customer i should be able to reject loyalty scheme
    Given I am not signed-in
    And I am part of the selected segment for the loyalty scheme
    And I have received an E-mail with a link to the loyalty services 
    When I follow the E-mail link
    When I choose to decline
    Then I am directed to the home page
	
    
  @wip @personal
Scenario : As a signed-in non-segmented customer i should be taken to the thank you page when he selects to opt-in
    Given I sign in as an existing customer 
	And I am not part of the selected segment for the loyalty scheme
    When I follow the E-mail link
    When I choose to opt-in
	Then I am greeted for showing interest in loyalty services
	and I am directed to the home page
	
	@wip @personal
Scenario : As a non signed-in non-segmented customer i should be taken to the thankyou page post signing in
   Given I am not signed-in 
	And I am not part of the selected segment for the loyalty scheme
    When I follow the E-mail link
    When I choose to opt-in
    Then I am presented with the sign-in details
	When I choose to sign-in
	Then I am greeted for showing interest in loyalty services
	and I am directed to the home page
	
	@wip @personal
Scenario: As a signed in non-segmented customer i should be able to reject loyalty scheme
    Given I sign in as an existing customer 
	And I am not part of the selected segment for the loyalty scheme
    When I follow the E-mail link
    When I choose to decline
    Then I am directed to the home page
	
	@wip @personal
Scenario: As a non-signed in non-segmented customer i should be able to reject loyalty scheme
    Given I am not signed-in 
	And I am not part of the selected segment for the loyalty scheme
    When I follow the E-mail link
    when I choose to decline
    Then I am directed to the home page
	
	@wip @personal
Scenario: As a non-signed non-registered customer non-segment customer i should be directed to the thank you page after 
creating an account for showing interest
    Given I am not signed-in 
	And I am not part of the selected segment for the loyalty scheme 
    When I follow the E-mail link
    When I choose to opt-in
	Then I am presented with the sign-in details
	When I choose to register as a new customer
	Then I am greeted for showing interest in loyalty services
	and I am directed to the home page
	
	
	@wip @personal
Scenario: As a signed in segmented customer i should be able to opt-in to loyalty scheme even if i already already
opted in
    Given I sign-in as an existing customer
    And I am part of the selected segment for the loyalty scheme
    And I have received an E-mail with a link to the loyalty services
    When I follow the E-mail link
    When I choose to opt-in
    Then I am directed to the loyalty hub
	When I sign out
	Then I am on Home page
	When I sign-in as an existing customer
    And I am part of the selected segment for the loyalty scheme
    And I have received an E-mail with a link to the loyalty services
	And I follow the E-mail link
    When I choose to opt-in
    Then I am directed to the loyalty hub
	
	