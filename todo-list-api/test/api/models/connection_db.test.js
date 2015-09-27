var expect = require("expect.js");
var moment = require('moment');
var Task, global;

describe("Sequelize ORM.", function() {
  before(function() {
    global = require("../../../api/models");
 	});
  
  it("Should make db authentication.", function(done) {
    global.sequelize.authenticate()
    .then(function() {
	    expect(true).to.be.ok();
	    done();
    })
    .catch(function(e) {
    	console.log(e);
	    expect(false).to.be.ok();
	    done();
    })
  });

  describe	("Task CRUD.", function(){
  	before(function(){
  		//TODO: Drop db
			Task = global.Task;
  	});
	  it("Should create.", function(done) {
			Task.create({description: 'First action', start_at: moment().format(), duration: 30})
		  .then(function(task){
		  	console.log(task);
		  	console.log('aaaaaaaaaaaaaa');
		  })
		  .error(function(err){
		  	console.log(err);
		  	console.log('bbbbbbbbbbbbb');
		  })
		  .then(function(){
		  	done();
		  });	  	
	  });
  });
});