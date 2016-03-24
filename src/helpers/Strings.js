// exports

module.exports.pretty = _pretty;

// private

function _pretty(data) {
    return _prettyRec(data).trim();
}

function _prettyRec(data, indent) {
    indent = indent ? indent : '';
    if (data instanceof Array) {
        return '\n' + data
            .map((value) => indent + '- ' + _prettyRec(value))
            .join('');
    }
    if (typeof  data === 'object') {
        return '\n' + Object²
                .keys(data)
                .reduce(
                    (memo, key) => {
                        return (memo + indent + '* ' + key.bold.red + ': ' + _prettyRec(data[key], indent + '   '))
                    },
                    ''
                );
    }
    return data + '\n';
}