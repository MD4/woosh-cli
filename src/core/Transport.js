var socket = require('socket.io-client')

var io = null

// exports

module.exports.connect = _connect
module.exports.disconnect = _disconnect
module.exports.io = _io

// private

function _io() {
    return io
}

function _connect(uri) {
    io = socket(uri)

    io.on('connect_error', _onConnectError)
    io.on('connect', _onConnect)
    io.on('disconnect', _onDisconnect)

    return this
}

function _disconnect() {
    io.close()

    return this
}

function _onConnect() {
    console.log('Connected.')
}

function _onConnectError(err) {
    console.error('Connection error.', err)
    process.exit(1)
}

function _onDisconnect() {
    console.log('\nDisconnected.')
    process.exit()
}