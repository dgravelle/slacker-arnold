const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.body);
    res.status(200);
    res.send("I'll be back...");
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200);
    res.send("I'm back");
})

module.exports = router;
