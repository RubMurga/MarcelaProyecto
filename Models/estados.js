var mysql = require("mysql");
var connection = mysql.createConnection(
{
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'Proyecto'
});

var edoModel = {};

edoModel.consultaEdo = function(callBack){
	if(connection){
		connection.query("select * from estado group by nombre",function(ERROR,resultado){
		if(ERROR){
			throw ERROR;
		}else{
			callBack(null,resultado);
		}
		});
	}

};





module.exports = edoModel; 