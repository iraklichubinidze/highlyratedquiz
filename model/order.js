const sequelize = require('../database/database.js');
const Sequelize = require('sequelize');


const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  createdate: {
        type: Sequelize.DATE,
        allowNull: false,
  },
  user: {
        type: Sequelize.STRING,
  },
  product: {
        type: Sequelize.STRING,
  }

});

module.exports = Order;