var express = require('express');
var router = express.Router();
var mysql = require(__dirname + '/../lib/mysql.js');

/* GET home page. */
router.get('/message', function(req, res, next) {
    var select = mysql.selectAttendanceMessage(function(data){
                    res.render('message', 
        		    { 
		        title: '',
		        data:data 
		    }
		);
	});
});

module.exports = router;
