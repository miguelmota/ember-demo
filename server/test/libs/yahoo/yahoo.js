var yahoo = require('../../../libs/yahoo');

exports.getSnapshot = function(test) {

    var opts = {
        symbols: ['GOOG']
    };

    yahoo.getSnapshot(opts, function(err, quotes) {
        console.log(err, quotes);
        test.equal(err, null);
        test.ok(quotes);
        test.done();
    });
};
