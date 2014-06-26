var _            = require('lodash');
var moment       = require('moment');
var yahooFinance = require('yahoo-finance');

function Yahoo() {

}

Yahoo.prototype.getQuotes = function(opts, cb) {
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
            console.log(url);
            if (err) return cb(err);
            return cb(null, quotes);
        }
    );

};

Yahoo.prototype.getSnapshot = function(opts, cb) {
    opts || (opts = {});

    var defaults = {
        symbols: [],
          fields: ['s', 'l1', 'd1', 't1', 'c1', 'o', 'h', 'g']
    };

    yahooFinance.snapshot(
        _.defaults(opts, defaults),
        function (err, quotes, url, symbol) {
            console.log(url);
            if (err) return cb(err);
            return cb(null, quotes);
        }
    );

};

module.exports = new Yahoo();
