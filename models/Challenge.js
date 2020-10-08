const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');

const Challenge = db.define('testChallenges', {
    details: { type: Sequelize.STRING }
});

module.exports = Challenge;