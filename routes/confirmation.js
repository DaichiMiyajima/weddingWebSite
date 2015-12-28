var express = require('express');
var router = express.Router();
var mysql = require(__dirname + '/../lib/mysql.js');

/* GET home page. */
router.get('/confirmation', function(req, res, next) {
    var select = mysql.selectConfirmation(function(data){
                    res.render('confirmation', 
        		    { 
		        title: '',
		        data:data 
		    }
		);
    });
});

router.post('/conf', function(req, res, next) {
    mysql.updateAttendance(req.body.formId,req.body.formConfirmation,function(data){
        res.send(data);
    });
});

module.exports = router;
