const Sequelize = require('sequelize');

const sequelize = new Sequelize('webquiz', 'root', 'irakli12369', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;