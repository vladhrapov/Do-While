var express = require('express');
var router = express.Router();

//todo: remove this route, its not useful and created only for test
router.get('/', function(req, res, next) {
  res.json({
    text : 'hello world!',
    description: 'this is test route'
  })
});

module.exports = router;
