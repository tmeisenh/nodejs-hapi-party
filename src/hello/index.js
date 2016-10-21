'use strict';

const HelloHandler = require('./hello-handler');

function register(server, options, next) {
  server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
      let hh = new HelloHandler();
      hh.hello(request, reply);
    }
  });

  return next();
}

register.attributes = {
  name: 'hello'
};

module.exports = register;
