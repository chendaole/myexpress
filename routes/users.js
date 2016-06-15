var express = require('express');
var weather = require('../public/json/weather.json');
var router = express.Router();


/* GET users listing. */
router.get('/weathers', function(req, res, next) {
  res.contentType('json');
  res.send(weather);
  res.end()
});

module.exports = router;
