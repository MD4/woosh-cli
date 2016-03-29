var Transport = require('../core/Transport')

var Strings = require('../helpers/Strings')

//exports

module.exports = _default

// private

const symbolReq = 'STATS'
const symbolRes = 'STATS'

function _default(callback) {
    Transport
        .io()
        .off(symbolRes)
        .on(
            symbolRes,
            (data) => {
                console.log(Strings.pretty(data))
                callback()
            }
        )
        .emit(symbolReq)
}