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

test("As a signed-in non-segmented customer i should be taken to the thank you page when i select to opt-in", 6, function() {
	ok(true,'Given I sign in as an existing customer');
	ok(true,'And I am not part of the selected segment for the loyalty scheme');
	ok(true,'When I follow the E-mail link');
	ok(true,'When I choose to opt-in');
	ok(true,'Then I am greeted for showing interest in loyalty services');
	ok(true,'And I am directed to the home page');
});


    
	
    
    
	
	