const db = require('../../config/db.config');
const Driver = db.driver;

exports.createDriver = async (req, res, next) => {
  try {
    let result = await Driver.create(req.body);
    res.status(201).json(result.toJSON());
    next();
  } catch (error) {
    res.status(409).send(error.message);
  }
};
