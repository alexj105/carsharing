const express = require('express');
const driverController = require('../controllers/driverController');
const router = new express.Router();

router.post('/driver/create', driverController.createDriver);

module.exports = router;
