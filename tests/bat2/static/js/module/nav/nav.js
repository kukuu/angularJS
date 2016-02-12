/*jshint expr:true */
define(["module/bootstrap", "module/nav/navView"], function (bat2, navView) {

    // model - var n = new nav();//We create an instance of navView (Object)

    var nav = function(){
    
        var view = new navView();
    
        var state = false; // true = on, false = off

        bat2.pubsub.on('nav:open', function () {
            state = true;
            view.open();
        });

        bat2.pubsub.on('nav:close', function () {
            state = false;
            view.close();
        });

        bat2.pubsub.on('nav:toggle', function () {
            (state) ? bat2.pubsub.emit('nav:close') : bat2.pubsub.emit('nav:open');
        });
        
        bat2.pubsub.on('tabs:click', function() {
            bat2.pubsub.emit('nav:close');
        });
        
    };
    
    nav.prototype.open = function() {
        bat2.pubsub.emit('nav:open');
    };
    
    nav.prototype.close = function() {
        bat2.pubsub.emit('nav:close');
    };
    
    nav.prototype.toggle = function() {
        bat2.pubsub.emit('nav:toggle');
    };
    
    return nav;
    
});
    


