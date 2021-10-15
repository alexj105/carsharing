module.exports = (sequelize, Sequelize) => {
  const Card = sequelize.define('card', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    card_number: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    card_holder: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    card_validDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
  return Card;
};
