define(['module/bootstrap', 'vendor/ender/bonzo', 'vendor/ender/qwery-mobile', 'module/tabbed/panel'], function (news, bonzo, qwery, Panel){

    function $(selector) {
        return bonzo(qwery(selector));
    }

    function arrayLike(o) {
        return (typeof o === 'object' && isFinite(o.length));
    }
    
    function getNode(elm) {
        return (arrayLike(elm)) ? $(elm[0]) : $(elm);
    }

    var tab = function(t, p, emitterId){
        
        this.emitterId = emitterId || '';
        this.t = getNode(t);
        this.p = new Panel(getNode(p));
        this.selected = false;
        var self = this;
        
        this.t[0].addEventListener("click", function(e) {
            e.preventDefault();
            news.pubsub.emit('tabs:click');
            if (!this.selected) {
                self.activate();
            }
        }, true);
        
        news.pubsub.on('tabs:deactivate'+this.emitterId, function(){
            self.deactivate();
        });

    };

    tab.prototype.activate = function() {
        this.selected = true;
        news.pubsub.emit('tabs:deactivate'+this.emitterId);
        this.t.addClass('open');
        this.p.show();
    };

    tab.prototype.deactivate = function() {
        this.selected = false;
        this.t.removeClass('open');
        this.p.hide();
    };
    
    return tab;

});