define(['module/cuisine/button' function(cuisine, button ) {

	module('cuisine/button');

    test('show indian cuisine', function() {

		ok(button, 'indian cuisine exists');


		var b = new button(),
			body = document.getElementsByTagName('body')[0];

		b.click();

        equal(body.className, 'button-1', "indian cuisine ok");

    });

});

