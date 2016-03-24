var Transport = require('../core/Transport');

var Strings = require('../helpers/Strings');

//exports

module.exports = _default;

// private

const symbolReq = 'PING';
const symbolRes = 'PONG';

function _default(callback) {
    var pingTime = new Date();
    Transport
        .io()
        .off(symbolRes)
        .on(
            symbolRes,
            () => {
                console.log(Strings.pretty({
                    pong: (new Date() - pingTime) + 'ms (' + new Date() + ')'
                }));
                callback();
            }
        )
        .emit(symbolReq);
}