/*jslint undef: true */
'use strict';

var express, app, path, port;

express = require('express');
app			= express();
path		= require('path');
port		= process.env.PORT || 8000;

app
.use(express.static(__dirname + '/public'))
.get('/', function (request, response) {
	response.sendFile((path.join(__dirname + '/public/index.html')));
});

// .get('/price_tag', function (request, response) {
// 	response.sendFile(path.join(__dirname + '/public/app/price_tag.html'));
// });

app.listen(port);
console.log('Server is ready!! (http://localhost:' + port + ')'); 