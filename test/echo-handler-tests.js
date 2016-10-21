"use strict";

const mocha = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const should = chai.should();
const expect = chai.expect;

const EchoHandler = require('../src/echo/echo-handler');

describe('EchoHandler', function(){
  let sandbox;
  let reply;
  let request;

  const testObject = new EchoHandler();

  beforeEach(function () {
    sandbox = sinon.sandbox.create();
    reply = sandbox.spy();
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('echo', function(){
    it('should echo the parameter', () => {
      let str = 'blah';
      request = {params: {str: str }};
      testObject.echo(request, reply);

      reply.calledWithExactly({msg: str}).should.be.true;
    })
  })
})
