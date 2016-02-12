//Unit Test  source code for SUT: Loyalty Services
//@personalisation @loyalty
//Feature: Loyalty opt-in
  // As a customer
   //I should be able to opt-in to loyalty scheme

"use strict";

QUnit.extend(QUnit, {
    inArray: function (actual, expectedValues, message) {
        ok(expectedValues.indexOf(actual) !== -1, message);
    }
});

module("Scenario");

test("As a non signed-in non-segmented customer i should be taken to the thankyou page post signing in", 8, function() {
	ok(true,'Given I am not signed-in');
	ok(true,'And I am not part of the selected segment for the loyalty scheme');
	ok(true,'When I follow the E-mail link');
	ok(true,'When I choose to opt-in');
	ok(true,'Then I am presented with the sign-in details');
	ok(true,'When I choose to sign-in');
	ok(true,'Then I am greeted for showing interest in loyalty services');
	ok(true,'And I am directed to the home page');
});


    
	
    
	
    
    
    
	
	
	
    
    
	
	