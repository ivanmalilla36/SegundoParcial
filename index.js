'use strict'

const mongoose = require('mongoose');
const port = process.env.PORT || 3678;

mongoose.connect('mongodb://plasa:abril1994@ds137263.mlab.com:37263/parcial2',(err,res)=>{
	console.log("base de datos iniciada")

	if (err) {
		// throw err;
		console.log(err)
	}
	else{
		app.listen(port, () => {
		console.log(`API RES FAVORITOS funcionando en en http://localhost:${port}`);
	});
	}

})

const app = require('./app');