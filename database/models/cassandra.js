var databaseHost = '172.31.23.82';

var Promise = require('bluebird');
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({
  contactPoints: [ databaseHost ],
  keyspace: 'chompy_ks'
});

module.exports = client;
