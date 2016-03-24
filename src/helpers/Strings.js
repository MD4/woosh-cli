// exports

module.exports.pretty = _pretty;

// private

function _pretty(data, indent) {
    indent = indent ? indent : '';
    if (typeof  data === 'object') {
        return '\n' + Object
                .keys(data)
                .reduce(
                    (memo, key) => {
                        return (memo + indent + key.bold.red + ': ' + _pretty(data[key], indent + ' '))
                    },
                    ''
                );
    } else {
        return JSON.stringify(data) + '\n';
    }
}