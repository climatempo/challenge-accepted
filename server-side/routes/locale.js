const express = require('express');
const Locale = require('../model/Locale');
const router = express.Router();

router.get("/", async (req, res, next) => {
  let locales = await Locale.find({})
  res.status(200).json(locales)
})

module.exports = router