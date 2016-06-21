var mysql = require("mysql");
var connection = mysql.createConnection(
{
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'Proyecto'
});

var userModel = {};
userModel.altaUsuario = function(userData,callBack){
	if(connection){
		connection.query("insert into usuario set ?",userData,function(ERROR,row){
			if(ERROR){
				throw ERROR;
			}else{
				console.log(row);
				callBack(null,{notificacion:"satisfactorio"});
			}
		});
	}
};
module.exports = userModel; 