const express = require('express');

const router = new express.Router();

const carsController = require('../controllers/carController');

router.post('/car/create', carsController.createCar);
router.get('/car', carsController.getCar);

module.exports = router;
