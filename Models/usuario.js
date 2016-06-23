//Arquitectura de un sistema (Elemento)
var mysql = require("mysql");
var connection = mysql.createConnection(
{
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'Proyecto'
});

var userModel = {};
userModel.altaUsuario = function(userData,callBack){ //Datos Usuario y regresar a donde llamo
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

userModel.consultaUsuario = function(callBack){
	if(connection){
		connection.query("select * from usuario",function(ERROR,row){
			if(ERROR){
				throw ERROR;
			}else{
				console.log(row);
				callBack(null,row);
			}
		});
	}
}


userModel.consultaPersonal = function(userName,callBack){
	if(connection){
		connection.query("select * from usuario where nombre="+connection.escape(userName),function(ERROR,row){
			if(ERROR){
				throw ERROR;
			}else{
				console.log(row);
				callBack(null,row);
			}
		});
	}
}


module.exports = userModel; 