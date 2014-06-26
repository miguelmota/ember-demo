moduleForModel('stock', 'Stock Model', {

});

test('Stock Model', function() {
    var stock = this.subject({ id: 'GOOG' });
    //equal(stock.get('symbol'), 'GOOG');
    //console.log(stock.get('data'));
    //equal(stock.get('data'), 'GOOG');

    var goog = Ember.get(EmberExample.Stock, 'GOOG');
    console.log(goog);
    equal(1,1);
});
