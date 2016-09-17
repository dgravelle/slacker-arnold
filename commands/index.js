const fs = require('fs');

const commands = fs.readdirSync(__dirname).reduce((a, file) => {
        var key = file.slice(0, file.length - 3);

        if (file !== 'index.js') {
            a[key] = require(`./${file}`);
        }

        return a
    }, {});

module.exports = commands;
