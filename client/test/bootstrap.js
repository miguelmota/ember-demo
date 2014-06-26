__karma__.loaded = function() {};

var EmberExample = window.EmberExample = Ember.Application.create();
emq.globalize();
EmberExample.setupForTesting();
EmberExample.injectTestHelpers();
setResolver(Ember.DefaultResolver.create({ namespace: EmberExample }));

//this gate/check is required given that standard practice in Ember tests to is to call
//Ember.reset() in the afterEach/tearDown for each test.  Doing so, causes the application
//to 're-initialize', resulting in repeated calls to the initialize function below
var karma_started = false;
EmberExample.initializer({
   name: "run tests",
   initialize: function(container, application) {
       if (!karma_started) {
           karma_started = true;
           __karma__.start();
       }
   }
});
