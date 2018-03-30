require('newrelic');
const Promise = require('bluebird');
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('tiny'));

var currentServer = 0;
var servers = [
  '13.52.0.79'
];

//for loader.io
app.get('/loaderio-79c823bb28eaa1fe69bc1dafca34b4f5', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'loaderio'));
});

//api calls
app.get('/title-bar/restaurant/:id', (req, res) => {
  res.redirect(`http://${servers[currentServer]}/title-bar/restaurant/${req.params.id}`);
  currentServer++;
  currentServer = currentServer % servers.length;
});

//assign default for requests without an id
app.use('/', (req, res) => {
	res.redirect('/10000000');
});
app.use('/title-bar/restaurant', (req, res) => {
	res.redirect('/title-bar/restaurant/10000000');
});

var port = 80;
app.listen(port, () => console.log('Listening on port', port + '...'));
