EmberExample.IndexController = Ember.ObjectController.extend({
    fetch: function() {
        this.transitionTo('stock', this.get('symbol'));
    }
});

