var _            = require('lodash');
var moment       = require('moment');
var yahooFinance = require('yahoo-finance');

function Yahoo() {

}

Yahoo.prototype.getStocks = function(opts, cb) {
    opts || (opts = {});

    var now = moment();

    var defaults = {
        symbol: null,
        from: null,
        to: null
    };

    yahooFinance.historical(
        _.defaults(opts, defaults),
        function (err, quotes, url, symbol) {
            if (err) return cb(err);
            return cb(null, quotes);
        }
    );

};

module.exports = new Yahoo();
