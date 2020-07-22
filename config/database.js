var Sequelize = require('sequelize');

module.exports = new Sequelize('d8p3lhb532ohul', 'ylynpgszqkbeqm', 'a05ddeac0494396e212a786d22592918da019e7553b570a9c8c5cd6319767f9e', {
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
