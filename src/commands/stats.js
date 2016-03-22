var Transport = require('../core/Transport');

//exports

module.exports = _default;

// private

const symbolReq = 'STATS';
const symbolRes = 'STATS';

function _default(callback) {
    Transport
        .io()
        .off(symbolRes)
        .on(
            symbolRes,
            (data) => {
                console.log('stats: \n', data);
                callback();
            }
        )
        .emit(symbolReq);
}