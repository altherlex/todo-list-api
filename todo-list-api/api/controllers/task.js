'use strict';
var util = require('util');
module.exports = {
  create: create
};

function create(req, res) {
  // var name = req.swagger.params.description.value || 'stranger';
  // var hello = util.format('Hello, %s!', name);
  res.json({sucess: 'hello'});
}
