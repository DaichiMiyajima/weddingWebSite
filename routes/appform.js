var express = require('express');
var router = express.Router();
var mysql = require(__dirname + '/../lib/mysql.js');

/* GET home page. */
router.post('/appform', function(req, res, next) {
    mysql.insertParticipants(req.body.formName,req.body.formEmail,req.body.formPhone,req.body.formMessage);
    res.render('index');
});

module.exports = router;
