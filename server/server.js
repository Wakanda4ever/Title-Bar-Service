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

// app.post('/title-bar/restaurant/', function (req, res) {
// 	console.log('posted ' + JSON.stringify(req.body));
// 	const dataToParse = new db.Restaurant(req.body);
// 	dataToParse.save(function (err) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log('Successfully added to database');
// 	});
// 	res.end();
// })

app.get('/category', function (req, res) {
	res.status(400);
	res.end('404 Page Not Found');
});

app.get('/review', function (req, res) {
	res.status(400);
	res.end('404 Page Not Found');
});

app.get('/photo', function (req, res) {
	res.status(400);
	res.end('404 Page Not Found');
});

app.get('/share', function (req, res) {
	res.status(400);
	res.end('404 Page Not Found');
});

app.get('/bookmark', function (req, res) {
	res.status(400);
	res.end('404 Page Not Found');
});
app.get('/:id', function (req, res) {
	res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});
// app.get('/title-bar/restaurant/:id', function (req, res) {
// 	db.RestaurantInfo.find({
// 		business_id: req.params.id
// 	}, function (err, result) {
// 		if (err) {
// 			console.log(err);
// 			res.end();
// 		} else {
// 			res.end(JSON.stringify(result[0]));
// 		}
// 	});
// })

app.get('/title-bar/restaurant/:id', (req, res) => {
  var id = req.params.id;
  console.log('highlights id', id)
  var query = `SELECT * FROM business WHERE id = "${id}"`
   db.connection.query(query, function(err, rows, fields){
    if (err) throw err
    var reviews = rows;
    res.header("Access-Control-Allow-Origin", "*").send(reviews)
  });
});
