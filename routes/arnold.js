'use strict'

require('dotenv').load();
const express = require('express');
const router = express.Router();
const slackToken = process.env.SLACK_TOKEN;
const commands = require('../commands');

function tokenCheck(req, res, next) {
    let token = req.body.token;
    if(!token || token !== slackToken) {
        res.status(401).send('Sorry, no token found. Try again with the right token ');
    }
    else {
        next()
    }
}

function randomQuote(arr) {
    let random = Math.round(Math.random() * arr.length)
    return arr[random]
}

router.use('/', tokenCheck);

router.get('/', (req, res) => {
    res.status(200).send("I'll be back...");
})

router.post('/', (req, res) => {
    let response = {};
    let command = req.body.text;
    let arnoldSays;

    console.log();
    if (!command || command == 'help') {
        response.response_text = 'ephemeral'
        arnoldSays = commands['help'];
    }
    else {
        response.response_type = 'in_channel';
        arnoldSays = randomQuote(commands[command]);
    }

    response.text = arnoldSays;
    res.status(200).json(response);
})

module.exports = router;
