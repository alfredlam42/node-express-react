var port = 1234;
var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');
var Sessions = require('sessions');

var sessionHandler = new Sessions();

http.createServer(function(req, res){
  var session = sessionHandler.httpRequest(req, res);
});

require('dotenv').load();

var app = express();

require('./app/controllers/main-controller')(app);

app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static('./public'));


app.listen(port);
console.log('Server running on http://localhost:' + port);

module.exports = app;