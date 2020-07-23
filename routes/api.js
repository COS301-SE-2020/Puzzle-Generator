var express = require('express');
var router = express.Router();

//const express = require('express');
const Pool = require("pg").Pool;
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv').config();
const Str = require('@supercharge/strings');
var cors = require('cors');
var fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

//const PORT = process.env.port || 3200;
/**
** user endpoints below
*/

/**
 * create user endpoint
 */
var usersRouter = require('./users');
var puzzleRouter = require('./puzzles');
router.use('users',usersRouter);
router.use('puzzle',puzzleRouter);

module.exports = router;