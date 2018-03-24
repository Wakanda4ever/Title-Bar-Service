var db = require('../models/cassandra.js');

module.exports.getBusinessById = (id) => {
  var query = `SELECT * FROM business WHERE business_key = ${id}`;
  return db.execute(query).then(data => {
    return JSON.stringify(data.rows[0]);
  }).catch(err => {
    console.error('Failed to query database', err);
  });
}
