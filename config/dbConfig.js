var Sequelize = require('sequelize');

let dbname = process.env.dbDatabase;
let uname =  process.env.dbUsername;
let pass = process.env.dbpass;
let dbHost = process.env.dbHost;
console.log("DB::"+dbname);
console.log("Username::"+uname);
//console.log(pass);
console.log("Host::"+dbHost);

module.exports = new Sequelize(dbname, uname, pass, {
  host: dbHost,
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
