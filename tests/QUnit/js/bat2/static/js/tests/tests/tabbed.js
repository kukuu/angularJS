define(['tests/helper', 'module/bootstrap', 'module/tabbed/tab', 'module/tabbed/panel', 'module/tabbed/tabbed'], function( $, news, Tab, Panel, Tabbed ) {

	module('news/tabbed');
    test('opening and closing panel', function() {

		ok(Panel, 'panel object exists');

		ok(new Panel('#panel-1'), 'new panel');

        var p1 = new Panel($('#panel-1'));

		p1.hide();
		equal($('#panel-1').attr('class'), 'closed');

		p1.show();
		equal($('#panel-1').attr( 'class'), 'open');
		
    });

	test('opening and closing tabs', function() {
	
		ok(Tab, 'tab object exists');
		
		ok(new Tab('#mostpopular', '#panel-3'), 'new tab');
	
		var t = new Tab('#mostpopular', '#panel-3');
		
        t.activate();
        equal($('#panel-3').attr('class'), 'open', 'panel shown via tab:mostpopular:activate event');
        
        t.deactivate();		
        equal($('#panel-3').attr('class'), 'closed', 'panel shown via tab:mostpopular:deactivate event');
        
        t.activate();
	
	});
	
	test('tabbed - a collection of tabs', function() {
	
		ok(Tabbed, 'tabbed object exists');
		
		var t = new Tabbed(['.tab-5 a', '.tab-6 a', '.tab-7 a'], ['#panel-5', '#panel-6', '#panel-7']);
	
		equal($('#panel-5').attr('class'), 'open', 'panel shown via tab:.tab-5 a:activate event');
		equal($('#panel-6').attr('class'), 'closed', 'panel hidden via tab:.tab-6 a:deactivate event');
		equal($('#panel-7').attr('class'), 'closed', 'panel hidden via tab:.tab-7 a:deactivate event');
		
		t.tabs[1].activate();
		equal($('#panel-5').attr('class'), 'closed', 'panel hidden via tab:.tab-5 a:deactivate event');
		equal($('#panel-6').attr('class'), 'open', 'panel shown via tab:.tab-6 a:activate event');
		equal($('#panel-7').attr('class'), 'closed', 'panel hidden via tab:.tab-7 a:deactivate event');
		
		t.tabs[2].activate();
		equal($('#panel-5').attr('class'), 'closed', 'panel hidden via tab:.tab-5 a:deactivate event');
		equal($('#panel-6').attr('class'), 'closed', 'panel hidden via tab:.tab-6 a:deactivate event');
		equal($('#panel-7').attr('class'), 'open', 'panel shown via tab:.tab-7 a:activate event');

		t.addTab(new Tab('.tab-8', '#panel-8'));
		t.tabs[3].activate();
		equal($('#panel-5').attr('class'), 'closed', 'panel hidden via tab:.tab-5 a:deactivate event');
		equal($('#panel-6').attr('class'), 'closed', 'panel hidden via tab:.tab-6 a:deactivate event');
		equal($('#panel-6').attr('class'), 'closed', 'panel hidden via tab:.tab-7 a:deactivate event');
		equal($('#panel-8').attr('class'), 'open', 'panel shown via tab:.tab-8 a:activate event');

	});
	
	test('tabs - creating with $', function() {


		

		var t = new Tabbed($('#tabs-links2 a'), $('.panel'));
		
		equal($('#panel-25').hasClass('open'), true, 'panel shown via tab:.tab-25 a:activate event');
		equal($('#panel-26').hasClass('open'), false, 'panel hidden via tab:.tab-26 a:deactivate event');

	});

});

