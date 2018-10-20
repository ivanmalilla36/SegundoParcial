'use strict'

const express = require('express')
const PlazasController = require('../controllers/plazas')

const api = express.Router()

api.get('/plazas', PlazasController.getPlazas)

api.post('/savePlaza', PlazasController.savePlaza)

api.get('/nuevaplaza', PlazasController.newPlaza)

api.get('/deletePlaza/:id', PlazasController.deletePlaza)

module.exports = api;