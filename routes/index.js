var express = require('express');
var router = express.Router();
var userModel = require("../Models/usuario");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', Hola: 'Hola soy Marcela'});
});

router.get('/alta',function(req,res) {
	res.render("altaUsuario");
}); 
router.post('/alta',function(req,res) {
	var userData = {
		nombre:req.body.nombre,
		edad:req.body.edad,
		direccion:req.body.direccion
	};
	userModel.altaUsuario(userData,function(ERROR,resultado){
		if(ERROR){
			throw ERROR
		}else{
			console.log(resultado);
			res.render("altaUsuario");
		}
	});
});
module.exports = router;
