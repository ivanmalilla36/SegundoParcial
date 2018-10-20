'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlazaSchema = Schema({
	nombre: String,
	descripcion: String,
	imagenUrl: String,
	longitud: String,
	latitud: String,
	telefono: String
})

module.exports = mongoose.model('Plaza', PlazaSchema)