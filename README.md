Bienvenido a la sección de desarrolladores de 'The Pintxopo'. En ésta sección encontrarás la documentación necesaria para hacer uso de la API pública de nuestra aplicación. En resumen, te mostraremos como acceder a la información de los Pintxos y los Bares y obtenerla en forma de paquetes JSON.

# Código usado para crear la API

````javascript
	
	//muestra por el pintxo por orden de registro
	app.get('/pintxosDatos', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	Pintxo.find({}, '-_id nombre descripcion', function(err, pintxos) {
	 		
	 		if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(pintxos);
  		});
	});
	
	//muestra por el pintxo por orden de registro
	app.get('/pintxosDatos/:numero', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	Pintxo.find(function(err, pintxos) {
	 		
	 		if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(pintxos[require.params.numero].nombre);
  		});
	});
	
	//muestra por el pintxo por nombre
	app.get('/pintxosDatos/nombre/:nombre', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	Pintxo.find({'nombre': require.params.nombre}, '-_id nombre descripcion', function(err, pintxos) {
			
	 		if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(pintxos);
  			
  		});
	});
	
	
	//muestra todos los bares
	app.get('/baresDatos', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	Bar.find({}, '-_id nombre coordX coordY', function(err, bares) {
	 		
	 		if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(bares);
  		});
	});
	
	//muestra los bares por el número seleccionado
	app.get('/baresDatos/numero/:numero', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	Bar.find(function(err, bares) {
	 		
	 		if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(bares[require.params.numero].nombre);
  		});
	});
	
	//muestra los datos por el nombre
	app.get('/baresDatos/nombre/:nombre', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	Bar.find({'nombre': require.params.nombre}, '-_id nombre coordX coordY', function(err, bares) {
			
	 		if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(bares);
  			
  		});
	});

````
	
	
	# Ejemplo de uso
	
	
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
