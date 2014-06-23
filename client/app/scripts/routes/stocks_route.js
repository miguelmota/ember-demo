EmberExample.StocksRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.findAll('stock');
    },

    setupController: function(controller, model) {
        controller.set('model', model);
    }
});

