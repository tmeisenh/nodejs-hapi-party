"use strict";

const mocha = require('mocha');
const chai = require('chai');
const should = chai.should();

const config = require('../src/config');


describe('config', function(){

  const testObject = config

  it('should have the right host', () => {
    testObject.host.should.equal('0.0.0.0');
  })

  it('should have the right port', () => {
    testObject.port.should.equal(3131);
  })
})
