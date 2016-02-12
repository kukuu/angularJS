// Set of dependencies
// This gives us flexibility to change dependencies with a common API e.g. Bonzo --> jQuery
define(['js!vendor/events/eventEmitter.js!order', 'js!module/fontface.js!order', 'vendor/ender/bonzo', 'vendor/ender/qwery-mobile'], function(placeholder, ff, bonzo, qwery){

	// monkey patch emit for console.
	// @todo log only on non-live
	var pubsub = new EventEmitter();
	var oldEmit = pubsub.emit;
	pubsub.emit = function(type, args){
		if (type !== 'newListener'){
			//call console.info method and pass function parameters for debugging
			//console.log(type, args);
		}
		return oldEmit(type, args);
	};


    var bat2 = {//changed "news" to "bat2"
        pubsub: pubsub,
        $: function(selector) {
            return bonzo(qwery(selector));
        }
    };

    return bat2;
});
