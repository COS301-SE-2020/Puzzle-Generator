const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');
const Puzzle = require('./Puzzle');

const SolvedPuzzle = db.define('testSolvedPuzzles', {
    solverID: { type: Sequelize.INTEGER },
    puzzleID: { type: Sequelize.INTEGER },
    dateSolved: { type: Sequelize.DATE },
    timeTakenToSolve: { type: Sequelize.TIME }
});

module.exports = SolvedPuzzle;