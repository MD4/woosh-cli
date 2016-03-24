var Transport = require('../core/Transport');

var Strings = require('../helpers/Strings');

//exports

module.exports = _default;

// private

const symbolReq = 'SAY';
const symbolRes = 'SAY';

function _default(callback, params) {
    Transport
        .io()
        .off(symbolRes)
        .on(
            symbolRes,
            (data) => {
                console.log(Strings.pretty(data));
                callback();
            }
        )
        .emit(
            symbolReq,
            {text: params[0]}
        );
}