const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Employee = sequelize.define('employee', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  address: Sequelize.STRING,
  salary: Sequelize.STRING,
});
module.exports = Employee;
