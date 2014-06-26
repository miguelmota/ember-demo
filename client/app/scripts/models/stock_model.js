EmberExample.Stock = DS.Model.extend({
    symbol: DS.attr(),
    data: DS.attr()
});

EmberExample.StockAdapter = DS.RESTAdapter.extend({
    namespace: 'api/1',
    host: 'http://moogs:8242',
});

EmberExample.StockSerializer = DS.RESTSerializer.extend({
    primaryKey: 'id'
});
