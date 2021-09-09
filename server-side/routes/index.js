const express = require('express');
const router = express.Router();
const locale = require("./locale");
const weather = require("./weather");

router.use('/locale',locale);
router.use('/weather',weather);

module.exports = router;
