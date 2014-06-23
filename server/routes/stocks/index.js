var _ = require('lodash');

module.exports = function(router, controller) {
    function routeHandler(req, res) {
        res.header('Access-Control-Allow-Origin', '*');

        var query = req.query;
        var params = req.params;

        var opts = _.extend({}, query, params);
        opts.symbol || (opts.symbol = opts.id);

        if (!opts.symbol) {
            return res.json({stock: []});
        }

        controller.getStocks(opts, function(err, quotes) {
            if (err || !quotes) return fail(err);
            return done(quotes);
        });

        function fail(err) {
            res.json({errors: {message: err}});
        }

        function done(data) {
            var resp = {
                stock: [{
                    id: opts.symbol,
                    symbol: opts.symbol,
                    data: _.extend(data)
                }]
            };
            res.json(resp);
        }
    }

    router.get('/api/1/stocks/:symbol?', routeHandler);
};
