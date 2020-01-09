'trim' in String.prototype && (function () {
    var whitespace = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
    var notWhitespace = '\u200B\u0085\u180E';
    return !whitespace.trim() &&
        notWhitespace.trim() === notWhitespace &&
        whitespace.trim.name === 'trim';
}())