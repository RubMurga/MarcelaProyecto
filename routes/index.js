//Controlador
var express = require('express');
var router = express.Router();
var userModel = require("../Models/usuario");
var edoModel = require("../Models/estados");
var clubModel = require("../Models/club");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', Hola: 'Hola soy Marcela'});
});

router.get('/alta',function(req,res) { 
	res.render("altaUsuario"); //Renderizar una vista
}); 
router.post('/alta',function(req,res) {
	var userData = {
		idSocio:req.body.idSocio,
		nombre:req.body.nombre,
		direccion:req.body.direccion,
		tel:req.body.tel,
	};
	userModel.altaUsuario(userData,function(ERROR,resultado){
		if(ERROR){
			throw ERROR;
		}else{
			console.log(resultado);
			res.render("altaUsuario");
		}
	});
});

router.get('/consulta',function(req,res) { 
	userModel.consultaUsuario(function(ERROR,resultado){
		if(ERROR){
			throw ERROR;
		}else{
			console.log(resultado);
			res.render("consultaUsuario",{usuarios: resultado});
		}
	});
});

router.get('/consulta/usuario/:nombreUsuario/:usuarioEdad',function(req,res){
	//res.send(req.params.nombreUsuario);
	userModel.consultaPersonal(req.params.nombreUsuario,function(ERROR,usuario){
		res.render("consultaUsuario",{usuarios: usuario});
	});
});


router.get('/club/:mensaje',function(req,res) { 
	edoModel.consultaEdo(function(ERROR,resultado){
		if(ERROR){
			throw ERROR;
		}else{
			var mensaje;
			if(req.params.mensaje=="alta"){
				mensaje = "Dando de alta";
			}else if(req.params.mensaje == "success"){
				mensaje = "Club dado de alta";
			}
			res.render("altaClub",{estados: resultado,mensaje: mensaje});
		}
	});
}); 
router.post('/club',function(req,res) {
	var userData = {
		idClub:req.body.idClub,
		nombre:req.body.nombre,
		direccion:req.body.direccion,
		tel:req.body.tel,
		idEdo:req.body.idEdo,
	};
	console.log(userData);
	clubModel.altaClub(userData,function(ERROR,resultado){
		if(ERROR){
			throw ERROR;
		}else{
			res.redirect("/club/success");
			//res.render("altaClub",{mensaje: resultado});
		}
	});
});



module.exports = router;
