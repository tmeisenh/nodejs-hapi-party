'use strict';

const HelloHandler = require('./hello-handler');

function register(server, options, next) {
  server.route([
    {
      method: 'GET',
      path: '/hello',
      handler: function(request, reply) {
        let hh = new HelloHandler();
        hh.hello(request, reply);
      },
      config: {
        description: 'Get hello',
        notes: 'Provides hello world',
        tags: ['api']
      }
    },
    {
      method: 'GET',
      path: '/bye',
      handler: function(request, reply) {
        let hh = new HelloHandler();
        hh.bye(request, reply);
      },
      config: {
        description: 'Get bye',
        notes: 'Provides goodbye world',
        tags: ['api']
      }
    }
  ]);

  return next();
}

register.attributes = {
  name: 'hello'
};

module.exports = register;
