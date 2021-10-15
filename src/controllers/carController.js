const { car } = require('../../config/db.config');
const db = require('../../config/db.config');
const Car = db.car;

exports.createCar = async (req, res, next) => {
  try {
    const carFind = await Car.findOne({
      where: {
        vin: req.body.vin,
      },
    });
    if (!carFind) {
      let result = await Car.create(req.body);
      res.status(201).json(result.toJSON());
    } else {
      throw new Error('Object already exist');
    }
    next();
  } catch (error) {
    res.status(409).send(error.message);
  }
};

exports.getCar = async (req, res, next) => {
  try {
    const requireFuelLevel = req.query.fuelLevel;
    const carsFind = await Car.findAll({});
    res.status(200).json(carsFind);

    // console.log(carsFind.length);
    next();
  } catch (error) {
    res.status(409).send(error.message);
  }
};
