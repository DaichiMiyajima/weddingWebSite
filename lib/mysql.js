/* 
  mysql deal
*/

var mysql = {};

//Mysql‚Æ‚ÌÚ‘±
var mysql = require('mysql');
var async = require("async");
var config = require(__dirname + '/../lib/config.js').config;
var date = require('date-utils');


var DB_HOST = config.DB_HOST;	
var DB_DATABASE = config.DB_DATABASE;
var DB_USER = config.DB_USER;
var DB_PASSWORD = config.DB_PASSWORD;
var DB_PORT = config.DB_PORT;

var connection = mysql.createConnection({
	host	 : DB_HOST,
	database : DB_DATABASE,
	user	 : DB_USER,
	password : DB_PASSWORD,
	port	 : DB_PORT
});

mysql.insertAttendance = function (Attendance,Friends,Name,Email,Phone,Message,PicturePath,FacebookId,cb){

var dt = new Date();
var formatted = dt.toFormat("YYYY/MM/DD/HH24:MI");
var result = {};

	var insert_attendance_table = connection.query(
			'INSERT INTO attendance(Attendance,Friends,Name,Email,Phone,Message,PicturePath,FacebookId,Date) VALUE(?,?,?,?,?,?,?,?,?)'
			,[Attendance,Friends,Name,Email,Phone,Message,PicturePath,FacebookId,formatted]
            //err handling. Sweet alert will show the log so that user can be clarify the kind of bugs.
            ,function(err,result){
                if(err){
                    result = err;
                    result.message = "error";
                    cb(result);
                }
                else{
                    result = result;
                    result.message = "success";
                    cb(result);
                }
            });
	return;
}

//Confirmation Update
mysql.updateAttendance = function (id,confirmation,cb){
var result = {};
	var update_attendance_table = connection.query(
			'UPDATE attendance SET confirmation = ? WHERE id = ?'
			,[confirmation,id]
            //err handling. Sweet alert will show the log so that user can be clarify the kind of bugs.
            ,function(err,result){
                if(err){
                    result = err;
                    result.message = "error";
                    cb(result);
                }
                else{
                    result = result;
                    result.message = "success";
                    cb(result);
                }
            });
	return;
}

mysql.selectAttendance = function (callback){
	var data = [];
	var facebookurl="";
	var timeline_attendance = connection.query("SELECT Attendance,Friends,concat(NAME,concat('(',concat(concat(Attendance,concat('/',Friends)),')'))) as Name,Email,Phone,Message,PicturePath,FacebookId,CHAR_LENGTH(PicturePath) as piclen,CHAR_LENGTH(FacebookId) as idlen,Date,Gender  FROM wedding.attendance",function (error, results, fields) {
		//console.log(results);
		if (error) throw err;
		async.each(results, function(timeline, callback){
		if(timeline.idlen > 1){
			facebookurl = "https://www.facebook.com/"+timeline.FacebookId;
		}else{
			facebookurl = "https://www.facebook.com"
		}
		data.push({"attendance":timeline.Attendance,"friends":timeline.Friends,"name":timeline.Name,"message":timeline.Message,"picturePath":timeline.PicturePath,"piclen":timeline.piclen,"date":timeline.Date,"facebookurl":facebookurl,"gender":timeline.gender});
				callback();
		}, function(error){
		if(error) throw err;
			callback(data);
		});	
	})
}

mysql.selectAttendanceMessage = function (callback){
	var data = [];
	var facebookurl="";
	var timeline_attendance = connection.query("SELECT  id,Confirmation,Attendance,Friends,NAME as nm,concat(concat(TRIM(SUBSTRING(NAME,LOCATE( ' ', NAME ))),concat(' ',TRIM(SUBSTRING(NAME,1,LOCATE( ' ', NAME )-1)))),concat('(',concat(concat(Attendance,concat('/',Friends)),')'))) as Name,Email,Phone,Message,PicturePath,FacebookId,CHAR_LENGTH(PicturePath) as piclen,CHAR_LENGTH(FacebookId) as idlen,Date,(select count(*) from wedding.attendance where attendance='yes')as plan,(select count(*) from wedding.attendance where attendance='yes' and confirmation='done') as actual,Gender,team  FROM wedding.attendance  order by attendance desc,confirmation desc,team,Name asc",function (error, results, fields) {
		//console.log(results);
		if (error) throw err;
		async.each(results, function(timeline, callback){
		if(timeline.idlen > 1){
			facebookurl = "https://www.facebook.com/"+timeline.FacebookId;
		}else{
			facebookurl = "https://www.facebook.com"
		}
		data.push({"id":timeline.id,"confirmation":timeline.Confirmation,"attendance":timeline.Attendance,"friends":timeline.Friends,"nm":timeline.nm,"name":timeline.Name,"message":timeline.Message,"picturePath":timeline.PicturePath,"piclen":timeline.piclen,"date":timeline.Date,"facebookurl":facebookurl,"plan":timeline.plan,"actual":timeline.actual,"gender":timeline.gender,"team":timeline.team});
				callback();
		}, function(error){
		if(error) throw err;
			callback(data);
		});	
	})
}


mysql.selectConfirmation = function (callback){
	var data = [];
	var facebookurl="";
	var timeline_attendance = connection.query("SELECT  id,Confirmation,Attendance,Friends,NAME as nm,concat(concat(TRIM(SUBSTRING(NAME,LOCATE( ' ', NAME ))),concat(' ',TRIM(SUBSTRING(NAME,1,LOCATE( ' ', NAME )-1)))),concat('(',concat(concat(Attendance,concat('/',Friends)),')'))) as Name,Email,Phone,Message,PicturePath,FacebookId,CHAR_LENGTH(PicturePath) as piclen,CHAR_LENGTH(FacebookId) as idlen,Date,(select count(*) from wedding.attendance where attendance='yes')as plan,(select count(*) from wedding.attendance where attendance='yes' and confirmation='done') as actual,Gender,team  FROM wedding.attendance where Attendance='yes' order by confirmation desc,Name asc",function (error, results, fields) {
		//console.log(results);
		if (error) throw err;
		async.each(results, function(timeline, callback){
		if(timeline.idlen > 1){
			facebookurl = "https://www.facebook.com/"+timeline.FacebookId;
		}else{
			facebookurl = "https://www.facebook.com"
		}
		data.push({"id":timeline.id,"confirmation":timeline.Confirmation,"attendance":timeline.Attendance,"friends":timeline.Friends,"nm":timeline.nm,"name":timeline.Name,"message":timeline.Message,"picturePath":timeline.PicturePath,"piclen":timeline.piclen,"date":timeline.Date,"facebookurl":facebookurl,"plan":timeline.plan,"actual":timeline.actual,"gender":timeline.gender,"team":timeline.team});
				callback();
		}, function(error){
		if(error) throw err;
			callback(data);
		});	
	})
}


module.exports = mysql;
