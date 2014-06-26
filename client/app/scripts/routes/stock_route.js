EmberExample.StockRoute = Ember.Route.extend({
    model: function(params) {
        var _this = this;
        var controller = _this.controllerFor('stocks');
        return _this.store.find('stock', _.extend({}, params, {months: _r.param('months') || controller.get('months')}));
    },

    setupController: function(controller, model) {
        controller.set('model', model);
    }
});
