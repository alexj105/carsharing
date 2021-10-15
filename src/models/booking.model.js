module.exports = (sequelize, Sequelize) => {
  const Booking = sequelize.define('booking', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    finish_fuel_level: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    finish_mileage: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  return Booking;
};
