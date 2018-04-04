var databaseHost = '172.31.23.82';

var Promise = require('bluebird');
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({
  contactPoints: [
    '172.31.23.82',
    '172.31.21.142',
    '172.31.27.194'
   ],
  keyspace: 'chompy_ks'
});

module.exports = client;
