// loads all the module dependencies for every test
define(['vendor/ender/reqwest', 'vendor/ender/bonzo', 'vendor/ender/qwery-mobile'], function (reqwest, bonzo, qwery) {

    var $ = function (selector) {
		return bonzo(qwery(selector));
	}
    
    $.ajax = reqwest;
    
    // mock the window.console in case firebug etc. isn't open & the browser complains
    if ("undefined" === typeof window.console) {
        window.console = {
        	"log": function() { }
    	};
	};
    
    // polyfill the trim function for old Safari's etc.
	if ("undefined" === typeof String.trim) {   
    	String.prototype.trim = function() {
    		return this.replace(/^\s+|\s+$/g,"");
		}
	}
	
    return $;
   
    
});