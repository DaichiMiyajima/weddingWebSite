var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/appform', function(req, res, next) {
  console.log("appform");
  res.render('appform', { title: 'Express' });
});

module.exports = router;
