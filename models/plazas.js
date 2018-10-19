'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlazaSchema = Schema({
	nombre: String,
	description: String,
	imagenURL: String,
	longitud: Long,
	Latitud: Long,
})

module.exports = mongoose.model('Plaza', PlazaSchema)