var Sequelize = require('sequelize');

let dbname = "d8p3lhb532ohul";
let uname =  "ylynpgszqkbeqm";
let pass = "a05ddeac0494396e212a786d22592918da019e7553b570a9c8c5cd6319767f9e";
console.log(dbname);
console.log(uname);
console.log(pass);

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
