var Sequelize = require('sequelize');

let dbname = process.env.dbDatabase;
let uname =  process.env.dbUsername;
let pass = process.env.dbpass;
let dbHost = process.env.dbHost; 
console.log(dbname);
console.log(uname);
console.log(pass);
console.log(dbHost);

module.exports = new Sequelize(dbname, uname, pass, {
  host: 'ec2-52-208-175-161.eu-west-1.compute.amazonaws.com',
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
