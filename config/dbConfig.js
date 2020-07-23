var Sequelize = require('sequelize');

let dbname = process.env.dbDatabase;
let uname =  process.env.dbUsername;
let pass = process.env.dbpass;
console.log(dbname);
console.log(uname);
console.log(pass);

module.exports = new Sequelize(dbname, uname, pass, {
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
