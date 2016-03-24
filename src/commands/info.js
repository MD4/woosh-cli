var commandsNames = require('./commands').commandsNames;

var packageInfo = require('../../package.json');

var Strings = require('../helpers/Strings');

//exports

module.exports = _default;

// private

function _default(callback) {
    console.log(Strings.pretty({
        info: {
            name: packageInfo.name,
            version: packageInfo.version,
            author: packageInfo.author
        },
        commands: commandsNames
    }));
    callback();
}