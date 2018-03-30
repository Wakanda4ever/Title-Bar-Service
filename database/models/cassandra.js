var databaseHost = '52.8.170.108';

var Promise = require('bluebird');
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({
  contactPoints: [ databaseHost ],
  keyspace: 'chompy_ks'
});

module.exports = client;
