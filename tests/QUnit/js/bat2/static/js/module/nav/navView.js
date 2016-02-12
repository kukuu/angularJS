//changed news to bat2
define(["module/bootstrap"], function (bat2) {

    var navActivator,
        navContainer,
        classClosed = 'nav-closed',
        classOpen = 'nav-open';

    var navView = function() {

        navContainer = document.getElementById('site-nav');
        navActivator = document.getElementsByTagName('body')[0];
        navActivator.className = classClosed;

        // move nav
        document.getElementById('site-nav-panel')
                .firstChild.appendChild(navContainer);

        // nav click
        document.getElementById('nav-button').addEventListener('click',function(e) {
            news.pubsub.emit('nav:toggle');
            e.preventDefault();
            return false;
        }, false);

    };

    navView.prototype.open = function(){
        navActivator.className = classOpen;
        navContainer.focus();
    };

    navView.prototype.close = function(){
        navActivator.className = classClosed;
        navContainer.focus();
    };

    return navView;

});
