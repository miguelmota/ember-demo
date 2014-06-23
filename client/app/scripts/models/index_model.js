EmberExample.Index = DS.Model.extend({
    title: DS.attr('String')
});

EmberExample.Index.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

EmberExample.Index.FIXTURES = [];
