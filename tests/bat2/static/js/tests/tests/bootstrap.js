define(['module/bootstrap'], function( news ) {

	module('news/bootstrap');

    test('news global object dependencies', function() {
	
		ok(news, 'exists');
		ok(news.pubsub, 'pubsub exists');
		ok(news.$, 'bonzo/qwery exists');

	});
	
});    
