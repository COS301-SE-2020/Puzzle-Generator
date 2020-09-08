const sequelize = require('sequelize');
const db = require('../config/dbConfig');
const { Sequelize } = require('sequelize');
const PuzzleRating = require('./PuzzleRating');
const SolvedPuzzle = require('./SolvedPuzzle');

const Puzzle = db.define('testPuzzles', {
    name: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    puzzleObject: {type: Sequelize.STRING},
    creatorID: { type: Sequelize.INTEGER },
    shared: { type: Sequelize.BOOLEAN },
    image: { type: Sequelize.STRING }
});

PuzzleRating.belongsTo(Puzzle, {foreignKey: 'puzzleID'});
SolvedPuzzle.belongsTo(Puzzle, {foreignKey: 'puzzleID'});

module.exports = Puzzle;
