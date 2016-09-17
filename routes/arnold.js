require('dotenv').load();
const express = require('express');
const router = express.Router();
const slackToken = process.env.SLACK_TOKEN;
const commands = require('../commands');

function tokenCheck(req, res, next) {
    if(req.body.token !== slackToken) {
        res.status(401)
        res.send('Sorry, no token found. Try again with the right token ');
    }
    else {
        next()
    }
}

function randomQuote(arr) {
    let random = Math.round(Math.random() * arr.length)
    return arr[random]
}

router.get('/', (req, res) => {
    res.status(200).send("I'll be back...");
})

router.post('/', tokenCheck, (req, res) => {
    let response = {
        'response_type': 'in_channel'
    }
    let command = req.body.text;
    let arnoldSays;

    console.log();
    if (!command || command == 'help') {
        arnoldSays = commands['help'];
    }
    else {
        arnoldSays = randomQuote(commands[command]);
    }

    res.status(200).json(arnoldSays);
})

module.exports = router;
