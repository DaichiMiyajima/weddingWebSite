var express = require('express');
var router = express.Router();
var mysql = require(__dirname + '/../lib/mysql.js');

/* GET home page. */
router.get('/timeline', function(req, res, next) {
    var select = mysql.selectAttendance(function(data){
                    res.render('timeline', 
        		    { 
		        title: '',
		        data:data 
		    }
		);
	});
});

module.exports = router;
