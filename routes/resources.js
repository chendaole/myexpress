var express = require('express');
var db = require('nano')('http://localhost:5984/testdb');

var router = express.Router();

var weather = require('../public/json/test.json');
var slideData  = require('../public/json/home-sildedata.json');
var cardsData = require('../public/json/home-cardsdata.json');

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.contentType('json');
  res.send(weather);
  res.end()
});

router.get('/home-slidedata',function(req, res ,next){
  console.log("请求获取主页相册图片");
  console.log('请求的URL路径:', req.originalUrl);
  res.contentType('json');
  res.send(slideData);
  res.end();
});

router.get('/home-cardsdata',function(req, res, next){
  console.log("请求获取主页卡片信息");
  console.log('请求的URL路径:', req.originalUrl);
  res.contentType('json');
  res.send(cardsData);
  res.end();
});

router.get('/couchDB',function(req ,res,next){
  db.get('62c71053fc481d89ab90cda75100035e', function (error, body, headers) {
    if(error) { return res.send(error.message, error['status-code']); }
    console.log(body);
    res.send(body, 200);
  });
});

module.exports = router;
