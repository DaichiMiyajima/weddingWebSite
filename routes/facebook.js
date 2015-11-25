var express = require('express');
var router = express.Router();
var mysql = require(__dirname + '/../lib/mysql.js');

/* GET home page. */
router.post('/facebook', function(req, res, next) {
console.log(req.body.formAttendance);
console.log(req.body.formFriends);
console.log(req.body.formName);
console.log(req.body.formEmail);
console.log(req.body.picture);
console.log(req.body.formMessage);

mysql.insertAttendance(req.body.formAttendance,req.body.formFriends,req.body.formName,req.body.formEmail,'',req.body.formMessage,req.body.picture,req.body.formFacebookId);
    res.render('index');
});

module.exports = router;
