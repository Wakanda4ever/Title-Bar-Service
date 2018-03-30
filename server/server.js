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
//const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

//activate middleware
app.use(cors());
//app.use(bodyParser.json());
app.use(morgan('tiny'));

// //for loader.io
// app.get('/loaderio-79c823bb28eaa1fe69bc1dafca34b4f5', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'loaderio'));
// });

//serve static files
app.use('/:id', express.static('./client/dist'));

//api calls with redis
app.get('/title-bar/restaurant/:id', (req, res) => {
	redisClient.getAsync(req.params.id).then(result => {
		if (result === null) {
			return db.getBusinessById(req.params.id)
			.then((business) => {
        if (business === undefined) {
          throw 'Business not found...';
          return;
        }
				res.send(business);
				return redisClient.setAsync(req.params.id, JSON.stringify(business));
			}).catch(err => {
        console.error('failed to fetch from database', err);
        res.status(404).send('failed to fetch from database ' + err);
      });
		} else {
			res.send(result);
			return;
		}
	})
	.catch((err) => {
		console.error('Failed to fetch from cache', err);
    res.status(404).send('Failed to fetch from cache ' + err);
	});
});

// //api calls without redis
// app.get('/title-bar/restaurant/:id', (req, res) => {
// 	db.getBusinessById(req.params.id)
// 		.then((business) => {
// 			res.send(business);
// 		})
// 		.catch((err) => {
// 			console.error('Failed to serve get request', err);
// 		});
// });

// //assign default for calls to root without id
// app.use('/', (req, res) => {
// 	res.redirect('/10000000');
// });

//start listening
var port = 80;
app.listen(port, () => console.log('Listening on port', port + '...'));
