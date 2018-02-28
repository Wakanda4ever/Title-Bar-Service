const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const pathname = path.join(__dirname + './../client/dist');
const db = require('./../database/index.js');
app.use(bodyParser.json());
app.use(express.static(pathname));

const result = {};

app.listen(3005, function () {
	console.log('Listening on port 3005.')
});

app.post('/title-bar/restaurant/', function (req, res) {
	console.log('posted ' + JSON.stringify(req.body));
	const dataToParse = new db.Restaurant(req.body);
	dataToParse.save(function (err) {
		if (err) {
			console.log(err);
		}
		console.log('Successfully added to database');
	});
	res.end();
})

app.get('/category', function (req, res) {
	res.end();
});

app.get('/title-bar/restaurant', function (req, res) {
	db.RestaurantInfo.findOne(function (err, result) {
		if (err) {
			console.log(err);
			res.end();
		} else {
			console.log('Displaying RestaurantInfo data!');
			console.log('results'+result);
			res.send(JSON.stringify(result));
		}
	});
});
app.get('/title-bar/restaurant/:id', function (req, res) {
	var searchID = {id: req.params.id};
	db.RestaurantInfo.find({business_id: req.params.id}, function (err, result) {
		if (err) {
			console.log(err);
			res.end();
		} else {
			console.log('success'+req.params.id);
			console.log('Displaying RestaurantInfo data!');
			console.log('results'+result);
			res.send(JSON.stringify(result));
		}
	});
})