EmberExample.Router.map(function () {

  this.resource('stocks', function(){
    this.resource('stock', { path: '/:id' }, function() {});
  });

});
