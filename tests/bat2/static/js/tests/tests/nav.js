//changed news to bat2
define(['module/bootstrap', 'module/nav/nav'], function (bat2, nav) {

    module('bat2/nav');

    test('opening and closing the navigation', function() {

		ok(nav, 'nav exists');

		var n = new nav(),
			body = document.getElementsByTagName('body')[0];

		n.open();

        equal(body.className, 'nav-open', "nav open ok");

        n.close();

        equal(body.className, 'nav-closed', "nav close ok");

        n.toggle();

        equal(body.className, 'nav-open', "nav toggle ok");

        n.toggle();

        equal(body.className, 'nav-closed', "nav toggle ok");

        n.toggle();

        bat2.pubsub.emit('tabs:click');

        equal(body.className, 'nav-closed', "nav toggle ok");

    });

});

