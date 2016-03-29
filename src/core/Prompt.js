var prompt = require('prompt')

var Parser = require('./Parser')

// exports

module.exports = _default

// private

function _default(callback) {
    prompt.start()

    prompt.message = ''
    prompt.delimiter = ''

    _loop(callback)
}

function _loop(callback) {
    _getCommand(
        (end, code) => {
            if (end) {
                return callback(code ? Number(code) : 0)
            }
            return _loop(callback)
        }
    )
}

function _getCommand(callback) {
    prompt.get(
        {
            properties: {
                command: {
                    message: '#'.yellow
                }
            }
        },
        function (err, result) {
            if (err) {
                console.log()
                return callback(true, 1)
            }
            return Parser.parse(result.command, callback)
        }
    )
}