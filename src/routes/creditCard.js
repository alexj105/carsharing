const express = require('express');
const cardController = require('../controllers/creditCardController');
const router = new express.Router();

router.post('/card/create', cardController.createCard);
module.exports = router;
