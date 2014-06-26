var _      = require('lodash');
var __      = require('underscore-contrib');
_.mixin(__);
var moment = require('moment');
var rutil  = require('rutil');
var yahoo  = require('../../libs/yahoo');
var RSVP   = require('rsvp');

function uppercase(s) {
    if (!s) return s;
    return s.toUpperCase();
}

function Controller() {

}

Controller.prototype.getStocks = function(opts, cb) {
    opts || (opts = {});

    var required = ['symbol'];

    opts.symbol = uppercase(opts.symbol);

    var valid = _.every(required, function(v, i) {
        return ~_.keys(opts).indexOf(v);
    });

    if (!valid) {
        return cb(new Error('Invalid parameters'));
    }

    var now = new Date();

    if (opts.months) {
        opts.months = _.parseInt(opts.months);
        opts.from = moment(now).subtract('months', opts.months).format('YYYY-MM-DD')
    }

    var defaults = {
        symbol: null,
        from: moment(now).subtract('days', 7).format('YYYY-MM-DD'),
        to: moment(now).format('YYYY-MM-DD')
    };

    function getQuotes() {
        var deferred = RSVP.defer();
        yahoo.getQuotes(
            _.defaults(_.pick(opts, _.keys(defaults)), defaults),
            function(err, quotes) {
                if (err) return deferred.reject(err);
                quotes = _.map(quotes, function(o, i) {
                    o.date = moment(o.date).format('YYYY-MM-DD');
                    return o;
                });
                deferred.resolve(quotes);
            }
        );
        return deferred.promise;
    }

    function getSnapshot() {
        var deferred = RSVP.defer();
        yahoo.getSnapshot(_.extend({},{symbols: _.cons(opts.symbol)}), function(err, quotes) {
            if (err) return deferred.reject(err);
            deferred.resolve(quotes);
        });
        return deferred.promise;
    }

    RSVP.allSettled([getQuotes(), getSnapshot()]).then(function(array) {
        cb(null, _.reduce(array, function(a,o,i) {
           if (o.state === 'fulfilled') {
                if (o.value[opts.symbol]) {
                    o.value.snapshot = o.value[opts.symbol];
                } else {
                    o.value.quotes = o.value;
                }
                a = _.extend(a, o.value);
            }
            return a;
        }, {}))
    })
};

module.exports = new Controller();
