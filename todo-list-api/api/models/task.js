module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Task", {
    description: DataTypes.STRING,
    when: DataTypes.STRING
  })
}

// sequelize
// .authenticate()
// .then(function(err) {
//   console.log('Connection has been established successfully.');
// }, function (err) { 
//   console.log('Unable to connect to the database:', err);
// });
