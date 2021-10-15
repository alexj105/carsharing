const express = require('express');

const router = new express.Router();

const runController = require('../controllers/runController');

router.post('/run/create', runController.createRun);

module.exports = router;
