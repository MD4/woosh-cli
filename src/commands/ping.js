var Transport = require('../core/Transport');

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
                console.log('pong: %sms', new Date() - pingTime);
                callback();
            }
        )
        .emit(symbolReq);
}