const sequelize = require('sequelize');
const db = require('../config/dbConfig');
const { Sequelize } = require('sequelize');

const Challenge = db.define('testChallenges', {
    details: { type: Sequelize.STRING }
});

module.exports = Challenge;
