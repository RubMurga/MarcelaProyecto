var mysql = require("mysql");
var connection = mysql.createConnection(
{
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'Proyecto'
});

var soclModel = {};

soclModel.club = function(callBack){
	if(connection){
		connection.query("select * from club",function(error,resultado){
			if(error){
				throw error;
			}else{
				callBack(null,resultado);
			}
		});
	}
};

soclModel.socio = function(callBack){
	if(connection){
		connection.query("select * from socio",function(error,resultado){
			if(error){
				throw error;
			}else{
				callBack(null,resultado);
			}
		});
	}
};

module.exports = soclModel;