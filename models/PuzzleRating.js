const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');

const PuzzleRating = db.define('testPuzzleRatings', {
    rating: { type: Sequelize.DOUBLE },
    puzzleID: { type: Sequelize.NUMBER },
    userID: { type: Sequelize.NUMBER }
});

module.exports = PuzzleRating;