const db = require('../../config/db.config');
const Car = require('../models/car.model');
module.exports = (sequelize, Sequelize) => {
  const Run = sequelize.define('run', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    start_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    start_fuel: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    start_mileage: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });

  return Run;
};
