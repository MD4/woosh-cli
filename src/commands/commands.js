const commandsNames = module.exports.commandsNames = [
    'disconnect',
    'ping',
    'stats',
    'say',
    'info'
]

module.exports.commands = {}

commandsNames.forEach(
    (commandName) => module.exports.commands[commandName] = require('./' + commandName)
)