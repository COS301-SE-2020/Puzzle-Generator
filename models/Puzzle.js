const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');
const PuzzleRating = require('./PuzzleRating');
const SolveAttempt = require('./SolveAttempt');

const Puzzle = db.define('testPuzzles', {
    name: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    puzzleObject: {type: Sequelize.STRING},
    creatorID: { type: Sequelize.INTEGER },
    shared: { type: Sequelize.BOOLEAN },
    image: { type: Sequelize.STRING }
});

PuzzleRating.belongsTo(Puzzle, {foreignKey: 'puzzleID'});
//SolvedPuzzle.belongsTo(Puzzle, {foreignKey: 'puzzleID'});
SolveAttempt.belongsTo(User, {foreignKey: 'puzzleID'});

module.exports = Puzzle;