"use strict";

var Hapi = require('hapi');
const config = require('./src/config');
var hello = require('./src/hello');
var echo = require('./src/echo');

var server = new Hapi.Server();

server.connection({
  host: config.host,
  port: config.port
});

server.register([
  {
    register: hello
  },
  {
    register: echo 
  }
], function(err) {
  'use strict';
  if (err) {
    console.error(err); // eslint-disable-line no-console
  } else {
    server.start(function() {
      console.log('Server started at: ' + server.info.uri); // eslint-disable-line no-console
    });
  }
});
