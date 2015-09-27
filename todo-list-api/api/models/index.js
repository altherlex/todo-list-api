'use strict';

var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../../config/config.json')[env];
var global    = {};

if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize');
  var sequelize = null;

  if (process.env.HEROKU_POSTGRESQL_BRONZE_URL)
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    })
  else
    sequelize = new Sequelize(config.database, config.username, config.password, config);

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Task: sequelize.import(__dirname + '/task') 
  }
}

module.exports = global.db