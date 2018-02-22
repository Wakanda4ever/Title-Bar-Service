var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pathname = path.join(__dirname + './../client/dist');
var db = require('./../database/index.js');
app.use(bodyParser.json());
app.use(express.static(pathname));

var result = {};

app.listen(3005, function () {
	console.log('Listening on port 3005.')
});

app.post('/title-bar/restaurant', function (req, res) {
	console.log('posted '+JSON.stringify(req.body));
	var dataToParse = new db.Restaurant(req.body);
	dataToParse.save(function(err){
		if(err){
			console.log(err);
		}
		console.log('Successfully added to database');
	}).catch(function(err){
		console.log(err);
	})
	res.end(req.body);
})
app.get('/title-bar/restaurant', function (req, res) {
	db.Restaurant.find(function (err, result) {
		if (err) {
			console.log(err);
		}
		res.json(result);
	})
})