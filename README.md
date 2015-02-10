Bienvenido a la sección de desarrolladores de 'The Pintxopo'. En ésta sección encontrarás la documentación necesaria para hacer uso de la API pública de nuestra aplicación. En resumen, te mostraremos como acceder a la información de los Pintxos y los Bares y obtenerla en forma de paquetes JSON.

Código usado para crear la API

````javascript

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



```

Ejemplo de uso de la API

````javascript

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

```
