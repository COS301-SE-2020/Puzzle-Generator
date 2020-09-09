const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');
const Puzzle = require('./Puzzle');

const SolveAttempt = db.define('testSolveAttempt', {
    entryID: { type: Sequelize.INTEGER },
    solverID: { type: Sequelize.INTEGER },
    puzzleID: { type: Sequelize.INTEGER },
    solved: { type: Sequelize.BOOLEAN },
    attempted: { type: Sequelize.BOOLEAN },
    dateAttempted: { type: Sequelize.DATE },
    attemptDuration: { type: Sequelize.STRING }
});

module.exports = SolveAttempt;