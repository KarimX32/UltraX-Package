function passGen(Length) {
    if (!Length) throw new TypeError("Length isn't specified")
    var length = Length,
        res = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        value = "";
    for (var i = 0, n = res.length; i < length; ++i) {
        value += res.charAt(Math.floor(Math.random() * n));
    }
    return value;
}

module.exports = passGen;