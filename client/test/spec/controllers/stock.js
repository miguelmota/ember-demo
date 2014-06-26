moduleFor('controller:stocks', 'Stocks Controller', {
  needs: ['controller:stock']
});

test('Stock Controller', function() {
    var ctrl = this.subject();
    equal(ctrl.get('months'), 1);
});

