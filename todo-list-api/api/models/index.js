'use strict';

if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize');
  var sequelize = null;

  if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    })
  } else {
    sequelize = new Sequelize('database', 'root', 'root', {
      host: 'localhost',
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    });
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    // Task: sequelize.import(__dirname + '/task') 
  }
}

module.exports = global.db