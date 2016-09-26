var express = require('express');
var router = express.Router();
var arnold = require('./arnold');

router.use('/arnold', arnold);

router.get('/', (req, res) => {
    res.status(200).send("I'll be back...");
});

module.exports = router;
