const Pool = require("pg").Pool;
var express = require('express');
var router = express.Router();

const DB_NAME = "dfqtmc7rr2t3l3";
const DB_USERNAME = "kxdtgexhuustyz";
const DB_PASSWORD = "90aa97f7e6cbcae5a990672689f5501f60beb55617de070c88f1913aed6f7b5f";
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