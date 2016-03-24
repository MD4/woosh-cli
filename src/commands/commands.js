var Strings = require('../helpers/Strings');

module.exports.commandsNames = [
    'disconnect',
    'ping',
    'stats',
    'say',
    'info'
];

module.exports.commands = {};

this.commandsNames.forEach(
    (commandName) => module.exports.commands[commandName] = require('./' + commandName)
);