EmberExample.StockController = Ember.ObjectController.extend({
    needs : ['stocks'],
    symbol: function() {
        return  this.get('sym').symbol;
    }.property('content'),
    months: function() {
        var months = _.parseInt(this.get('controllers.stocks').get('months'));
        if (months > 1 && months < 12) {
            return [months, 'months'].join(' ');
        } else if (months <= 1) {
            return [months, 'month'].join(' ');
        } else if (months === 12) {
            return [1, 'year'].join(' ');
        } else {
            return null;
        }
    }.property('model'),
    sym: function() {
        var defaults = {
            symbol: '',
            data: {}
        };

        var o = _.defaults({}, defaults);

        try {
            o = _.defaults(this.get('model').objectAt(this.get('model').get('length') - 1).toJSON(), defaults);
        } catch(e) {
            console.error(e);
        }

        return o;
    }.property('model'),
    columns: function() {
        var data = this.get('sym').data.quotes;

        function select(prop) {
            return function(o, i) {
                return o[prop];
            };
        }

        function cols(data /*, props */) {
            var props = _.rest(arguments);
            return _.reduce(props, function(acc, v, i) {
               acc.push([_r.capitalize(v)].concat(_.map(data, select(v))));
               return acc;
            },[]);
        }

        var ret = cols(data, 'open','close','high','low');

        ret.unshift(['x'].concat(_.map(data, function(o,i) { return o.date; })));

        return ret;
    }.property('model'),
    ticks: function() {
        var data = this.get('sym').data.quotes;

        var ticks = _.map(data, function(o,i) {
            return moment(Date.parse(o.date)).format('MM/DD');
        });

        return ticks;

    }.property('model')
});

