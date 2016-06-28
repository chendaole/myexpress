var express = require('express');
var router = express.Router();

var weather = require('../public/json/test.json');
var homeDate  = require('../public/json/homeData.json');

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.contentType('json');
  res.send(weather);
  res.end()
});

router.get('/homeData',function(req, res ,next){
  res.contentType('json');
  res.send(homeDate);
  res.end();
});

module.exports = router;
