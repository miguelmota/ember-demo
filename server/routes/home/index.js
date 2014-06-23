module.exports = function(router) {
    router.get('/', function(req, res) {
        res.json({project: 'ember-example'});
    });
};
