var Sequelize = require('sequelize');

module.exports = new Sequelize(process.env.DBDatabase, process.env.DBUsername, process.env.DBPass, {
  host: 'ec2-54-228-209-117.eu-west-1.compute.amazonaws.com',
  dialect: 'postgres',
  port: 5432,
  ssl:true,
  dialectOptions:
    { ssl: {require:true, rejectUnauthorized: false }},

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});
