define(['vendor/ender/bonzo', 'vendor/ender/qwery-mobile'], function (bonzo, qwery){

    function $(selector) {
        return bonzo(qwery(selector));
    }

    /**
     * Represents a _thing_ that can be shown or hidden (or open or closed), typically controlled by tabs
     */    
    var panel = function(element){
           
        this.hide = function(){
            element.removeClass('open');
            element.addClass('closed');
        };   

        this.show = function(){
            element.removeClass('closed');
            element.addClass('open');
        };
                
    };

    return panel;

});