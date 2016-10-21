"use strict";

class HelloHandler {

  hello(request, reply) {
    reply({msg: 'hello world!'});
  }

  bye(request, reply) {
    reply({msg: 'good bye world!'});
  }
}

module.exports = HelloHandler;
