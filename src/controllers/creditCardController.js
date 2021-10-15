const db = require('../../config/db.config');
const Card = db.creditCard;

exports.createCard = async (req, res) => {
  try {
    let result = await Card.create(req.body);
    res.status(201).json(result.toJSON());
  } catch (error) {
    console.log(error.message);
    res.status(409).send(error.message);
  }
};
