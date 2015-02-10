
// =====================================
// API ===============================
// =====================================
// API Proyecto Pintxopote (thepintxopo.com)
	
var express = require('express');
var request = require('request');

var app = express(); 
var port = process.env.PORT || 8080;

//Ejemplos

	//muestra por el pintxo por nombre
	app.get('/pintxosDatos/nombre/:nombre', function(req, res) {
	
		var url='http://www.thepintxopo.com/pintxosDatos/nombre/:nombre';
	
		var request = require('request');
	
		request({url:url, json:"true"}, function (error, response, body) {
	
			if (!error && response.statusCode == 200) {
	
				console.log(body);
				res.json(body);
			}
			else {
	
				res.json({error:"request error"});
			}
		});
	
	});
	
	//muestra el bar por orden de registro
	app.get('/baresDatos/numero/:numero', function(req, res) {
	
		var url='http://www.thepintxopo.com/pintxosDatos/:numero';
	
		var request = require('request');
	
		request({url:url, json:"true"}, function (error, response, body) {
	
			if (!error && response.statusCode == 200) {
	
				console.log(body);
				res.json(body);
			}
			else {
	
				res.json({error:"request error"});
			}
		});
	
	});

//servidor escuchando
app.listen(port);
console.log('El servidor escucha en el puerto: ' + port);
