var Promise = require('bluebird');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('chompy_db', 'root', 'mrsanders',
  { host: 'localhost', dialect: 'mysql', logging: false });

module.exports = sequelize;
