'use strict';
var Task  = require('../models').Task;
var util = require('util');
var moment = require('moment');

module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy,
  update: update
}

function index(req, res) {
  /*
    TODO: Use params to filter regs
    // Per day
    http://localhost:3001/tasks?start=2015-09-28&end=2015-09-29&_=1443443598492
  */
  // Task.findAll()
  // .then(function(tasks) {
  //   res.json({ list: tasks });
  // });

  var fc_events = [
    {
      title: 'All Day Event',
      start: '2015-09-01'
    },
    {
      title: 'Long Event',
      start: '2015-09-07',
      end: '2015-09-10'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: '2015-09-09T16:00:00'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: '2015-09-16T16:00:00'
    },
    {
      title: 'Conference',
      start: '2015-09-11',
      end: '2015-09-13'
    },
    {
      title: 'Meeting',
      start: '2015-09-28T10:30:00',
      end: '2015-09-28T12:30:00'
    },
    {
      title: 'Lunch',
      start: '2015-09-28T12:00:00'
    },
    {
      title: 'Meeting',
      start: '2015-09-28T14:30:00'
    },
    {
      title: 'Happy Hour',
      start: '2015-09-28T17:30:00'
    },
    {
      title: 'Dinner',
      start: '2015-09-28T20:00:00'
    },
    {
      title: 'Birthday Party',
      start: '2015-09-13T07:00:00'
    },
    {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: '2015-09-28'
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
function destroy(req, res) {
  var id = req.swagger.params.id.value;
  Task.find(id)
  .success(function(task) {
    res.json( task );
  });
}

// TODO
function update(req, res) {
  var id = req.swagger.params.id.value;
  Task.find(id)
  .success(function(task) {
    res.json( task );
  });
}

function create(req, res) {
  console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
  res.json({message:'porra nenhuma'})
  // var month = req.swagger.query.month.value || moment().format('MM');
  // var day = req.swagger.query.day.value || moment().format('DD');
  // var year = req.swagger.query.year.value || moment().format('YY');
  // var hour = moment().format('HH');
  // var param = {};
  // var index_min = description.indexOf('minuto');

  // param.description = req.swagger.query.description.value || 'Not specific.';
  // param.duration = 0;

  // if (index_min !== -1 && typeof(description.slice(index_min-3, 2)).trim() === 'number')
  //   // TODO: about duration not minute
  //   param.duration = description.slice(index_min-3, 2);

  // var start_at = moment(month+day+year+hour+min, "MMDDYYHHmm").format;

  // Task.create(param)
  // .success(function(task){
  //   res.json({save: true, task:task});
  // })
  // .error(function(err){
  //   res.json({save:false, error: err});
  // });
}