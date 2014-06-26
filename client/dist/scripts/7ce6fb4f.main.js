!function(){window.EmberExample=Ember.Application.create()}(),function(){EmberExample.IndexController=Ember.ObjectController.extend({fetch:function(){this.transitionTo("stock",this.get("symbol"))}})}(),function(){EmberExample.IndicesController=Ember.ObjectController.extend({})}(),function(){EmberExample.StockController=Ember.ObjectController.extend({needs:["stocks"],symbol:function(){return this.get("sym").symbol}.property("content"),months:function(){var a=_.parseInt(this.get("controllers.stocks").get("months"));return a>1&&12>a?[a,"months"].join(" "):1>=a?[a,"month"].join(" "):12===a?[1,"year"].join(" "):null}.property("model"),sym:function(){var a={symbol:"",data:{}},b=_.defaults({},a);try{b=_.defaults(this.get("model").objectAt(this.get("model").get("length")-1).toJSON(),a)}catch(c){console.error(c)}return b}.property("model"),columns:function(){function a(a){return function(b){return b[a]}}function b(b){var c=_.rest(arguments);return _.reduce(c,function(c,d){return c.push([_r.capitalize(d)].concat(_.map(b,a(d)))),c},[])}var c=this.get("sym").data.quotes,d=b(c,"open","close","high","low");return d.unshift(["x"].concat(_.map(c,function(a){return a.date}))),d}.property("model"),ticks:function(){var a=this.get("sym").data.quotes,b=_.map(a,function(a){return moment(Date.parse(a.date)).format("MM/DD")});return b}.property("model")})}(),function(){EmberExample.StocksController=Ember.ArrayController.extend({needs:["stock"],symbol:function(){return this.get("controllers.stock").get("symbol")}.property("controllers.stock.symbol"),months:function(){return _r.param("months")||1}.property(),actions:{fetch:function(){window.location.href=["/#/stocks/",this.get("symbol"),"/?months=",this.get("months")].join("")}}})}(),function(){EmberExample.ApplicationAdapter=DS.FixtureAdapter}(),function(){EmberExample.Index=DS.Model.extend({title:DS.attr("String")}),EmberExample.Index.reopen({attributes:function(){var a=this;return Ember.keys(this.get("data")).map(function(b){return Em.Object.create({model:a,key:b,valueBinding:"model."+b})})}.property()}),EmberExample.Index.FIXTURES=[]}(),function(){EmberExample.Stock=DS.Model.extend({symbol:DS.attr(),data:DS.attr()}),EmberExample.StockAdapter=DS.RESTAdapter.extend({namespace:"api/1",host:"http://moogs:8242"}),EmberExample.StockSerializer=DS.RESTSerializer.extend({primaryKey:"id"})}(),function(){EmberExample.ApplicationRoute=Ember.Route.extend({model:function(){return[]}})}(),function(){EmberExample.IndexRoute=Ember.Route.extend({model:function(a){return this.get("store").find("index",a.idj)},beforeModel:function(){this.transitionTo("stocks")}})}(),function(){EmberExample.IndicesRoute=Ember.Route.extend({model:function(){return this.get("store").find("index")}})}(),function(){EmberExample.StockRoute=Ember.Route.extend({model:function(a){var b=this,c=b.controllerFor("stocks");return b.store.find("stock",_.extend({},a,{months:_r.param("months")||c.get("months")}))},setupController:function(a,b){a.set("model",b)}})}(),function(){EmberExample.StocksRoute=Ember.Route.extend({model:function(){return this.store.findAll("stock")},setupController:function(a,b){a.set("model",b)}})}(),function(){EmberExample.IndexView=Ember.View.extend({})}(),function(){EmberExample.IndicesView=Ember.View.extend({})}(),function(){EmberExample.RadioButton=Ember.View.extend({tagName:"input",type:"radio",attributeBindings:["name","type","value","checked:checked:"],click:function(){this.set("selection",this.$().val())},checked:function(){return this.get("value")==this.get("selection")}.property()})}(),function(){EmberExample.StockView=Ember.View.extend({})}(),function(){EmberExample.StocksView=Ember.View.extend({})}(),function(){EmberExample.LineChartComponent=Ember.Component.extend({attributeBindings:["className","data"],columns:function(){var a=this;return[a.get("columns")]}.property("columns"),draw:function(){var a=this;a.get("chart").load({columns:a.get("columns")})}.observes("columns"),didInsertElement:function(){var a=this,b=c3.generate({bindto:[".",a.get("className")].join(""),data:{x:"x",columns:a.get("columns")},axis:{x:{type:"timeseries"},y:{tick:{format:d3.format("$,")}}},grid:{x:{show:!0},y:{show:!0}}});a.set("chart",b)}})}(),function(){EmberExample.Router.map(function(){this.resource("stocks",function(){this.resource("stock",{path:"/:id"},function(){})})})}();