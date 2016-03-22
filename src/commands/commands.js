module.exports.commands = [
    'disconnect',
    'ping',
    'stats'
];

module.exports.commands.forEach(
    (commandName) => module.exports[commandName] = require('./' + commandName)
);