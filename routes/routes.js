var express = require('express');
var index = express.Router();
var music = require('./music.js');
var router = require('./index.js');
var resources = require('./resources.js');

router.use(function(req ,res ,next){
    console.log('time:',Date.now());
   /* console.log(req);*/
    next();
});

router.use('/',index);

router.use('/resources/music',music);

router.use('/resources/json',resources,function(){
    console.log('Time:'+Date.now()+'\n'+'有访问');
});

module.exports = router;