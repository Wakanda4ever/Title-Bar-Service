var Promise = require('bluebird');
var db = require('../models/mysql.js');

// Output in the form: { businesses: {}, categories: {} }
module.exports.getBusinessById = (id) => {
  var businessQuery = db.query(`SELECT * FROM business WHERE id = ${id}`)
    .then(result => result[0][0]);
  var categoriesQuery = db.query(`SELECT * FROM category WHERE business_id = ${id}`)
    .then(result => result[0]);

  var queries = [];
  queries.push(businessQuery, categoriesQuery);

  return Promise.all(queries).then(resultsArray => {
    var business = resultsArray[0];
    var categories = resultsArray[1];
    business.categories = categories.map(element => element.category);
    return business;
  }).catch(err => {
    console.error('Failed to query database', err);
  });
}
