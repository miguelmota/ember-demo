EmberExample.LineChartComponent = Ember.Component.extend({
    attributeBindings: ['className', 'data'],

    columns: function() {
        var _this = this;

        return [
            _this.get('columns')
        ];
    }.property('columns'),

    draw: function() {
        var _this = this;

        _this.get('chart').load({
            columns: _this.get('columns')
        });
    }.observes('columns'),

    didInsertElement: function() {
        var _this = this;

        var chart = c3.generate({
            bindto: ['.',_this.get('className')].join(''),
            data: {
                x: 'x',
                columns: _this.get('columns')
            },
            axis: {
                x: {
                    type : 'timeseries'
                },
                y: {
                    tick: {
                        format: d3.format('$,')
                    }
                }
            },
            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            }
        });

        _this.set('chart', chart);
    }
});
