var express = require('express');
var index = require('./index');
var horses = require('./horses');

module.exports = function(app){
  app.use('/', index);
  app.use('/horses', horses);
}