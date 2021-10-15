const db = require('../../config/db.config');
const Car = db.car;

exports.createBooking = async (req, res, next) => {
  try {
    let result = await Car.create(req.body);
    res.status(201).json(result.toJSON());
    next();
  } catch (error) {
    res.status(409).send(error.message);
  }
};
