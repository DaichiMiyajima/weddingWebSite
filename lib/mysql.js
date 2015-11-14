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

mysql.insertUserRirekiTBL = function (user_name,user_type){
	var insert_user_rireki_table = connection.query('INSERT INTO candy_user_rireki(user_name,user_type) VALUE(?,?)',[user_name,user_type]);
	return;
}
module.exports = mysql;