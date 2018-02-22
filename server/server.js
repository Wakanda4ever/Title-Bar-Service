var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pathname = path.join(__dirname + './../client/dist');
app.use(bodyParser.json());
app.use(express.static(pathname));

var result = {};

app.listen(3005, function() {
	console.log('Listening on port 3005.')
});