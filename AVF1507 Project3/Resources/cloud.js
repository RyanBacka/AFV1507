 var Arrow = require('arrow');
 var server = new Arrow();
 // since the API relies on a model,
 // need to wait for the model to be loaded before creating the API
 server.on('starting', function() {
     var fooAPI = new Arrow.API({
         group: 'foo',
         path: '/api/foo/',
         method: 'GET',
         description: 'Get all the Foo objects',
         model: 'foo',
         action: function(request, response, next) {
             request.model.findAll(function(err, results) {
                 if (err) {
                     next(err);
                 } else {
                     next(null, results);
                 }
             });
         }
     }, server.config, server);
     server.add(fooAPI);
     fooAPI.bind(server.app);
 });
 server.start();