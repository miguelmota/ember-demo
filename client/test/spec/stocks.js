/*
moduleForModel('stock', 'Stock Model', {
  needs: ['model:stock']
  });
  */

moduleFor('controller:stocks', 'Stocks Controller', {
  needs: ['controller:stock']
  });

test('id', function() {
    //var stock = this.subject({id: 'GOOG'})
    //var stocks = this.store.find('stock', {id: 'GOOG'});
  //console.log(Object.keys(this));
  //console.log(Object.keys(this.store));
  Ember.run(function() {

  });


  // get the controller instance
  var ctrl = this.subject();
   equal(ctrl.get('months'), 1);

  //console.log(stocks);
  //console.log(stock.attributes);
  //equal(stock.get('id'), 'GOOG');
  equal(1,1);
});

