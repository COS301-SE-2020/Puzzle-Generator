const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');

const Challenge = db.define('testChallenges', {
    // details: { type: Sequelize.STRING },
    oneName: { type: Sequelize.STRING },
    oneDiff: { type: Sequelize.STRING },
    twoName: { type: Sequelize.STRING },
    twoDiff: { type: Sequelize.STRING },
    bonusName: { type: Sequelize.STRING },
    bonusDiff: { type: Sequelize.STRING }
});

module.exports = Challenge;