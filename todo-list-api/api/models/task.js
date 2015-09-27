"use strict";

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Task", {
    description:{
		type: DataTypes.STRING,
	    allowNull: false,
    },
    start_at:{
    	type: DataTypes.DATE,
	    allowNull: false,
    },
    end_at:{
    	type: DataTypes.DATE
    },
	duration:{
		type: DataTypes.INTEGER
    }
  })
}