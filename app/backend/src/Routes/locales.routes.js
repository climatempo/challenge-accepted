const express = require('express');

const router = express.Router();

const LocalesControllers = require('../Controllers/localesController');
const localeVerifierMiddleware = require('../Middlewares/localeVerifier')

const localesController = new LocalesControllers();

// returns all locales
router.get('/', localesController.getAllLocales);

// checks if the locale name exists in db, and if so, returns the locale
router.get('/:name', localeVerifierMiddleware, localesController.getLocaleByName);

module.exports = router;
