/* 
  mysql deal
*/

var mysql = {};

//Mysqlとの接続
var mysql = require('mysql');
var async = require("async");
var config = require(__dirname + '/../lib/config.js').config;

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

mysql.insertAttendance = function (Attendance,Friends,Name,Email,Phone,Message,PicturePath,FacebookId){
	var insert_attendance_table = connection.query(
			'INSERT INTO attendance(Attendance,Friends,Name,Email,Phone,Message,PicturePath,FacebookId) VALUE(?,?,?,?,?,?,?,?)'
			,[Attendance,Friends,Name,Email,Phone,Message,PicturePath,FacebookId]
			);
	return;
}
module.exports = mysql;