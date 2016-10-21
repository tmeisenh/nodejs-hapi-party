"use strict";

const mocha = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const should = chai.should();
const expect = chai.expect;

const HelloHandler = require('../src/hello/hello-handler');

describe('HelloHandler', function(){
  let sandbox;
  let reply;
  let request;

  const testObject = new HelloHandler();

  beforeEach(function () {
    sandbox = sinon.sandbox.create();
    request = sandbox.spy();
    reply = sandbox.spy();
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('hello', function(){
    it('should return hello world', () => {
      testObject.hello(request, reply);
      reply.calledWithExactly({msg: 'hello world!'}).should.be.true;

      request.called.should.be.false;
    })
  })

  describe('bye', function(){
    it('should return good bye world', () => {
      testObject.bye(request, reply);
      reply.calledWithExactly({msg: 'good bye world!'}).should.be.true;

      request.called.should.be.false;
    })
  })
});
