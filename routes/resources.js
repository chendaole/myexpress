var express = require('express');
var router = express.Router();

var weather = require('../public/json/test.json');
var slideData  = require('../public/json/home-sildedata.json');

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.contentType('json');
  res.send(weather);
  res.end()
});

router.get('/home-slidedata',function(req, res ,next){
  console.log('请求的URL路径:', req.originalUrl);
  console.log('ID:', req.params);
  res.contentType('json');
  res.send(slideData);
  res.end();
});

module.exports = router;
