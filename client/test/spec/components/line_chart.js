moduleForComponent('line-chart');

test('Line Chart', function(){

  var component = this.subject();

  Ember.run(function(){
    component.set('className','someclass');
  });

  equal(this.$().attr('class'), 'someclass');
});
