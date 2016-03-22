var prompt = require('prompt');

var Parser = require('./Parser');

// exports

module.exports = _default;

// private

function _default(callback) {
    prompt.start();

    prompt.message = '';
    prompt.delimiter = '';

    _loop(callback);
}

function _loop(callback) {
    _getCommand(
        (end, code) => {
            if (end) {
                callback(code ? +code : 0);
            } else {
                _loop(callback);
            }
        }
    );
}

function _getCommand(callback) {
    prompt.get({
            properties: {
                command: {
                    message: '#'.yellow
                }
            }
        },
        function (err, result) {
            if (err) {
                console.log();
                return callback(true, 1);
            }

            Parser.parse(result.command, callback);
        }
    );
}