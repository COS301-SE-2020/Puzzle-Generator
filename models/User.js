<<<<<<< HEAD
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

=======
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

>>>>>>> 02798d2926f6d7240724b7973dcb1fbc41b963eb
module.exports = User;