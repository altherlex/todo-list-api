'use strict';
var Task  = require('../models').Task;
var util = require('util');
var moment = require('moment');

module.exports = {
  index: index,
  show: show,
  create: create,
  remove: del
}

function index(req, res) {
  // Task.findAll()
  // .then(function(tasks) {
  //   res.json({ list: tasks });
  // });

  var fc_events = [
    {
      title: 'All Day Event',
      start: '2015-02-01'
    },
    {
      title: 'Long Event',
      start: '2015-02-07',
      end: '2015-02-10'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: '2015-02-09T16:00:00'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: '2015-02-16T16:00:00'
    },
    {
      title: 'Conference',
      start: '2015-02-11',
      end: '2015-02-13'
    },
    {
      title: 'Meeting',
      start: '2015-02-12T10:30:00',
      end: '2015-02-12T12:30:00'
    },
    {
      title: 'Lunch',
      start: '2015-02-12T12:00:00'
    },
    {
      title: 'Meeting',
      start: '2015-02-12T14:30:00'
    },
    {
      title: 'Happy Hour',
      start: '2015-02-12T17:30:00'
    },
    {
      title: 'Dinner',
      start: '2015-02-12T20:00:00'
    },
    {
      title: 'Birthday Party',
      start: '2015-02-13T07:00:00'
    },
    {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: '2015-02-28'
    }
  ]
  res.json( fc_events );
}
function show(req, res) {
  var id = req.swagger.params.id.value;
  Task.find(id)
  .success(function(task) {
    res.json( task );
  });
}
// TODO
function del(req, res) {
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
  var duration = 0;
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
