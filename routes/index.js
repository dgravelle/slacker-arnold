var express = require('express');
var router = express.Router();
var arnold = require('./arnold');

router.use('/arnold', arnold);

module.exports = router;
