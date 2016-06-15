var express = require('express');
var index = express.Router();
var music = require('./music.js');
var router = require('./index.js');
var users = require('./users.js');

router.use(function(req ,res ,next){
    console.log('time:',Date.now());
   /* console.log(req);*/
    next();
});

router.use('/',index);

router.use('/resources/music',music);

router.use('/resources/json',users,function(){
    console.log("进入该路由");
});

module.exports = router;