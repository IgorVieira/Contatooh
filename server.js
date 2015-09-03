var http  = require('http');
var express =  require('express');
var app = require('./config/express')(app);
require('./config/passport')();
require('./config/database.js')('mongodb://localhost/contatooh');
var config = require('./config/config')();
require('./config/database')(config.db);

http.createServer(app).listen(config.port, config.address
, function(){
	console.log('Espress HTTP Server '
		+ config.address 
		+ '('+config.env
		+ ') escutando na porta '+ config.port);
});
