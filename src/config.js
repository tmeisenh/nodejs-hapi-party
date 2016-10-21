"use strict";

class Config {
  constructor() {
    this.host = "0.0.0.0";
    this.port = 3131;
  }
}

const config = new Config();
module.exports = config;
