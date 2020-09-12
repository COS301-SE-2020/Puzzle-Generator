const sequelize = require('sequelize');
const db = require('../config/dbConfig');
const { Sequelize } = require('sequelize');
const Puzzle = require('./Puzzle');

const SolveAttempt = db.define('testSolveAttempts', {
    solverID: { type: Sequelize.INTEGER },
    puzzleID: { type: Sequelize.INTEGER },
    solved: { type: Sequelize.BOOLEAN },
    attempted: { type: Sequelize.BOOLEAN },
    createdAt: { type: Sequelize.DATE },
    attemptDuration: { type: Sequelize.STRING }
});

module.exports = SolveAttempt;
