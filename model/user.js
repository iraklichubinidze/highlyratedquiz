const sequelize = require('../database/database.js');
const Sequelize = require('sequelize');


const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username: Sequelize.STRING,
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    firstname: {
        type: Sequelize.STRING,
    },
    lastname: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = User;