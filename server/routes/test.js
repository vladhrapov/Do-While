var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    text : 'hello world!',
    description: 'this is test route'
  })
});

module.exports = router;
