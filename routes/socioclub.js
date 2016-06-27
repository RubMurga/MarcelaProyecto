var express = require('express');
var router = express.Router();
var socioclub = require("../Models/socioclub");

router.get("/socioclub/consulta",function(req,res){
	socioclub.club(function(error,clubs){
		socioclub.socio(function(error,socios){
			console.log(clubs);
			console.log(socios);
			res.render("consultaSocioClub",{clubs: clubs,socios: socios});
		});
	});
});




module.exports = router;