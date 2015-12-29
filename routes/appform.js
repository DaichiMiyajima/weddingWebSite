var express = require('express');
var router = express.Router();
var mysql = require(__dirname + '/../lib/mysql.js');

/* GET home page. */
router.post('/appform', function(req, res, next) {
mysql.insertAttendance(req.body.formAttendance,req.body.formFriends,req.body.formName,req.body.formEmail,req.body.formPhone,req.body.formMessage,'','',function(data){
        res.send(data);
    });
});

module.exports = router;
