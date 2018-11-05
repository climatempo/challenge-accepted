'use strict';

const express = require('express');
const router = express.Router();
let local = "";

router.get('/', function(req, res, next){
  let debug = [], date = ["Data"], text = ["Descrição"], min = ["Mínima"], max = ["Máxima"], proba = ["Prob."], precip = ["Precip."];  
  
  res.render('index', { local: local, date: date, text: text, min: min, max: max, proba: proba, precip: precip });

  date.length = 0, text.length = 0, min.length = 0, max.length = 0, proba.length = 0, precip.length = 0;
})

module.exports = router;
