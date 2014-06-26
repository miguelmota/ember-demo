var request = require('request');
var assert = require('assert');
var _u = require('rutil');
var moment = require('moment');

exports.getData = function(test) {

    var startDate = moment().subtract('days', 30).format();
    var endDate = moment().format();
    var symbol = 'GOOG';

    console.log(startDate, endDate);

    var params = {
        Normalized: true,
        StartDate: startDate,
        EndDate: endDate,
        EndOffsetDays: 0,
        NumberOfDays: 20,
        DataPeriod: 'Day',
        Elements: [
            {
                Symbol: symbol,
                Type: 'price',
                Params: ['ohlc']
            }
        ]
    };

    var url = ['http://dev.markitondemand.com/Api/v2/InteractiveChart/json','?', 'parameters=', encodeURIComponent(JSON.stringify(params))].join('');

    console.log(url);

    request(url, function(err, res, body) {
        console.log(err, body);
        test.equal(err, null);
        test.ok(body);
        test.done();
    });
};
