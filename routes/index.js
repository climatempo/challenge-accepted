'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const HomeController = require('../controller/homeController');

router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.get('/previsao', HomeController.findByLocale);

module.exports = router;