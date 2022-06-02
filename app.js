const express = require('express');
const sequelize = require('./database/database.js');
const PORT = 3000;
const app = express();
const userRoute = require('./routes/users.js');
const productRoute = require('./routes/products.js');
const orderRoute = require('./routes/order.js');
const Product = require('./model/products');
const User = require('./model/user');
const Order = require('./model/order');
const { or } = require('sequelize/types');

app.use(express.json());

app.use(productRoute);
app.use(userRoute);
app.use(orderRoute);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
Order.belongsTo(User,  { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Order);


sequelize
  .sync()
  .then(result => app.listen(PORT))
  .catch(err => console.log(err));