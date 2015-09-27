'use strict';
var Task  = require('../models').Task;
var util = require('util');
var moment = require('moment');

module.exports = {
  index: index,
  show: show,
  create: create,
  delete:delete
};

function index(req, res) {
  Task.findAll()
  .then(function(tasks) {
    res.json({ list: tasks });
  });
}
function show(req, res) {
  var id = req.swagger.params.id.value;
  Task.find(id)
  .success(function(task) {
    res.json( task );
  });
}
// TODO
function delete(req, res) {
  var id = req.swagger.params.id.value;
  Task.find(id)
  .success(function(task) {
    res.json( task );
  });
}

function create(req, res) {
  var month = req.swagger.params.month.value;
  var day = req.swagger.params.day.value;
  var year = req.swagger.params.year.value;
  var hour = null;
  var duration = 00;
  var description = req.swagger.path.description.value;
  var index_min = description.indexOf('minuto');

  if (index_min !== -1)
    duration = description.slice(index_min-3, 2);

  var start_at = moment(month+day+year+hour+min, "MMDDYYHHmm").format;

  Task.create(calculate_object)
  .success(function(task){
    // TODO
    res.json({sucess: 'hello'});
  })
  .error(function(err){
    // TODO
    res.json({error: err});
  });
}

// TODO: Preencher as lacunas do dia ate esgotar 24h.
function calculate_object(last_task, params){
  return {description:description, start_at:start_at, duration:duration}
}
