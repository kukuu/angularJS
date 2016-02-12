define(['module/bootstrap', 'vendor/ender/reqwest'], function(news, reqwest) {


    var Poller = function(updateFrequency) {
        if (Object.prototype.toString.call(updateFrequency) !== '[object Number]'){
            throw new Error('Update frequency must be a number');
        }
        this.updateFrequency = updateFrequency;
        this.polling = false;

    };

    Poller.prototype = {

        setUrl: function(url) {
            this.url = url;
        },

        setPollingTime: function(updateFrequency) {
            this.updateFrequency = updateFrequency;
        },

        startPolling: function(options) {
            this.polling = true;
            this.options = options || {};
            this.poll();
        },

        stopPolling: function() {
            this.polling = false;
        },

        poll: function() {

            if(this.polling) {

                var that = this;
                reqwest({
                    url: that.url,
                    type: "json",
                    method: "get",
                    success: function(data) {

                        if (that.options.success) {
                            var url = that.options.success(data);
                            that.url = url || that.url;
                        }

                        if ('pollPeriod' in data) {
                            // Kill switch
                            if (data.pollPeriod === 0) {
                                that.stopPolling();
                            } else {
                                that.updateFrequency = data.pollPeriod;
                            }
                        }

                        that.rePoll();
                    },
                    error: function(e) {

                        if (that.options.error) {
                            that.options.error(e);
                        }

                        that.rePoll();
                    }
                });
            }
        },

        rePoll: function(){

            var that = this;
            setTimeout(function() {
                that.poll();
            }, that.updateFrequency);

        }

    };


    return Poller;

});
