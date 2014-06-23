var _      = require('lodash');
var moment = require('moment');
var rutil  = require('rutil');
var yahoo  = require('../../libs/yahoo');

function Controller() {

}

Controller.prototype.getStocks = function(opts, cb) {
    opts || (opts = {});

    var required = ['symbol'];

    var valid = _.every(required, function(v, i) {
        return _.keys(opts).indexOf(v) > -1;
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

    yahoo.getStocks(
        _.defaults(_.pick(opts, _.keys(defaults)), defaults),
        function(err, quotes) {
            if (err) return cb(err);
            quotes = _.map(quotes, function(o, i) {
                o.date = moment(o.date).format('YYYY-MM-DD');
                return o;
            });
            cb(null, quotes);
        }
    );
};

module.exports = new Controller();
