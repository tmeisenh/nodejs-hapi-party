'use strict';

const EchoHandler = require('./echo-handler');

function register(server, options, next) {
  server.route({
    method: 'GET',
    path: '/echo/{str}',
    handler: function(request, reply) {
      let eh = new EchoHandler();
      eh.echo(request, reply);
    }
  });

  return next();
}

register.attributes = {
  name: 'echo'
};

module.exports = register;
