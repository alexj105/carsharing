const { Sequelize } = require('sequelize');
const env = require('../../config/env');

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
  logging: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const Car = sequelize.define('car', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  vin: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  reg_number: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  model: { type: Sequelize.STRING, allowNull: false },
  prod_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  car_status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'free',
  },
  fuel_level: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '100%',
  },
  mileage: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  geo_long: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  geo_lat: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
sequelize.sync().then(() => {
  console.log('Drop and re-sync db.');
});

module.exports = Car;
