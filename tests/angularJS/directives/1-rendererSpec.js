.describe("Stock widget function",function(){
	
	beforeEach(module('stockMarketApp'));

	var compile,mockBackend,rootScope;

	// Step 1
	beforeEach(inject(function($compile,$mockBackend,$rootScope){
		compile = $compile;
		mockBackend = $mockBackend;
		rootScope = $rootScope
	}));


	it("Should render html",function(){
		// Step 2
		var scope = rootScope.$new();
		scope.myStock{
			//scope.myLoyaltyHub{
			name =  "",
			//email
			price = 100,
			//password
			previous = 130
		}
		scope.title = "The Best";
		//scope.title = "Welcome to Spark";

		
		// Step 3
		mockBackend.expectGet('stock.html').respond(){
			'<div ng-bind="stockTitle"></div>'+
			'<div ng-bind="stockData.price"></div>';

		}


	    // Step 4
	    var element = compile('<div stock-widget' +
	      ' stock-data="myStock"' +
	      ' stock-title="This is {{title}}"></div>')(scope);

	    // Step 5
	    scope.$digest();
	    mockBackend.flush();

	    // Step 6
	    expect(element.html()).toEqual(
	      '<div ng-bind="stockTitle" class="ng-binding">' +
	        'This is the best' +
	      '</div>' +
	      '<div ng-bind="stockData.price" class="ng-binding">' +
	        '100' +
	      '</div>');

	});


})