var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('horses/index');
})

router.get('/name', function(req, res, next){
  res.send('My horse is named Jupiter.');
})

module.exports = router;