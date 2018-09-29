var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

  // your server code here
});

    router.get('/code',function (req,res){
        res.send('OK')
  //res.send('respond with a resource');
});


module.exports = router;
