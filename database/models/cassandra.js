var databaseHost = process.env.SDC_DATABASE_HOST || 'localhost';

var Promise = require('bluebird');
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({
  contactPoints: [ databaseHost ],
  keyspace: 'chompy_ks'
});

module.exports = client;
