require('newrelic');
const Promise = require('bluebird');

const db = require('../database/controllers/cassandra.js');
//const db = require('../database/controllers/mysql.js');
const redis = require('redis');
Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);
const redisClient = redis.createClient();
redisClient.on('error', (err) => console.error(err));

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

//activate middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

//serve static files
app.use('/:id', express.static('./client/dist'));

//api calls
app.get('/title-bar/restaurant/:id', (req, res) => {
	redisClient.getAsync(req.params.id).then(result => {
		if (result === null) {
			return db.getBusinessById(req.params.id)
			.then((business) => {
				res.send(business);
				return redisClient.setAsync(req.params.id, JSON.stringify(business));
			});
		} else {
			res.send(result);
			return;
		}
	})
	.catch((err) => {
		console.error('Failed to serve get request', err);
	});

});

//assign default for calls to root without id
app.use('/', (req, res) => {
	res.redirect('/10000000');
});

//start listening
var port = process.env.PORT || 3005;
app.listen(port, () => console.log('Listening on port', port + '...'));
