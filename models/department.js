const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Department = sequelize.define('department', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
});
module.exports = Department;
