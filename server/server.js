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

app.post('/title-bar/restaurant', function (req, res) {
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

app.get('/title-bar/restaurant', function (req, res) {
	db.RestaurantInfo.find(function(err,result){
		if(err){
			console.log(err);
			res.end();
		}else{
			console.log('Displaying RestaurantInfo data');
			res.end(JSON.stringify(result[0]));	// Displaying first restaurant
		}
	});

	// db.Restaurant.find({
	// 	"$or": [{
	// 		"city": "Las Vegas"
	// 	}, {
	// 		"city": "Toronto"
	// 	}, {
	// 		"city": "Pittsburgh"
	// 	}, {
	// 		"city": "Phoenix"
	// 	}],
	// 	"categories": {
	// 		$in: ['Restaurants', 'Food', 'Bars']
	// 	}
	// }, function (err, result) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		console.log('Results found.');

			/* Populate restaurantInfo db with data needed for title-bar */
			// for (var i = 0; i < result.length; i++) {
			// 	const temp = {};
			// 	temp.business_id = result[i].business_id;
			// 	temp.name = result[i].name;
			// 	temp.isClaimed = true;
			// 	temp.stars = result[i].stars;
			// 	temp.review_count = result[i].review_count;
			// 	temp.dollarRating = (Math.random() <= 0.5) ? '$' : '$$';
			// 	temp.categories = result[i].categories;
			// 	const restaurantInfoData = new db.RestaurantInfo(temp);
			// 	restaurantInfoData.save(function(err){
			// 		if(err){
			// 			console.log(err);
			// 		}
			// 		console.log('Successfully added to restaurantInfo db');
			// 	});
			// }
			//res.end(JSON.stringify(result[0]));
		//}
	//});
})