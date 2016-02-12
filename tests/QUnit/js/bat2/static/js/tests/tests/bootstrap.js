define(['module/bootstrap'], function( bat2 ) {

    module('bat2/bootstrap');

    test('bat2 global object dependencies', function () {

        ok(bat2, 'exists');
        ok(bat2.pubsub, 'pubsub exists');
        ok(bat2.$, 'bonzo/qwery exists');

	});
	
});    
