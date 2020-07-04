const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');

const User = db.define('testUsers', {
    name: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    token: { type: Sequelize.STRING },
});

module.exports = User;