define(['module/tabbed/tab'], function (Tab){

    var tabbed = function(t, p) {
    
        this.tabs = [];
        var emitterId = ''; // WIP
        
        for(var i = 0, len = t.length; i < len; i++) {
            this.tabs.push(new Tab(t[i], p[i], emitterId));
        }
        
        this.tabs[0].activate();         
       
    };
    
    tabbed.prototype.addTab = function(tab) {
        this.tabs.push(tab);
        console.log(tab);
    };

    return tabbed;

});