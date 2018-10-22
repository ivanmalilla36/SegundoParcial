'use strict'

const Plaza = require('../models/plazas')

function getPlazas(req,res){
Plaza.find({}).exec(function(err, plazas){ 
		if (err) {
			throw err;
			res.status(500).send("error")
		}
		if(!plazas){
			res.status(404).send("no ahi marcadores")
		}
		// res.status(200).send({data: plazas})
		res.render('index.pug', {plazas:plazas, title: "mis plazas"})
	});
}

function getPlazasM(req,res){
Plaza.find({}).exec(function(err, plazas){ 
		if (err) {
			throw err;
			res.status(500).send("error")
		}
		if(!plazas){
			res.status(404).send("no ahi marcadores")
		}
		res.status(200).send({plazas: plazas})
	});
}

function savePlaza(req,res){
	const plaza = new Plaza()
	const params = req.body

	plaza.nombre = params.nombre
	plaza.descripcion = params.descripcion
	plaza.imagenUrl = params.imagenUrl
	plaza.latitud = params.latitud
	plaza.longitud = params.longitud
	plaza.telefono = params.telefono

	plaza.save((err,plazaStored) => {
		if (err) {
			throw err;
			res.send({message: "No se pudo guardar el registro"})
		}
		else {
			// res.send({message:plazaStored})
			res.redirect("/api/plazas")
		}
	})
}

function savePlazaM(req,res){
	const plaza = new Plaza()
	const params = req.body

	plaza.nombre = params.nombre
	plaza.descripcion = params.descripcion
	plaza.imagenUrl = params.imagenUrl
	plaza.latitud = params.latitud
	plaza.longitud = params.longitud
	plaza.telefono = params.telefono

	plaza.save((err,plazaStored) => {
		if (err) {
			throw err;
			res.send({message: "No se pudo guardar el registro"})
		}
		else {
			res.send({message:plazaStored})
		}
	})
}

function deletePlaza(req, res){
    var plazaId = req.params.id;
    Plaza.findById(plazaId, function (err,plaza) {
        if (err){
            res.status(500).send({message:"Error al devolver plaza"});
        }

        if(!plaza){
            res.status(404).send({message:"No hay plaza"});

        }else{
            plaza.remove(err => {
                if(err){
                    res.status(500).send({message:"No se ha podido eliminar"});

                }else{
                    res.redirect("/api/plazas")
                //res.status(200).send({message:"Marcador eliminado correctamente"});

            }
                
            });
            
        }
        
    });
    
}

function newPlaza(req,res){
	res.render('new.pug', {title: "Nueva Plaza"})
}

function getPlaza(req,res){

	const plazaId = req.params.id

	Plaza.findById(plazaId, function(err,plaza){
		if (err) {
			res.status(500).send("Error al devolver marcador")
			// console.log(err)
		}else {
		// res.status(200).send({data: plaza})
		res.render('show.pug', {title: "show plaza", plaza: plaza})
		}
	})
}

module.exports = {
	getPlazas,
	newPlaza,
	savePlaza,
	deletePlaza,
	getPlaza,
	getPlazasM,
	savePlazaM,
}