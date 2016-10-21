"use strict";

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const Pack = require('./package');
const Config = require('./src/config');
const Hello = require('./src/hello');
const Echo = require('./src/echo');

var server = new Hapi.Server();

server.connection({
  host: Config.host,
  port: Config.port
});

const options = {
  info: {
    'title': 'Test API Documentation',
    'version': Pack.version,
  }
};

server.register([
  Inert,
  Vision,
  {
    'register': HapiSwagger,
    'options': options
  },
  Hello,
  Echo
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
