'use strict';

var SwaggerExpress = require('swagger-express-mw');
// var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var SwaggerUi = require('swagger-express-mw/node_modules/swagger-node-runner/node_modules/swagger-tools/middleware/swagger-ui');
var app = require('express')();
var config = {
  appRoot: __dirname // required config
};
var db = require('./api/models');
var port = process.env.PORT || 3001;
var cors = require('cors'); // Access-Control-Allow-Origin

app.use(cors());
  
module.exports = app; // for testing

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  //add swagger-ui
  app.use(SwaggerUi(swaggerExpress.runner.swagger));

  // install middleware
  swaggerExpress.register(app);

  db.sequelize.sync().then(function() {
    app.listen(port, function(){
      console.log('try this: curl http://127.0.0.1:' + port + '/hello?name=Scott');
      console.log('Started webservice server listening on http://127.0.0.1:' + port);
    });
  });

});
