var Promise = require('bluebird');
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({
  contactPoints: ['localhost'],
  keyspace: 'chompy_ks'
});

module.exports = client;
