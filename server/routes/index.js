var stocksController = require('../controllers/stocks/index');

module.exports = function(router) {
    require('./home/index')(router);
    require('./stocks/index')(router, stocksController);
};
