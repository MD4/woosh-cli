var Transport = require('../core/Transport');

//exports

module.exports = _default;

// private

function _default(callback) {
    Transport.disconnect();
    callback(true);
}