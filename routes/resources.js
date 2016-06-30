var express = require('express');
var db = require('nano')('http://localhost:5984/onedaypublic');

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
  res.contentType('json');
  res.send(slideData);
  res.end();
});

router.get('/home-cardsdata-test',function(req, res, next){
  console.log("本地Json");
  res.contentType('json');
  res.send(cardsData);
  res.end();
});

router.get('/couchDB-home-cardsdata',function(req ,res,next){
  console.log("ready read DB")
  db.get('_design/cdl/_view/publiclog', function (error, body, headers) {
    if(error) { return res.send(error.message, error['status-code']); }
    console.log("success ! GET DB CardsData");
    res.send(body, 200);
  });
});

module.exports = router;
