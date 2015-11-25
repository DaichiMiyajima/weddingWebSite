var express = require('express');
var router = express.Router();
var mysql = require(__dirname + '/../lib/mysql.js');

/* GET home page. */
router.post('/facebook', function(req, res, next) {

mysql.insertAttendance(req.body.formAttendance,req.body.formFriends,req.body.formName,req.body.formEmail,'',req.body.formMessage,req.body.picture,req.body.formFacebookId);
    res.render('index');
});

module.exports = router;
