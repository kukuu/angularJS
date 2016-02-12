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

test("As a non signed-in segmented customer i should be able opt-in to loyalty scheme", 8, function() {
	ok(true,'Given I am not signed-in');
	ok(true,'And I am part of the selected segment for the loyalty scheme');
	ok(true,'And I have received an E-mail with a link to the loyalty services');
	ok(true,'When I follow the E-mail link');
	ok(true,'When I choose to opt in');
	ok(true,'Then I am presented with the sign-in details');
	ok(true,'When I choose to sign-in');
	ok(true,'Then I am directed to the loyalty hub');
});


    
    	
    
    
    
	
	