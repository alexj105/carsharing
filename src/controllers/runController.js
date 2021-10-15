const db = require('../../config/db.config');
const Run = db.run;

exports.createRun = async (req, res) => {
  try {
    let result = await Run.create(req.body);
    res.status(201).json(result.toJSON);
  } catch (error) {
    res.status(409).send(error.message);
  }
};
