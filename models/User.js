const sequelize = require('sequelize');
const db = require('../config/dbConfig');
const { Sequelize } = require('sequelize');
const PuzzleRating = require('./PuzzleRating');
const Puzzle = require('./Puzzle');
const SolveAttempt = require('./SolveAttempt');

const User = db.define('testUsers', {
    name: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    token: { type: Sequelize.STRING },
    verified: { type: Sequelize.BOOLEAN }
});

//User.hasMany(PuzzleRating);
PuzzleRating.belongsTo(User, {foreignKey: 'userID'});
Puzzle.belongsTo(User, {foreignKey: 'creatorID'});
SolveAttempt.belongsTo(User, {foreignKey: 'solverID'});

module.exports = User;
