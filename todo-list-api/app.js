'use strict';

var SwaggerExpress = require('swagger-express-mw');
// var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var SwaggerUi = require('swagger-express-mw/node_modules/swagger-node-runner/node_modules/swagger-tools/middleware/swagger-ui');

var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  //add swagger-ui
  app.use(SwaggerUi(swaggerExpress.runner.swagger));

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 3000;
  app.listen(port);

  console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
});
