EmberExample.StocksController = Ember.ArrayController.extend({
    needs: ['stock'],

    symbol: function() {
        return this.get('controllers.stock').get('symbol');
    }.property('controllers.stock.symbol'),

    months: function() {
        return _r.param('months') || 1;
    }.property(),

    actions: {
        fetch: function() {
            //this.transitionToRoute('stock', this.get('symbol'));

            window.location.href = ['/#/stocks/', this.get('symbol'), '/?months=', this.get('months')].join('');
        }
    }
});

