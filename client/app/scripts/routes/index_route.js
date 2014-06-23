EmberExample.IndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('index', params.idj);
  },

  beforeModel: function() {
      this.transitionTo('stocks');
  }
});

