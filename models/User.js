const sequelize = require('sequelize');
const db = require('../config/dbConfig');
const { Sequelize } = require('sequelize');
const PuzzleRating = require('./PuzzleRating');
const Puzzle = require('./Puzzle');

const User = db.define('testUsers', {
  name: { type: Sequelize.STRING },
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  token: { type: Sequelize.STRING },
});

//User.hasMany(PuzzleRating);
PuzzleRating.belongsTo(User, {foreignKey: 'userID'});
Puzzle.belongsTo(User, {foreignKey: 'creatorID'});

module.exports = User;
