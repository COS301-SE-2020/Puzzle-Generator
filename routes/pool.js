const Pool = require("pg").Pool;
var express = require('express');
var router = express.Router();

const DB_NAME = process.env.dbDatabase;
const DB_USERNAME =  process.env.dbUsername;
const DB_PASSWORD = process.env.dbpass;
const DB_HOST = "ec2-54-228-209-117.eu-west-1.compute.amazonaws.com";

const pool = new Pool
({
    user:DB_USERNAME,
    host:DB_HOST,
    database:DB_NAME,
    password:DB_PASSWORD,
    ssl: { rejectUnauthorized: false }
});

module.exports = router;
