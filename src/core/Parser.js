var commands = require('../commands/commands').commands

// exports

module.exports.parse = _parse

// private

function _parse(command, callback) {
    if (!command) {
        return callback(false, 0)
    }

    const params = command.split(' ')

    if (!params.length) {
        return callback(false, 0)
    }

    const commandFn = commands[params[0]]

    if (commandFn) {
        return commandFn(callback, params.slice(1))
    }

    console.error('Unknown command: %s'.red, command)
    return callback()
}
