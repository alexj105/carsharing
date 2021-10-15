const env = require('./env.js');

const { Sequelize } = require('sequelize');
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

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.car = require('../src/models/car.model.js');
db.run = require('../src/models/run.model')(sequelize, Sequelize);
db.driver = require('../src/models/driver.model')(sequelize, Sequelize);
db.creditCard = require('../src/models/creditCard.model')(sequelize, Sequelize);
db.booking = require('../src/models/booking.model')(sequelize, Sequelize);

db.car.hasMany(db.run, {
  onDelete: 'CASCADE',
  foreignKey: { allowNull: false },
});
db.run.belongsTo(db.car, {
  foreignKey: { field: 'carId', allowNull: false },
});

db.driver.hasMany(db.run, {
  onDelete: 'CASCADE',
  foreignKey: { allowNull: false },
});
db.run.belongsTo(db.driver, {
  foreignKey: { field: 'driverId', allowNull: false },
});

db.driver.hasMany(db.creditCard, {
  onDelete: 'CASCADE',
  foreignKey: { allowNull: false },
});

db.creditCard.belongsTo(db.driver, {
  foreignKey: { field: 'driverId', allowNull: false },
});

db.car.hasMany(db.booking, {
  onDelete: 'CASCADE',
  foreignKey: { allowNull: false },
});

db.booking.belongsTo(db.car, {
  foreignKey: { field: 'carId', allowNull: false },
});

db.booking.hasOne(db.run);
db.run.belongsTo(db.booking, {
  foreignKey: { field: 'bookingId', allowNull: false },
});

module.exports = db;
