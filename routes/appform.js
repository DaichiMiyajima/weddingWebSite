var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();


/* GET home page. */
router.post('/appform', function(req, res, next) {
  console.log("appform-start");
  console.log(req.body.formName);
  console.log(req.body.formEmail);
  console.log(req.body.formPhone);
  console.log(req.body.formMessage);
  res.render('index');
  console.log("appform-end");
});

module.exports = router;
