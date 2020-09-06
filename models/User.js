const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');
const PuzzleRating = require('./PuzzleRating');
const Puzzle = require('./Puzzle');
const SolvedPuzzle = require('./SolvedPuzzle');

const User = db.define('testUsers', {
    name: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    token: { type: Sequelize.STRING },
});

//User.hasMany(PuzzleRating);
PuzzleRating.belongsTo(User, {foreignKey: 'userID'});
Puzzle.belongsTo(User, {foreignKey: 'creatorID'});
SolvedPuzzle.belongsTo(User, {foreignKey: 'solverID'});

module.exports = User;