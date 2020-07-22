const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');
const User = require('./User');

const PuzzleRating = db.define('testPuzzleRatings', {
    rating: { type: Sequelize.DOUBLE },
    puzzleID: { type: Sequelize.NUMBER },
    userID: { type: Sequelize.NUMBER }
});

//PuzzleRating.belongsTo(User);
//Puzzle.belongsTo(PuzzleRating, {foreignKey: 'puzzleID'});

module.exports = PuzzleRating;
