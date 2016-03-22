var Transport = require('../core/Transport');
var Prompt = require('../core/Prompt');

//exports

module.exports = _default;

// private

function _default(params) {
    var uri = [
        'ws://',
        params.args[0]
    ].join('');

    console.log('Connecting to %s...', uri);

    Transport
        .connect(uri)
        .io()
        .on('connect', _onConnect);
}

function _onConnect() {
    Prompt((code) => process.exit(code));
}