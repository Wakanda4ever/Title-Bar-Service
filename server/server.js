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
	console.log('posted ' + JSON.stringify(req.body));
	var dataToParse = new db.Restaurant(req.body);
	dataToParse.save(function (err) {
		if (err) {
			console.log(err);
		}
		console.log('Successfully added to database');
	});
	res.end();
})

app.get('/title-bar/restaurant', function (req, res) {
	db.Restaurant.find(
		{
			"$or": [{
				"city": "Las Vegas"
			}, {
				"city": "Toronto"
			}, {
				"city": "Pittsburgh"
			}, {
				"city": "Phoenix"
			}],
			"categories": { $in:['Restaurants', 'Food', 'Bars']}
		}, function (err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log('DID IT WORK?');
			console.log(result);
			res.end(JSON.stringify(result));
		}
	})
})