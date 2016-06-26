var mysql = require("mysql");
var connection = mysql.createConnection(
{
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'Proyecto'
});

var clubModel = {};

clubModel.altaClub = function(club,callBack){
	if(connection){
		connection.query("insert into club set ? ", club,function(error){
			if(error){
				throw error;
			}else{
				callBack(null,{mensaje: "satisfactorio"});
			}
		});
	}
};


module.exports = clubModel;