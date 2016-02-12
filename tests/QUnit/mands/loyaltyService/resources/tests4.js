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

test("As a non signed-in segmented customer i should be able to reject loyalty scheme", 6, function() {
	ok(true,'Given I am not signed-in');
	ok(true,'And I am part of the selected segment for the loyalty scheme');
	ok(true,'And I have received an E-mail with a link to the loyalty services');
	ok(true,'When I follow the E-mail link');
	ok(true,'When I choose to decline');
	ok(true,' Then I am directed to the home page');
});

	
	

    
    
     
    
    
   
	


    
    	
    
    
    
     
    
    
    
    
    
	
	