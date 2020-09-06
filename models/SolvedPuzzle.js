<<<<<<< HEAD
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

=======
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

>>>>>>> 02798d2926f6d7240724b7973dcb1fbc41b963eb
module.exports = SolvedPuzzle;