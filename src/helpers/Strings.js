// exports

module.exports.pretty = _pretty;

// private

function _pretty(data) {
    return _prettyRec(data).trim();
}

function _prettyRec(data, indent) {
    indent = indent ? indent : '';
    if (typeof  data === 'object') {
        return '\n' + Object
                .keys(data)
                .reduce(
                    (memo, key) => {
                        return (memo + indent + '- ' + key.bold.red + ': ' + _prettyRec(data[key], indent + '   '))
                    },
                    ''
                );
    } else {
        return data + '\n';
    }
}