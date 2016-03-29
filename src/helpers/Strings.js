// exports

module.exports.pretty = _pretty

// private

function _pretty(data) {
    return _prettyRec(data).trim()
}

function _prettyRec(data, indent) {
    const currentIndent = indent ? indent : ''
    if (data instanceof Array) {
        return '\n' + data
                .map((value) => currentIndent + '- ' + _prettyRec(value))
                .join('')
    }
    if (typeof data === 'object') {
        return '\n' + Object
                .keys(data)
                .reduce(
                    (memo, key) => {
                        return (memo + currentIndent + '* ' + key.bold.red + ': ' + _prettyRec(data[key], currentIndent + '   '))
                    },
                    ''
                )
    }
    return data + '\n'
}