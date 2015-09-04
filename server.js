var config = require('./config/config')();
var http  = require('http');
var app = require('./config/express')();
require('./config/passport')();
require('./config/database')(config.db);

http.createServer(app).listen(config.port, config.address
, function(){
	console.log('Espress HTTP Server '
		+ config.address 
		+ '('+config.env
		+ ') escutando na porta '+ config.port);
});





